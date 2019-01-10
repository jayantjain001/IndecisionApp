import React from 'react';
 import Add from './addoption';
 import Option from './option';
 import Header from './header';
 import Options from './options'
 import Action from './action'; 
 import OptionModal from './optionModal'; 
  ///  Main class
  
  class Indecisionapp extends React.Component{
  state={
    options:[],  // already present things on page
    selectedOption:undefined
  };

  
  
  //   Some React lifecycles
  componentDidMount(){
  console.log('Instance running');
  }
  componentDidUpdate(){
  console.log('component updated');
  }
  
  
  
  deleteAll =()=>{
   this.setState(()=>({ options: []}));
   }
  
  delete= (optionToRemove)=>{
   this.setState((prevState)=>{
  return{
    options:prevState.options.filter((option)=>{
    return option !== optionToRemove;
  })  }
   });
  } 
  
  handlePick= ()=>{
    const opt=Math.floor(Math.random()*this.state.options.length);
    const option=this.state.options[opt];
    this.setState((prevState)=>({
    selectedOption:option  
    }));
  }
  clearselectedOption=()=>{
    this.setState(()=>({
      selectedOption:undefined
    }));
  }

  handleAdd=(option)=>{
  if(!option)
  {
    return 'Please enter a valid option';
  }
  else if(this.state.options.indexOf(option)>-1)
   {
     return 'Option Already present';
   }
  
  this.setState((prevstate)=>({options:prevstate.options.concat(option)
  }));
  }
  render(){
    return(
    <div>
     <Header title={this.state.title} subtitle={this.state.subtitle}/>
    <div className="container">
     <Action hasOptions={this.state.options.length>0}   handlePick={this.handlePick}/>
    <div className="widget">
    <Options options={this.state.options} deleteAll={this.deleteAll} delete={this.delete}/>
     <Add handleAdd={this.handleAdd} />
    </div> 

     </div>
     <OptionModal selectedOption={this.state.selectedOption} 
       clearselectedOption={this.clearselectedOption}
     />
    </div>
    );
  }
  
  }
  
 export default Indecisionapp;