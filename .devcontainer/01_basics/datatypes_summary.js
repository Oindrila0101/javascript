// PRIMITIVE

// 7 types= String, Number, Boolean, Null, undefined, Symbol, BigInt

const score=100;
const scorevalue=100.4;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);

const bigNumber=12345678914566n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heros=["shaktiman","nagraj","doga"];
let myObj={
    name:"oindrila",
    age:20,
}

const myFunction=function(){
    console.log("Hello worls");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);


// Stack(Primitive), Heap (non primitive)
let myName="Oindrila";
let anothername=myName;
anothername="girl";
console.log(myName);
console.log(anothername);

let userone={
    email:"user@google.com",
    upi:"user@xbl"
}
let userTwo=userone;

userTwo.email="oindrila@google.com";

console.log(userone.email);
console.log(userTwo.email);