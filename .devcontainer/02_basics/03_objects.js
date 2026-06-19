// singleton
// object literals

const mySym=Symbol("key1")
const jsuser={
    name:"oindrila",
    "fullname":"oindrila pramanik",
    [mySym]:"mykey1",
    age:19,
    email:"oindrila@google.com",
    location:"kolkata",
    isloggedin:false,
    lastloggedindays:["tuesday","wednesday"]
};

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser.fullname);
console.log(jsuser[mySym]);

jsuser.email="oindrila1234@chatgpt.com";
//Object.freeze(jsuser);
jsuser.email="oindrila@microsoft.com";
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

//objects part 2

const tinderuser=new Object();
tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isloggedin=false;

console.log(tinderuser);

const regularuser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sumita",
            lastname:"pramanik"
        }
    }
}

console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname);


const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};
console.log(obj3);

const users=[
    {
        id:1,
        email:"o@gmail.com"
    },
      {
        id:1,
        email:"o@gmail.com"
    },
      {
        id:1,
        email:"o@gmail.com"
    },
]

users[1].email;
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));
