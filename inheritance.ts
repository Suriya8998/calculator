

class Prakash
{
    name;age;
    constructor(name,age){

    }
}
class Seetha extends Prakash{
    salary ; desig;
    name;age
    constructor(name,age,salary,desig){
        super(name,age);
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.desig=desig;
    }
    display(){
        console.log("Name : "+this.name)
        console.log("Age  : "+this.age)
        console.log("Saary  : "+this.salary)
        console.log("Desig : "+this.desig)
    }
}
class Suriya extends Prakash{
    salary ; desig;
    name;age
    constructor(name,age,salary,desig){
        super(name,age);
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.desig=desig;
    }
    dev(){
        console.log("Name : "+this.name)
        console.log("Age  : "+this.age)
        console.log("Saary  : "+this.salary)
        console.log("Desig : "+this.desig)
    }
}
var s=new Seetha("Seetha",25,50000,"tester");
var m=new Suriya("Suriya",25,50000,"Developer");
s.display()
console.log("***************")
m.dev()