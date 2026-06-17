//Dates

let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof myDate);

let myCreateDate=new Date(2026,0,22);
console.log(myCreateDate.toLocalString());

let oneDate=new Date(2026,0,22,5,3);
console.log(oneDate);

let twoDate=new Date("2026-01-18");
console.log(twoDate);

let threeDate=new Date("01-14-2026");
console.log(threeDate);


let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(threeDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
    
});