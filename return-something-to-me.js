// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.

// my solution
function returnSomething(x){
    let str = "something "
    return str.concat(x) 
}
console.log(returnSomething('good to eat')) // something good to eat

// second solution

function returnSomething(x){
    return `something ${x}`
}
console.log(returnSomething("to talk about"))