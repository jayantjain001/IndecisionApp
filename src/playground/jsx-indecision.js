console.log('app.js running ..');

var appRoot=document.getElementById('app');
var temp =(
<div>
 <h2>JSX template rendering occuring</h2>
 <p>paragraph</p>
 <ol>Ordered List
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
 </ol>
</div>
);

 
var temp2 =(
<div>
<h1> Jayant Jain</h1>
<p>Age :20</p>
<p>Location : Ludhiana</p>
</div>
);

{/*
 {[<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>,undefined]}     // render jsx into jsx   and null,undefined,false does not put any effect  should set up key so that react can optimize the rendering*/}
 {/* {
numbo.map( (num)=>{
return <p>Number: {num}</p>
}
)

} */}
 {/*  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
  */}
var app={
  title:'Indecision App',
  subtitle:'Put in your tasks and relax',
  options:[]
  };

const onFormSubmit=(event_object)=>{
event_object.preventDefault(); // stop reloading all times when button pressed
  const option=event_object.target.elements.option.value;
if(option){
app.options.push(option);
event_object.target.elements.option.value='';
renderFrom();
}
}
const makeDecision=()=>{
  const randomNum=Math.floor(Math.random()*app.options.length);  //take into account array lenght
  const opt=app.options[randomNum];
  alert(opt);
} 
const removeAll =()=>{
app.options=[];
 renderFrom();
}
var numbo=[101,234,567,2020];
  //This whole is actually client side javascript
var renderFrom=()=>{
var temp3=(
<div>
 <h1>{app.title}</h1>
 <p>{app.subtitle}</p>
 <p>{app.options.length>0 ?'Here are your options':'No options'}</p>
{/*  <p>{app.options.length}</p> */}
<button disabled={app.options.length===0} onClick={makeDecision}>What should i do now?</button>
 <button onClick={removeAll}>Remove All</button>
 
 <ol>{
 app.options.map((opt)=>{
return <li key={opt}>{opt}</li>
 }
)}
</ol>
 <form onSubmit={onFormSubmit}>
 <input type="text" name="option" placeholder="input the task to do"/>
 <button>Add</button>

</form>
</div>);

 ReactDOM.render(temp3,appRoot);

}

renderFrom();

   
      
