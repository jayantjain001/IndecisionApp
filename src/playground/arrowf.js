

const add= (a,b)=>{
return a+b;
}

console.log(add(45,7,1000));

const user={
name:'Jayant',
cities:['Ludhiana','patiala'],
printPlacesLived(){
    this.cities.forEach(i => {
        console.log(this.name+' has lived in '+i);
     });
    const cities1=this.cities.map((i)=>{
        return i;
    });
    return cities1;
}
};

console.log(user.printPlacesLived());
