import React, { useState, useReducer } from "react";
import Comment from './comment';
import comment from '../Data.json';
import avatar1 from './Images/avatars/image-juliusomo.png';
import './scss/main.scss';
import Reply from "./Reply";
import ReplyInput from './ReplyInput';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [getTextareaValue, setTextareaValue] = useState('');
  const [data, setData] = useState(comment.comments);
  // getting all replies
  const allReplies = data.map((item) => {
    if (item.replies.length > 0) {
      return item.replies
    }
  });
  const [, filledReplies] = allReplies;
  const [replyData, setreplyData] = useState(filledReplies);

  const handleTextAreaValue = (event) => {
    setTextareaValue(event.target.value);
  }
  const handleSubmitComment = () => {
    let newObj = {
      "id": uuidv4(),
      "content": `${getTextareaValue}`,
      "createdAt": "92 days ago",
      "score": 10,
      "replies": [],
      "user": {
        "username": "juliusomo"
      }
    }
    setreplyData([...replyData, newObj]);
    setTextareaValue(prev => prev = '')
  };

  const handleEdit = (e) => {
    e.target.parentElement.classList.add('display-none');
    e.target.parentElement.nextElementSibling
      .classList.remove('display-none');
    let value = (e.target.parentElement.parentElement
      .parentElement.nextElementSibling
      .querySelector('.comment-text-content p').innerHTML);
    let pElement = e.target.parentElement.parentElement
      .parentElement.nextElementSibling
      .querySelector('.comment-text-content p');
    let textArea = document.createElement('textarea');
    textArea.value = value;
    textArea.cols = "30";
    textArea.rows = '5';
    textArea.style.resize = "none";
    textArea.style.width = "100%";
    pElement.replaceWith(textArea);
  }

  const saveEdit = (e) => {
    e.target.parentElement.classList.add('display-none');
    e.target.parentElement
      .previousElementSibling
      .classList.remove('display-none');
    let value = (
      e.target.parentElement
        .parentElement.parentElement
        .nextElementSibling
        .querySelector('.comment-text-content textArea').value);
    let textAreaElement = e.target.parentElement
      .parentElement.parentElement.nextElementSibling
      .querySelector('.comment-text-content textArea');
    let p = document.createElement('p');
    p.innerHTML = value;
    textAreaElement.replaceWith(p);
  }

  const handleDelete = (id) => {
    setreplyData(replyData.filter((item) => item.id !== id));
  }

  return (
    <div className="main-container">
      {
        data.map((item) => {
          return (
            <Comment key={item.id} {...item}
              avatar1={avatar1}
              getTextareaValue={getTextareaValue}
              handleTextAreaValue={handleTextAreaValue}
              handleSubmitComment={handleSubmitComment}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              saveEdit={saveEdit} />
          )
        })
      }
      <div className="wrapper">
        {
          replyData.map((item) => {
            return (
              <Reply
                key={item.id}
                {...item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                saveEdit={saveEdit} />
            )
          })
        }
      </div>
      <ReplyInput
        avatar1={avatar1}
        getTextareaValue={getTextareaValue}
        handleTextAreaValue={handleTextAreaValue}
        handleSubmitComment={handleSubmitComment} />
    </div>
  );
};

export default App;