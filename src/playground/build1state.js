class Togglevisibility extends React.Component{
constructor(props){
super(props);
this.press=this.press.bind(this);
this.state={
visible:false
};
}
press(){
this.setState((prevState)=>{
  return{visible:!prevState.visible};  
});
}

render(){
return(
<div>
<h1>Visibility Toggle</h1>
<button onClick={this.press}>{!this.state.visible?'show details':'hide details'}</button>
<p>{this.state.visible&&'hey how r u?'}</p>
</div>        
    );
}
}
ReactDOM.render(<Togglevisibility />,document.getElementById('app'));