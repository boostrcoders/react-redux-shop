import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class MyEditor extends React.Component {
  state = { editorState: EditorState.createEmpty() };
  onChange = editorState => this.setState({ editorState });

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }
  _onItalicClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }
  render() {
    return (
      <div>
        <button
          className="richutils-btn"
          onClick={this._onBoldClick.bind(this)}
        >
          <strong>B</strong>
        </button>
        <button
          className="richutils-btn"
          onClick={this._onItalicClick.bind(this)}
        >
          <em>I</em>
        </button>
        <div className="input-box">
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand.bind(this)}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default MyEditor;
