import React from 'react';

export default class Add extends React.Component{
  state={
    error:undefined
  };
  
  
  handleAdd =(e)=>{
    e.preventDefault();
    console.log('Add Option clicked');
    
    const val=e.target.elements.option.value.trim();
    const error=this.props.handleAdd(val);
    this.setState(()=>{
   return{error:error};
    });
  }
  
  render(){
    return (
  <div>
  {this.state.error&&<p  className="addOption-error">{this.state.error}</p>}
  <form className="addOption" onSubmit={this.handleAdd}>
  <input  className="addOption__input" type="text" name="option" placeholder="Enter task"/>
  <button className="sbutton"> Add Task</button>
  </form>
  
  </div>);
  
  }
  }