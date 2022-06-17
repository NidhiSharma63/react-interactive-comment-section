import React from "react";
import plusIcon from './Images/icon-plus.svg';
import minusIcon from './Images/icon-minus.svg';

const VoteWrapper = ({scoreValue,dispatch}) =>{
    return(
        <div className="vote-wrapper">
              <img src={plusIcon} alt="+" 
                onClick={() => dispatch({type: 'increment'})}
              />
              <p className="vote-count">{scoreValue.scores}</p>
              <img src={minusIcon} alt="-" 
                onClick={() => dispatch({type: 'decrement'})}

              />
          </div>
    )
}

export default VoteWrapper;