import React from "react";

const ContentText = ({content}) =>{
    return(
        <div className="col2">
            <div className="comment-text-content">
              <p>{content}</p>
            </div>
        </div>
    )
};

export default ContentText;