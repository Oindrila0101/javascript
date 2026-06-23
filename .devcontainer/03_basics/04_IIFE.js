// Immediately Invoked Function Expressions (IIFE)

/*function chai(){
    console.log(`DB CONNECTED`);
}
chai();
*/

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();

(()=>{
    console.log(`DB CONNECTED THREE`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('oindrila');
