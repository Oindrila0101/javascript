const user={
    username:"oindrila",
    price:1000,

    welcomemessage:function(){  
      console.log(`${this.username}, welcome to website`);
      console.log(this);
    }

}
user.welcomemessage();
user.username="sam";
user.welcomemessage();

//console.log(this);

/*function chai(){
    let username="oindrila"
    console.log(this.username);
}
chai();
*/

/*const chai=function(){
    let username="oindrila"
    console.log(this.username);
}
*/

const chai=()=>{
    let username="oindrila"
    console.log(this.username);
}

//chai();

//explicit return

/*const addtwo=(num1,num2)=>{
    return num1+num2
}
*/
//console.log(addtwo(2,4));

//implicit return

//const addtwo=(num1,num2)=> num1+num2;
//const addtwo=(num1,num2)=> (num1+num2);
const addtwo=(num1,num2)=> ({username:"oindrila"});

console.log(addtwo(2,3));

//const myarray=[1,2,3,5];
//myarray.forEach()
