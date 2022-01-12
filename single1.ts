import{Employee,Dev1,Tester,Manager} from './single'
var employment = new Employee("Ajith",22,20000,"BE");
var deve = new Dev1("Mani",24,40000,"B.TECH");
var t = new Tester("Bala",24,30000,"BE");
var M= new Manager("Suriya",34,60000,"BE");
employment.display();
employment.raisesal();
console.log("employee**********");
deve.display();
deve.raisesal1();
console.log("devloper**********");
t.display();
t.raisesal2();
console.log("tester**********");
M.display();
M.raisesal3();
console.log("manager**********");
