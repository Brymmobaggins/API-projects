// Create a function that takes two integers and checks if they are equal.

//  Examples
// isEqual(5, 6) ➞ false

// isEqual(1, 1) ➞ true

// isEqual("1", 1) ➞ false
// Notes
// If there is a string then it should return false.



// solution
function isEqual(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return false
    } else if (num1 === num2) {
        return true
    } else {
        return false
    }
}
console.log(isEqual("6", "6")) // return false