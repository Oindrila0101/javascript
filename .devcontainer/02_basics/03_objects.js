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


