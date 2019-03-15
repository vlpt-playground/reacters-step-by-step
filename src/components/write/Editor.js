import React, { Component } from 'react';
import 'quill/dist/quill.bubble.css';
import './Editor.scss';
import EditorHead from './EditorHead';
import Quill from 'quill';

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

    this.setPost();
  };

  handleChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  focusEditor = () => {
    this.quill.focus();
  };

  // 에디터 초기상태 설정
  setPost = () => {
    const { post } = this.props;
    if (!post) return;
    this.setState({
      title: post.title
    });
    this.quill.root.innerHTML = post.body;
  };

  handleSubmit = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.quill.root.innerHTML
    });
  };
  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post !== this.props.post) {
      // post 가 바뀔 경우 에디터 초기 상태 재설정
      this.setPost();
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.focusEditor();
    }
  };

  render() {
    const { title } = this.state;
    return (
      <div className="Editor">
        <EditorHead
          onSubmit={this.handleSubmit}
          onCancel={this.props.onCancel}
          edit={!!this.props.post} // 수정중이란것을 명시
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
