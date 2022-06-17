import React,{useReducer} from "react";
import plusIcon from './Images/icon-plus.svg';
import minusIcon from './Images/icon-minus.svg';
import deleteIcon from './Images/icon-delete.svg';
import editIcon from './Images/icon-edit.svg';
import avatar2 from './Images/avatars/image-ramsesmiron.png';
import avatar1 from './Images/avatars/image-juliusomo.png';
import VoteWrapper from "./Vote-wrapper";

const Reply = ({id,content,createdAt,score,user}) =>{
    const {username} = user;

    let initialState = {
        scores:parseInt(score)
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
  
      const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <div className="comment" id={id}>
        <VoteWrapper scoreValue={state} dispatch = {dispatch}/>
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
              {username==='juliusomo' && <span>
                <img src={deleteIcon} alt="delete" />
                <p className="delete">Delete</p>
              </span>}
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