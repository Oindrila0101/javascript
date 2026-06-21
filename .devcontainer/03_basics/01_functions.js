function myname(){
    console.log("o");
    console.log("i");
    console.log("n");
    console.log("d");
    console.log("r");
    console.log("i");
    console.log("l");
    console.log("a");
}
//myname();

function addnumber(number1,number2){
    console.log(number1+number2);
}
addnumber(1,2);
const result=addnumber(2,3);
console.log(result);

function addtwonumber(number1,number2){
    let result1=number1+number2;
    return result1;
    //return number1+number2;
    
}
const result1=addtwonumber(3,5);
console.log("Result:",result1);

function loginuser(username="oin"){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`;
}

//console.log(loginuser("oindrila"));
console.log(loginuser());