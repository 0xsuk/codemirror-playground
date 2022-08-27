import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { html } from "@codemirror/lang-html";
import { abbreviationTracker } from "@emmetio/codemirror6-plugin";

new EditorView({
  state: EditorState.create({
    doc: "hello",
    extensions: [html(), abbreviationTracker()],
  }),
  parent: document.getElementById("codemirror"),
});
