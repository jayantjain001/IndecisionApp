import React from 'react';
const  Option =  (props)=>(
  <div className="option">
  <p className="option__text">{props.count}.    {props.opttext}</p>

  <button className="sbutton sbutton--link" onClick={()=>{
    props.delete(props.opttext)
  }}>remove</button>
  </div>
);
  export default Option;