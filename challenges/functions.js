// ==== Callbacks ====  

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
    return cb(a, b);
}

const myCB = (a, b) => {
    hypotenuse = Math.pow(a, 2) + Math.pow(b, 2);
    return `The square of the unknown hypotenuse of a right triangle is equal to the sum of the squares of the remaining two sides thus a^2 + b^2 = c^2 hense: a: ${a}^2 + b: ${b}^2 = ${hypotenuse}.`;
}

console.log(consume(6, 8, myCB));

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = (a, b) => { return `${a} + ${b} = ${a + b}`; }
const multiply = (a, b) => { return `${a} * ${b} = ${a * b}` }
const greeting = (a, b) => {
    return `Hello ${a} ${b}, it is nice to meet you. I want you to know that Lambda School rocks!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nested function can access the variable internal.

// Explanation: /*Nested function acts like a one way valve that flows inward but not outward so the nestedFucntion can't release it's contents */

console.log(`Nested function acts like a one way valve that flows inward but not outward so the nestedFucntion can't release it's contents`);


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();