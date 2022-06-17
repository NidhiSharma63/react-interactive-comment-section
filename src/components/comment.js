import React from "react";
import Reply from './Reply'
import plusIcon from './Images/icon-plus.svg';
import minusIcon from './Images/icon-minus.svg';
import replyIcon from './Images/icon-reply.svg';
import avatar1 from './Images/avatars/image-amyrobson.png';
import avatar2 from './Images/avatars/image-maxblagun.png';



const Comment = ({id,content,createdAt,score,user,replies})=>{
    const {username}  = user;
    // console.log(replies)
    return(
      
      <div className="wrapper">
        <div className="comment" id={id}>
          <div className="vote-wrapper">
              <img src={plusIcon} alt="+" />
              <p className="vote-count">{score}</p>
              <img src={minusIcon} alt="-" />
          </div>
          <div className="comment-text">
            <div className="col1">
              <div className="user-info">
                  <div className="user-profile">
                    <img src={username==='maxblagun'?avatar2:avatar1} alt="profile"></img>
                  </div>
                  <p className='user-name'>{username}</p>
                  <p className='user-name timing'>{createdAt}</p>
              </div>
              <div className="reply-btn">
                <p>
                  <img src={replyIcon} alt="reply" />
                  <span>Reply</span>
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="comment-text-content">
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
        {replies.length>0 && 
          replies.map((item)=>{
            return <Reply key={item.id} {...item}/>
          })
        }
      </div>  
    )
} 

export default Comment;