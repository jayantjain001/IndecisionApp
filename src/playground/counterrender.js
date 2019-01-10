let count=0;
const myid='id:1122';
const addOne=()=>{
  console.log('added new ');
  count+=1;
  renderAppCounter();
}
const minusOne=()=>{
  console.log('minus one ');
  count-=1;
  renderAppCounter();
}
const reset=()=>{
  console.log('reset ');
  count=0;
  renderAppCounter();
}

//Manual Data Binding   just horrible
var renderAppCounter=()=>{
  var temp4=(
    <div>
      <h1>Count :{count}</h1>
      <button  onClick={addOne} id={myid}   className="Button1">addOne</button>
      <button onClick={minusOne}>minusOne
     </button>
     <button onClick={reset}>Reset
     </button>  
    </div>
    );
    var appRoot=document.getElementById('app');
    ReactDOM.render(temp4,appRoot);
      

}
/* onClick={()=>{

}} */

renderAppCounter();


