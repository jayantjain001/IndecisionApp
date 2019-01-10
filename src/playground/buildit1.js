var approot= document.getElementById('app');
console.log('visibility toggle');

let visibility=false;
let para='Hey how r u ?';
const toggle1 =()=>{
visibility=!visibility;
rerender();
}
const rerender=()=>{
var temp=(
<div>
<h1>visibility toggle</h1>
 <button onClick={toggle1}>{!visibility?'show details':'hide details'}</button>
 <p>{visibility&&para}</p>
</div>

);

ReactDOM.render(temp,approot);
}

rerender();