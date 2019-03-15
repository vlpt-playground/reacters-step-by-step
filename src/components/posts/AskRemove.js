import React from 'react';
import './AskRemove.scss';

const AskRemove = ({ onCancel, onConfirm }) => {
  return (
    <div className="AskRemove">
      <div className="box">
        <div className="message">정말 삭제하시겠습니까?</div>
        <div className="buttons">
          <button className="cancel" onClick={onCancel}>
            취소
          </button>
          <button className="confirm" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskRemove;
