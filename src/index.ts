import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

new EditorView({
  state: EditorState.create({
    doc: "hello",
  }),
  parent: document.getElementById("codemirror") as HTMLElement,
});
