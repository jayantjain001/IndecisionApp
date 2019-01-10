import React from 'react';
import Option from './option';
const Options = (props)=>{
  
    return(
      <div>
    <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
       <button className="sbutton sbutton--link" onClick={props.deleteAll}>Remove All</button>
    </div>
    <div className="widget__msg">
     {props.options.length===0 &&<p>Please add an option to get started!</p>}
     </div> 
      {
      props.options.map((i,index)=>(<Option 
       key={i}
       opttext={i}
       count={index+1}
       delete={props.delete} 
       />
       
       ))
      }
    </div>
    );
  
  }
 export default Options;