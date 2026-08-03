// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//click
document.querySelector("#btn").addEventListener("click", function (e) {
console.log(e.type);
});

//timeStamp
document.querySelector("#btn").addEventListener("click", function (e) {
    console.log(e.timeStamp);
});

//defaultPrevented
//Checks whether preventDefault() has already been called.
document.querySelector("form").addEventListener("submit", function (e) {
    console.log(e.defaultPrevented);
    e.preventDefault();
    console.log(e.defaultPrevented);
});

//target
document.querySelector("#btn").addEventListener("click", function (e) {
    console.log(e.target);
});

//currentTarget
const parent = document.querySelector("#parent");
parent.addEventListener("click", function (e) {
    console.log("target:", e.target.id);
    console.log("currentTarget:", e.currentTarget.id);
});

//toElement
//Used mainly with mouse events. It refers to the element the pointer is moving to. It is considered non-standard and is not recommended for new code.
e.relatedTarget;

//srcElement
//Old Internet Explorer property.
e.target;

//clientX
//Mouse X-coordinate relative to the browser's visible window.
document.addEventListener("click", function (e) {
    console.log(e.clientX);
});

//clientY
//Mouse Y-coordinate relative to the browser window.
document.addEventListener("click", function (e) {
    console.log(e.clientY);
});

//screenX
//Mouse X-coordinate relative to the entire screen.
document.addEventListener("click", function (e) {
    console.log(e.screenX);
});

//screenY
//Mouse Y-coordinate relative to the screen.
document.addEventListener("click", function (e) {
    console.log(e.screenY);
});

//altKey
//Returns true if the Alt key was pressed.
document.addEventListener("click", function (e) {
    console.log(e.altKey);
});

//ctrlKey
//Returns true if Ctrl was pressed.
document.addEventListener("click", function (e) {
    console.log(e.ctrlKey);
});

//shiftKey
//Returns true if Shift was pressed.
document.addEventListener("click", function (e) {
    console.log(e.shiftKey);
});

//keyCode
document.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
});

/*
✅ e.target – element that triggered the event
✅ e.currentTarget – element with the event listener
✅ e.type – event name (click, keydown, etc.)
✅ e.preventDefault() / e.defaultPrevented – control default browser behavior
✅ e.clientX, e.clientY – mouse position in the browser
✅ e.key – key pressed (preferred over keyCode)
✅ e.ctrlKey, e.shiftKey, e.altKey – detect modifier keys
✅ e.timeStamp – time when the event occurred

For modern JavaScript, prefer e.target, e.currentTarget, e.key, and e.code instead of the older srcElement, toElement, and keyCode, which are kept mainly for backward compatibility.
*/