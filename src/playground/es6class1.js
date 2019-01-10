

class Person{
constructor(name,age=0){
this.name=name || 'unknown';
this.age=age;
}
getDesc(){
    return `hi ${this.name} and  ${this.age} years old`;
}
}

class Car{
    constructor(name="zen")  // default value otherwise will get input
    {
        this.name=name;
    }
    getGreeting()
    {
        return('Hi '+this.name );
    }
}

/* const me =new Person('Jayant Jain');
const other =new Person();
const carr=new Car();
const fg=new Car('alto');
console.log(me,other,carr,fg);

console.log(carr.getGreeting(),fg.getGreeting());


const dr=new Person('Dfg',12);
console.log(dr.getDesc());

 */

 class Student extends Person{
constructor(major,name,age)
{
   super(name,age); // constructor of parent class is called 
  this.major=major;  
}
hasMajor(){
return !!this.major;
}
getDesc()       // func overriding
{
    //return 'Student override';
return super.getDesc();
}
 }
 const ferr=new Student('Ram',20,'comp sci');
 const ror =new Student('ece');
 console.log(ferr,'\n',ror);
 console.log(ferr.hasMajor(),ror.hasMajor());
 console.log(ferr.getDesc());
 