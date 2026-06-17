const score=300;
console.log(score);

const balance=new Number(200);
console.log(balance);

const num=Number(60);
console.log(num);

console.log(typeof balance);
console.log(typeof num);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const numone=123.8976;
console.log(numone.toPrecision(3));

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));

//MATHS

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,5,6,4));
console.log(Math.max(2,4,7,1))


console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);



