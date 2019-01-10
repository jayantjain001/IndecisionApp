
/*
           class tranfrom plugin use
     pull out the state out of constructors
  delete constructors


*/


class OldSyntax{
    constructor(){
      this.name="XXX";
      this.getGreeting=this.getGreeting.bind(this);
    }
    getGreeting(){
      return `Hi greeting from ${this.name}`;
    }
    }
    const oldsyntax=new OldSyntax();
    console.log(oldsyntax);
    console.log(oldsyntax.getGreeting());
    class NewSyntax{
     name="Jeni";
     getGreeting=()=>{
       return `this is greeting from ${this.name}`;
     }
    }
    const ssyntax=new NewSyntax();
    console.log(ssyntax);
    console.log(ssyntax.getGreeting());
    
    