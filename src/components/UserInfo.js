import React from "react";

const UserInfo = ({username,createdAt,avatar1,avatar2,expectedName}) =>{
    return(
        <div className="user-info">
                <div className="user-profile">
                  <img src={username===expectedName?avatar2:avatar1} alt="profile"></img>
                </div>
                <p className='user-name'>{username}</p>
                <p className='user-name timing'>{createdAt}</p>
        </div>
    )
}

export default UserInfo;