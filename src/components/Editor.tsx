import { EditorView, basicSetup } from "codemirror";
import { keymap, ViewUpdate } from "@codemirror/view";
import { insertTab } from "@codemirror/commands"
import { EditorState } from "@codemirror/state";
import { markdown } from "@codemirror/lang-markdown";
import { useRef, useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks"
import theme from "./codemirror_plugins/theme";
import "../styles/Editor.css"
import { headerPreview } from "./codemirror_plugins/PreviewExtensions";

function Editor({ preview }: { preview: boolean }) {
  const textarea = useRef<HTMLDivElement>(null);
  const editorView = useRef<EditorView | null>(null);
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    if (!textarea.current) return;

    let state = EditorState.create({
      extensions: [
        basicSetup,
        keymap.of([
          {
            key: "Tab",
            run: insertTab
          },
        ]),
        markdown(),
        EditorView.lineWrapping,
        EditorView.updateListener.of((v: ViewUpdate) => {
          if (v.docChanged) {
            setMarkdownText(v.state.doc.toString())
          }
        }),
        theme,
        headerPreview
      ]
    });
    editorView.current = new EditorView({
      state,
      parent: textarea.current,
    });

    return () => editorView.current?.destroy();
  }, []);

  return (
    <div id="editor">
      <div id="textarea" ref={textarea} tabIndex={0} className={preview ? ("hidden") : ("show")}></div>
      {preview && <Markdown remarkPlugins={[remarkGfm]}>{markdownText}</Markdown>}
    </div>
  );
}

export default Editor;
