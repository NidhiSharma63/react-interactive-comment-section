import React from "react";

const ReplyInput = ({avatar1,getTextareaValue,handleSubmitComment,handleTextAreaValue}) =>{
    return(
        <div className="reply-comment">
            <div className="profile-img">
                <img src={avatar1} alt='img'></img>
            </div>
            <div className="input">
                <textarea className="reply-input" value={getTextareaValue} onChange={handleTextAreaValue} cols="30" rows="5"></textarea>
            </div>
            <button className="send-btn" onClick={handleSubmitComment}>send</button>
      </div>
    );
};

export default ReplyInput;