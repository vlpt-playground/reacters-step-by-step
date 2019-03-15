import React, { Component } from 'react';
import './EditorHead.scss';
import Responsive from '../base/Responsive';
class EditorHead extends Component {
  state = {
    scrolling: false
  };

  // 스크롤바가 맨 위에 있는게 아니라면, 그림자를 보여준다.
  handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const scrolling = scrollTop > 0;
    if (this.state.scrolling === scrolling) return;
    this.setState({
      scrolling
    });
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { onSubmit, onCancel, edit } = this.props;
    return (
      <>
        <div
          className={[
            'EditorHead',
            this.state.scrolling ? 'scrolling' : ''
          ].join(' ')}
        >
          <Responsive className="wrapper">
            <button className="cancel" onClick={onCancel}>
              취소
            </button>
            <button className="submit" onClick={onSubmit}>
              {edit ? '수정하기' : '작성하기'}
            </button>
          </Responsive>
        </div>
        <div className="padding" />
      </>
    );
  }
}

export default EditorHead;
