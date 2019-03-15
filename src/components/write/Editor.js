import React, { Component } from 'react';
import 'quill/dist/quill.bubble.css';
import './Editor.scss';

import Quill from 'quill';
import EditorHead from './EditorHead';

class Editor extends Component {
  editor = React.createRef();
  quill = null;
  state = {
    title: ''
  };

  initialize = () => {
    const quill = new Quill(this.editor.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요.',
      modules: {
        toolbar: [
          ['bold', 'italic'],
          [{ header: '1' }, { header: '2' }],
          ['blockquote', 'code-block', 'link', 'image']
        ]
      }
    });
    quill.on('text-change', (delta, oldDelta, source) => {
      const selection = quill.getSelection();
      if (!selection) return;
      if (selection.index === quill.getLength() - 1) {
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
    this.quill = quill;
  };

  handleChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  componentDidMount() {
    this.initialize();
  }

  focusEditor = () => {
    this.quill.focus();
  };

  handleSubmit = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.quill.root.innerHTML // 에디터 안의 내용을 html 형태로 출력
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="Editor">
        <EditorHead
          onSubmit={this.handleSubmit}
          onCancel={this.props.onCancel}
        />
        <input
          placeholder="제목을 입력하세요."
          className="title"
          value={title}
          onChange={this.handleChangeTitle}
          autoFocus
          onKeyPress={this.handleKeyPress}
        />
        <div
          className="quill-editor"
          ref={this.editor}
          onClick={this.focusEditor}
        />
      </div>
    );
  }
}

export default Editor;
