import React,{useState,useReducer} from "react";
import Comment from './comment';
import comment from '../Data.json';
import avatar1 from './Images/avatars/image-juliusomo.png';
import './scss/main.scss'; 
import Reply from "./Reply";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [getTextareaValue,setTextareaValue] = useState('');
  const [data,setData] = useState(comment.comments);
  const [isEdit,setIsEdit] = useState(false);
  const [editTextAreaValue,setEditTextAreaValue] = useState('');
  // getting all replies
  const allReplies = data.map((item)=>{
    if(item.replies.length>0){
      return item.replies
    }
  });
  const [,filledReplies] = allReplies;
  const [replyData,setreplyData] = useState(filledReplies);


  const handleSubmitComment = () =>{
      let newObj = {
        "id":uuidv4(),
        "content":`${getTextareaValue}`,
        "createdAt":"92 days ago",
        "score":10,
        "replies":[],
        "user":{
          "username": "juliusomo"
        }
      }
      setreplyData([...replyData,newObj]);
      setTextareaValue(prev=>prev='')
  };

  const handleEdit = (e) =>{
    setIsEdit(true)
      let value = (e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector('.comment-text-content p').innerHTML);
      let pElement = e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector('.comment-text-content p');
      let textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.cols = "30";
      textArea.rows='5';
      textArea.style.resize = "none";
      textArea.style.width="100%";
      pElement.replaceWith(textArea);
  }

  const saveEdit = (e) =>{
    setIsEdit(false)
    let value = (e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector('.comment-text-content textArea').value);
    let textAreaElement = e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector('.comment-text-content textArea');
    console.log(value)
    let p = document.createElement('p');
    p.innerHTML = value;
    textAreaElement.replaceWith(p);
  }

  const handleDelete = (id) =>{
    setreplyData(replyData.filter((item)=>item.id!==id));
  }

  return (
    <div className="main-container">
        {
          data.map((item)=>{
            return <Comment key={item.id} {...item}/>    
          })
        };
        <span>
          {
            replyData.map((item)=>{
              return <Reply key={item.id} {...item} handleDelete={handleDelete} handleEdit={handleEdit} isEdit={isEdit} saveEdit={saveEdit}/>
            })
          }
        </span>
        <div className="reply-comment">
          <div className="profile-img">
            <img src={avatar1} alt='img'></img>
          </div>
            <div className="input">
              <textarea className="reply-input" value={getTextareaValue} onChange={(e)=>setTextareaValue(e.target.value)} cols="30" rows="5"></textarea>
            </div>
              <button className="send-btn" onClick={handleSubmitComment}>send</button>
        </div>
    </div>
  );
};

export default App;