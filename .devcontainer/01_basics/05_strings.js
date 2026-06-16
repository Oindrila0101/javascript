//string methods
const name="oindrila";
const repoCount=90;
//console.log(name + repoCount+"value");

// string interpollution
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename=new String('Pramanik');
console.log(gamename[0]);
console.log(gamename.__proto__);

//you can use length property to get the length of the string
console.log(gamename.length);

//you can use toUpperCase and toLowerCase method to convert the string to upper case and lower case
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());

//you can use charAt method to get the character at a specific index
console.log(gamename.charAt(3));

//you can use indexOf method to get the index of a specific character
console.log(gamename.indexOf('a'));

//you can use substring method to get the string from the start of the string
const newString=gamename.substring(0,3);
console.log(newString);

//you can use slice method to get the string from the end of the string
const anotherString=gamename.slice(-3,7);
console.log(anotherString);

//you can use trim method to remove the white spaces from the start and end of the string
const newstringone="   oindrila   ";
console.log(newstringone);
console.log(newstringone.trim());

//you can use replace method to replace a specific character with another character
const url="https://oindrila.com/oindrila%29pramanik";
console.log(url.replace('%29','-'));

//you can use includes method to check if a specific character is present in the string or not
console.log(url.includes('oindrila'));
console.log(url.includes('women'));

//you can use split method to split the string into an array
console.log(gamename.split('-'));