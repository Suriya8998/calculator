class Emp {
    myName
    myAge 
    mysalary
  

   constructor(name,age,salary){
    this.myName=name;
    this.myAge=age;
    this.mysalary=salary;
    
    }
    display()
    {
        console.log("Hi Just Demo  from Method ")
        console.log("Name : "+this.myName)
        console.log("Age : "+this.myAge)
        console.log("salary : "+this.mysalary)
        
    }
}
class Test {
  myname;
  myage;
  mysalary;
 
  constructor(name,age,salary){
    this.myname=name;
    this.myage=age;
    this.mysalary=salary;
   
  }
  myTest(){
    console.log("tester")
    console.log("Name : "+this.myname)
    console.log("Age : "+this.myage)
    console.log("salary : "+this.mysalary)
  
}
  }

  class Dev{
    myname;
    myage;
    mysalary;
   
    constructor(name,age,salary){
      this.myname=name;
      this.myage=age;
      this.mysalary=salary;
     
    }
  myDeveloper(){
    console.log("developer")
    console.log("Name : "+this.myname)
    console.log("Age : "+this.myage)
    console.log("salary : "+this.mysalary)
   
  }

  }

 class Clerk{
    myname;
    myage;
    mysalary;
  
    constructor(name,age,salary){
      this.myname=name;
      this.myage=age;
      this.mysalary=salary;
      
    }
  myclk(){
    console.log("developer");
    console.log("Name : "+this.myname);
    console.log("Age : "+this.myage);
    console.log("salary : "+this.mysalary);
    
}
  }
  
var d=new Emp("Ramu",25,21000);
d.display()

console.log("**********************************")

var  T=new Test("Ramu",25,21000);
T.myTest()
console.log("**********************************")
var  D=new Dev("Ramu",25,21000);
D.myDeveloper()
console.log("**********************************")
var  C=new Clerk("Ramu",25,21000);
C.myclk()