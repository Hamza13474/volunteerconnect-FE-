

import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';


class TextEditor extends Component {
  state = {
    editorState: undefined,
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.props.onEditorChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  };

  render() {
    const { editorState } = this.state;
    
    return (
      <div className='fffffffffffffffffff'>
        <Editor
          wrapperClassName="demo-wrapper editor___input"
          editorClassName="demo-editor"
          placeholder='Enter Task Description'
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled hidden
          value={editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}

export default React.memo(TextEditor);