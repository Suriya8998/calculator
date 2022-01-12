
//polymarphism
class Bank{
    intrest=5;
    rateOfIntrest(){
        console.log("HI By Deafault is :"+this.intrest)
    }

    // rateOfIntrest(){
    //     console.log("HI By Deafault is :"+this.intrest) no Over loading in JS 
    // }
}
class SBI extends Bank{
 
}
class AXIX extends Bank{
    rateOfIntrest(){
        console.log("HI By Deafault is :"+6)// Over Riding 
    }
}
var b=new Bank();
b.rateOfIntrest();

var a=new AXIX();
a.rateOfIntrest();
