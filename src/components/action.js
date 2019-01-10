import React from 'react';
const Action = (props) =>{   // stateless functional component
    
    return(
      <div >
       <button className="bbutton" onClick={props.handlePick} disabled={!props.hasOptions}>What Should i do now?</button>
      </div>
      );
 
  
};

export default Action;