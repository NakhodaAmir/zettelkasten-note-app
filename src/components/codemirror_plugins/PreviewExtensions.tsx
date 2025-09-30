import { syntaxTree } from "@codemirror/language";
import { Decoration, EditorView, ViewPlugin, ViewUpdate } from "@codemirror/view";

export const headerPreview = ViewPlugin.fromClass(
  class {
    decorations;

    constructor(view: EditorView) {
      this.decorations = this.buildDecorations(view);
    }

    update(update: ViewUpdate) {
      if (update.docChanged || update.viewportChanged) {
        this.decorations = this.buildDecorations(update.view);
      }
    }

    buildDecorations(view: EditorView) {
      let decos: any[] = [];

      for (let { from, to } of view.visibleRanges) {
        syntaxTree(view.state).iterate({
          from,
          to,
          enter: (node) => {
            if (node.type.name === "ATXHeadingMark") {
              // Hide the `#` markers
              decos.push(Decoration.replace({}).range(node.from, node.to));
            }

            if (node.type.name === "ATXHeading1" ||
                node.type.name === "ATXHeading2" ||
                node.type.name === "ATXHeading3" ||
                node.type.name === "ATXHeading4" ||
                node.type.name === "ATXHeading5" ||
                node.type.name === "ATXHeading6") {
              // Apply a style to the heading text
              decos.push(
                Decoration.mark({
                  class: `cm-${node.type.name.toLowerCase()}`
                }).range(node.from, node.to)
              );
            }
          },
        });
      }

      return Decoration.set(decos, true);
    }
  },
  {
    decorations: (v) => v.decorations,
  }
);
