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
        "id":5,
        "content":`${getTextareaValue}`,
        "createdAt":"92 days ago",
        "score":10,
        "replies":[],
        "user":{
          "username": "juliusomo"
        }
      }
      setData([...replyData.item,newObj]);
  };

  const handleDelete = (id) =>{
    replyData.map((item)=>{
      if(item.length>0){
        let el = (item.filter((list)=>list.id !== id));
        return el
      }
    });
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
              return <Reply key={item.id} {...item} handleDelete={handleDelete}/>
            })
          }
        </span>
        <div className="reply-comment">
          <div className="profile-img">
            <img src={avatar1} alt='img'></img>
          </div>
            <div className="input">
              <textarea className="reply-input" onChange={(e)=>setTextareaValue(e.target.value)} cols="30" rows="5"></textarea>
            </div>
              <button className="send-btn" onClick={handleSubmitComment}>send</button>
        </div>
    </div>
  );
};

export default App;