import React,{useReducer} from "react";
import deleteIcon from './Images/icon-delete.svg';
import editIcon from './Images/icon-edit.svg';
import avatar2 from './Images/avatars/image-ramsesmiron.png';
import avatar1 from './Images/avatars/image-juliusomo.png';
import VoteWrapper from "./Vote-wrapper";
import ContentText from './ContentText';
import UserInfo from "./UserInfo";

const Reply = ({id,content,createdAt,score,user,handleDelete,handleEdit,isEdit,saveEdit}) =>{
    const {username} = user;

    // console.log(isEdit)
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
              <UserInfo username={username} createdAt={createdAt} avatar1={avatar1} avatar2={avatar2} expectedName={'ramsesmiron'}/>
              <div className="edit-delete-btn-container">
                {username==='juliusomo' && 
                <span onClick={()=>handleDelete(id)}>
                  <img src={deleteIcon} alt="delete"/>
                  <p className="delete">Delete</p>
               </span>}
                {
                  !isEdit &&
                  <span onClick={handleEdit}>
                    <img src={editIcon} alt="edit"/>
                      <p className="edit">Edit</p>
                  </span>
                }
                {
                  isEdit &&
                  <span onClick={saveEdit}>
                    <img src={editIcon} alt="save"/>
                    <p className="edit">Save</p>
                </span>
                }
              </div>
            </div>
            <ContentText content={content}/>
          </div>
        </div>
    )
}

export default Reply;