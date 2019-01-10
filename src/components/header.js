import React from 'react';
const Header=(props)=>(<div className="header">
 <div className="container">
  <h1 className="header__title">{props.title}</h1>   {/* making header reusable for diff pages */}
  {props.subtitle&& <h2 className="header__subtitle">{props.subtitle}</h2>}
</div>
</div>);
  
  Header.defaultProps={
  'title':'Indecision   App',
  'subtitle':'Put your life in Hands of App'

  };
  
  export default Header;