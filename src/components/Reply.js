import React from "react";
import plusIcon from './Images/icon-plus.svg';
import minusIcon from './Images/icon-minus.svg';
import deleteIcon from './Images/icon-delete.svg';
import editIcon from './Images/icon-edit.svg';
import avatar2 from './Images/avatars/image-ramsesmiron.png';
import avatar1 from './Images/avatars/image-juliusomo.png';

const Reply = ({id,content,createdAt,score,user}) =>{
    const {username} = user
    return(
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
                  <img src={username==='ramsesmiron'?avatar2:avatar1} alt="profile"></img>
                </div>
                <p className='user-name'>{username}</p>
                <p className='user-name timing'>{createdAt}</p>
            </div>
            <div className="edit-delete-btn-container">
              <span>
                <img src={deleteIcon} alt="delete" />
                <p className="delete">Delete</p>
              </span>
              <span>
                <img src={editIcon} alt="delete" />
                <p className="edit">Edit</p>
              </span>
            </div>
          </div>
          <div className="col2">
            <div className="comment-text-content">
              <p>{content}</p>
            </div>
          </div>

        </div>
    </div>
    )
}

export default Reply;