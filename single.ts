//inheritance
   
export class Employee {
    name;
    age;salary;designation
    constructor(name:string,age:number,salary:number,designation:string){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    display(){
        console.log("name : " +this.name);
        console.log("age : " +this.age);
        console.log("salary : " +this.salary);
        console.log("desigation : " +this.designation);
    }
    raisesal(){
        this.salary=(this.salary * (20/100) +this.salary);
        console.log("Employee increaent:" +this.salary);
    }
    }



export class Dev1  extends Employee{
   
    constructor(name:string,age:number,salary:number,designation:string){
        super(name,age,salary,designation)
       
    }
    raisesal1(){
        this.salary=(this.salary * (30/100) +this.salary);
        console.log("employee increament:" +this.salary);
    }
}
export class Tester extends Employee{
   
    constructor(name:string,age:number,salary:number,designation:string){
        super(name,age,salary,designation)
    
    }
    raisesal2()
    {
        this.salary=(this.salary * (35/100) +this.salary);
       console.log("developer increament:" +this.salary);
   }
}

  export  class Manager  extends Employee {
    constructor(name:string,age:number,salary:number,designation:string){
        super(name,age,salary,designation)
      
    }
    raisesal3(){
        this.salary=(this.salary * (40/100) +this.salary);
       console.log("developer increament:" +this.salary);
   }
}
