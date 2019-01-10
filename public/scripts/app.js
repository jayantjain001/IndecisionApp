'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* const f=obj.getName;   //this not tranferred to f so use bind for this binding
const ferr=obj.getName.bind({name:'Andrew'});
console.log(ferr()); // again ferr() as a func can be used
 */

/*  
Procedure for converting class components to stateless components



*/

// Header   stateless functional component
var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    '   ',
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  'title': 'Indecision   App'
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
var Action = function Action(props) {
  // stateless functional component

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasOptions },
      'What Should i do now?'
    )
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

var Options = function Options(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.deleteAll },
      'Remove All'
    ),
    props.options.map(function (i) {
      return React.createElement(Option, {
        key: i,
        opttext: i,
        'delete': props.delete
      });
    })
  );
}; /* 
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

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.opttext,
    React.createElement(
      'button',
      { onClick: function onClick() {
          props.delete(props.opttext);
        } },
      'remove'
    )
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

var Add = function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(Add, [{
    key: 'handleAdd',
    value: function handleAdd(e) {
      e.preventDefault();
      var val = e.target.elements.option.value.trim();
      var error = this.props.handleAdd(val);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAdd },
          React.createElement('input', { type: 'text', name: 'option', placeholder: 'Enter task' }),
          React.createElement(
            'button',
            null,
            ' Add Task'
          )
        )
      );
    }
  }]);

  return Add;
}(React.Component);
///  Main class

var Indecisionapp = function (_React$Component2) {
  _inherits(Indecisionapp, _React$Component2);

  function Indecisionapp(props) {
    _classCallCheck(this, Indecisionapp);

    var _this2 = _possibleConstructorReturn(this, (Indecisionapp.__proto__ || Object.getPrototypeOf(Indecisionapp)).call(this, props));

    _this2.state = {
      options: ['one', 'two', 'three'] // already present things on page
      //title:"Indecision App",                 //we have a default Prop for this
      //subtitle:"put in your tasks and relax"
    };
    _this2.deleteAll = _this2.deleteAll.bind(_this2);
    _this2.handlePick = _this2.handlePick.bind(_this2);
    _this2.handleAdd = _this2.handleAdd.bind(_this2);
    _this2.delete = _this2.delete.bind(_this2);
    return _this2;
  }

  //   Some React lifecycles


  _createClass(Indecisionapp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Instance running');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('component updated');
    }
  }, {
    key: 'deleteAll',
    value: function deleteAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'delete',
    value: function _delete(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          }) };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var opt = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[opt]);
    }
  }, {
    key: 'handleAdd',
    value: function handleAdd(option) {
      if (!option) {
        return 'Please enter a valid option';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Option Already present';
      }

      this.setState(function (prevstate) {
        return { options: prevstate.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.options, deleteAll: this.deleteAll, 'delete': this.delete }),
        React.createElement(Add, { handleAdd: this.handleAdd })
      );
    }
  }]);

  return Indecisionapp;
}(React.Component);

// Creating stateless functional components  

var User = function User(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Name :',
      props.Name
    ),
    React.createElement(
      'p',
      null,
      'Age :',
      props.Age
    )
  );
};

//ReactDOM.render(<User Name="Jayant" Age={26}/>,document.getElementById('app'));
ReactDOM.render(React.createElement(Indecisionapp, { options: ['One', 'Twooo'] }), document.getElementById('app'));
