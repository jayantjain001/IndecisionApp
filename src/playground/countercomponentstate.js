// React component state
/* 1) Setup default state object
2)Component rendered with default state values
3)Change state based on event
4)Component re-rendered using new state values
5)Start again at 3 */
class Counter extends React.Component{
    constructor(props){
super(props);
this.addOne=this.addOne.bind(this); // so that "this" can be used for refrenced functions
this.minusOne=this.minusOne.bind(this);
this.reset=this.reset.bind(this);
this.state={
   count:0 // pieces of changing data  
};
    }
addOne(){
    this.setState((prevState)=>{           //setState rerenders it automatically    prevState is just any name to previous state
    return{
    count:prevState.count+1,

    };    
    });

}
minusOne(){
    this.setState((prevState)=>{
        return{
        count:prevState.count-1,
    
        };    
        });}
reset(){
    this.setState(()=>{
        return{
        count:0,
    
        };    
        });;
}
render(){
return(
    <div>
    <h1> Count :{this.state.count}</h1>
    <button onClick={this.addOne}>+1</button>
    <button onClick={this.minusOne}>-1</button>
    <button onClick={this.reset}>0</button>
    </div>
);}
}
ReactDOM.render(<Counter/>,document.getElementById('app'));