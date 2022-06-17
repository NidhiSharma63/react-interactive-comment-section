import React,{useState} from "react";
import Comment from './comment';
import './scss/main.scss'


function App() {
  return (
    <div className="main-container">
      <div className="wrapper">
        <Comment/>
      </div>
    </div>
  );
}

export default App;
