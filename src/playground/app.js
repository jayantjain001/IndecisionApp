
/* const f=obj.getName;   //this not tranferred to f so use bind for this binding
const ferr=obj.getName.bind({name:'Andrew'});
console.log(ferr()); // again ferr() as a func can be used
 */


/*  
Procedure for converting class components to stateless components



*/


// Header   stateless functional component
const Header=(props)=>{
  return(
    <div>
     <h1>{props.title}</h1>   {/* making header reusable for diff pages */}
     {props.subtitle&& <h2>{props.subtitle}</h2>}
    </div>
  );
  };

Header.defaultProps={
'title':'Indecision   App'
};


  /*
class Header extends React.Component{
//Component class in React Package
render(){  // defining function in component
return(
  <div>
   <h1>{this.props.title}</h1>   {// making header reusable for diff pages }
   <h2>{this.props.subtitle}</h2>
  </div>
);
}
}
*/
const Action = (props) =>{   // stateless functional component
  
    return(
      <div>
       <button onClick={props.handlePick} disabled={!props.hasOptions}>What Should i do now?</button>
      </div>
      );
 
  
};
/* 
class Action extends React.Component{      //  class  based react component
  render(){
return(
  <div>
   <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should i do now?</button>
  </div>);
}

} */

const Options = (props)=>{

  return(
    <div>
     <button onClick={props.deleteAll}>Remove All</button>
    {
    props.options.map((i)=>(<Option 
     key={i}
     opttext={i}
     delete={props.delete} 
     />
     
     ))
    }
  </div>
  );

}/* 
class Options extends React.Component{
 
  render(){
    return(
    <div>
     <button onClick={this.props.deleteAll}>Remove All</button>
    {
    this.props.options.map((i)=><Option key={i} opttext={i}/>)
   }
  </div>
  );}
} */


const Option = (props)=>{
  return(
    <div>
    {props.opttext}
    <button onClick={()=>{
      props.delete(props.opttext)
    }}>remove</button>
    </div>
  );
  

};
/* 

class Option extends React.Component{
render(){
return(
  <div>
 {this.props.opttext}
  </div>
);

}
} */
class Add extends React.Component{


  constructor(props){
    super(props);
    this.handleAdd=this.handleAdd.bind(this);
    this.state={
    error:undefined
  }; 
  }

handleAdd(e)
{
  e.preventDefault();
  const val=e.target.elements.option.value.trim();
  const error=this.props.handleAdd(val);
  this.setState(()=>{
 return{error:error};
  });
}

render(){
  return (
<div>
{this.state.error&&<p>{this.state.error}</p>}
<form onSubmit={this.handleAdd}>
<input type="text" name="option" placeholder="Enter task"/>
<button > Add Task</button>
</form>
</div>);

}
}
///  Main class

class Indecisionapp extends React.Component{
constructor(props){
super(props);
this.state={
 options:['one','two','three'],      // already present things on page
 //title:"Indecision App",                 //we have a default Prop for this
 //subtitle:"put in your tasks and relax"
};
this.deleteAll=this.deleteAll.bind(this);
this.handlePick=this.handlePick.bind(this);
this.handleAdd=this.handleAdd.bind(this);
this.delete=this.delete.bind(this);
}

//   Some React lifecycles
componentDidMount(){
console.log('Instance running');
}
componentDidUpdate(){
console.log('component updated');
}



deleteAll(){
 this.setState(()=>({ options: []}));
 }

delete(optionToRemove){
 this.setState((prevState)=>{
return{
  options:prevState.options.filter((option)=>{
  return option !== optionToRemove;
})  }
 });
} 

handlePick(){
  const opt=Math.floor(Math.random()*this.state.options.length);
  alert(this.state.options[opt]);
}

handleAdd(option){
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
   <Action hasOptions={this.state.options.length>0}   handlePick={this.handlePick}/>
   <Options options={this.state.options} deleteAll={this.deleteAll} delete={this.delete}/>
   <Add handleAdd={this.handleAdd} />
  </div>
  );
}

}



// Creating stateless functional components  

const User = (props)=>{
return(
  <div>
    <p>Name :{props.Name}</p>
    <p>Age :{props.Age}</p>
  </div>
);

}

//ReactDOM.render(<User Name="Jayant" Age={26}/>,document.getElementById('app'));
ReactDOM.render(<Indecisionapp  options={['One','Twooo']}/>,document.getElementById('app'));