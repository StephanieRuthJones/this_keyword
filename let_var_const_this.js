//Instructions: Use live server to run the code. View output in browser developer console.

// ======== VAR, LET, CONST SCOPE + THIS ======== //
//Scope: Where variables are available for use
//const, var and let in the global context

// ======== VAR SCOPE ======== //
//var declarations are globally scoped or function/locally scoped.

//Global var scope: when a var variable is declared outside a function. Any variable that is declared with var outside a function block is available for use in the whole window.
var globalVar = "I'm decared outside a function and available for use in the whole window"
console.log(this.globalVar) //When run in the browser, this refers to window object && logging this.globalVar in the browser yields globalVar's value

//Function var scope: when declared within a function. Can be accessed only within that function.
function functionVar() {
    var varInFunction = "I'm declared in a function and can only be accessed within this function."
    console.log("varInFunction", varInFunction)
}
functionVar()
// console.log('varInFunction is not available outside of the function where it is declared', varInFunction)//yields an error - Uncaught ReferenceError: varInFunction is not defined

// ======== LET SCOPE ======== //
//let is block scoped
//A block is a chunk of code bounded by {}. Anything within curly braces is a block.
//let is only available within the block where it is defined.
//let, unlike var, does not create a property on the global object. 
let globalLet = "I'm available in global scope because it is the block where I'm defined"
console.log("globalLet can be accessed in global scope", globalLet)// logs in browser: value of globalLet variable
//let, unlike var, does not create a property on the global object so logging this.anyLetVariable w global scope, yields undefined:
console.log("this.globalVar", this.globalVar); // logs in browser: "I'm declared outside a function and available for use in the whole window"
console.log("this.globalLet", this.globalLet); // logs in browser: undefined

// ======== CONST SCOPE ======== //
//Scope can be either global or local to the block in which it is declared.
//const DOES NOT create properties of the window object when declared in global scope
const globalConst = "I'm a const variable in global scope"
console.log("this.globalConst", this.globalConst); // logs in browser: undefined

