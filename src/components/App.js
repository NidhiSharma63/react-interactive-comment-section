import React,{useState,useReducer} from "react";
import Comment from './comment';
import data from '../Data.json'
import './scss/main.scss'; 



function App() {
  // const [increment,dispatch] = useReducer(reducer,initialState)
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
