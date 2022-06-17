import React,{useReducer} from "react";
import Reply from './Reply'
import plusIcon from './Images/icon-plus.svg';
import minusIcon from './Images/icon-minus.svg';
import replyIcon from './Images/icon-reply.svg';
import avatar1 from './Images/avatars/image-amyrobson.png';
import avatar2 from './Images/avatars/image-maxblagun.png';
import VoteWrapper from "./Vote-wrapper";


const Comment = ({id,content,createdAt,score,user,replies})=>{
    const {username}  = user;
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
      
      <div className="wrapper">
        <div className="comment" id={id}>
          <VoteWrapper scoreValue={state} dispatch = {dispatch}/>
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


// <div className="vote-wrapper">
// <img src={plusIcon} alt="+" 
//   onClick={() => dispatch({type: 'increment'})}
// />
// <p className="vote-count">{state.scores}</p>
// <img src={minusIcon} alt="-" 
//   onClick={() => dispatch({type: 'decrement'})}

// />
// </div>