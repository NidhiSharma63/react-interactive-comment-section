import React,{useState} from "react";
import Comment from './comment';
import Reply from './Reply';

import data from '../Data.json'
import './scss/main.scss';

function App() {
  return (
    <div className="main-container">
        {
          data.comments.map((item)=>{
            return <Comment key={item.id} {...item}/>    
          })
        }
    </div>
  );
}

export default App;
