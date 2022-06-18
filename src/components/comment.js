import React,{useReducer, useState} from "react";
import Reply from './Reply';
import replyIcon from './Images/icon-reply.svg';
import avatar1 from './Images/avatars/image-amyrobson.png';
import avatar2 from './Images/avatars/image-maxblagun.png';
import VoteWrapper from "./Vote-wrapper";
import ContentText from './ContentText';
import UserInfo from './UserInfo';
import ReplyInput from "./ReplyInput";
import avatar3 from './Images/avatars/image-juliusomo.png';
import { v4 as uuidv4 } from 'uuid';

const Comment = (
  {id,content,createdAt,score,user,
  handleDelete,handleEdit,isEdit,saveEdit,
  })=>{
    const {username}  = user;
    let initialState = {
      scores:parseInt(score)
    }

    let [replyData,setReplyData] = useState([]);

    const handleDisplayReplyInput = (e)=>{
      if(e.target.classList.contains('ptag')){
        const span = (e.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling)
        span.classList.remove('display-none')
      }
    }
 
    const reducer = (state,action)=>{
      switch (action.type) {
        case 'increment':
          return {scores: state.scores + 1};
        case 'decrement':
          return {scores: state.scores - 1};
        default:
          throw new Error();
      };
    };

    const handleSubmitComment = (e) =>{   
        const value = (e.target.parentElement.querySelector('textarea').value);
        let newObj = {
          "id":uuidv4(),
          "content":`${value}`,
          "createdAt":"92 days ago",
          "score":0,
          "replies":[],
          "user":{
            "username": "juliusomo"
          }
        }
        setReplyData([...replyData,newObj]);
        e.target.parentElement.classList.add('display-none');
      }

      const handleDeleteReplyData = (id) =>{
        setReplyData(replyData.filter((item)=>item.id!==id));
      }


    const [state,dispatch] = useReducer(reducer,initialState);
    return(
      <div className="wrapper">
        <div className="comment" id={id}>
          <VoteWrapper scoreValue={state} dispatch = {dispatch}/>
          <div className="comment-text">
            <div className="col1">
              <UserInfo username={username} createdAt={createdAt} avatar1={avatar1} avatar2={avatar2} expectedName={'maxblagun'}/>
              <div className="reply-btn">
                <p onClick={handleDisplayReplyInput} >
                  <img src={replyIcon} alt="reply" />
                  <span className='ptag'>Reply</span>
                </p>
              </div>
            </div>
            <ContentText content={content}/>
          </div>
        </div>
        <span id={id} className='display-none'>
          <ReplyInput avatar1={avatar3} handleSubmitComment={handleSubmitComment}/>
          {
            replyData.length > 0 &&
            replyData.map((item)=>{
              return <Reply key={item.id} {...item} handleDelete={handleDeleteReplyData} handleEdit={handleEdit} isEdit={isEdit} saveEdit={saveEdit}/>
            })
          }
        </span>
      </div>  
    )
} 

export default Comment;
