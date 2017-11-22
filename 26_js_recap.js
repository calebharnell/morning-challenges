// // *Logging*
// // 1. console log 'hello world' to the screen
//
// console.log('hello world')
//
// // *Returning*
// // 1. Line 12 logs whatever greet() returns.
// // Right now it's logging undefined. Fix me!
// function greet () {
//   return 'hello!';
// }
// console.log(greet());
//
//
//
// // *Functions & Arrow Functions*
// // Here's a function that takes a first and last name and logs a full name.
// function fullName (first, last) {
//   console.log(first + ' ' + last);
// }
// // 1. Call the function so it puts your full name onto the screen.
// fullName('Caleb', 'Harnell');
// // 2. Use modern syntax, turn fullName into an es6 arrow function.
// const fullname = (first, last) => {
//   console.log(first + ' ' + last);
// }
// // 3. Add a middle name. Update #1 to work.
// function fullName (first, middle, last) {
//   console.log(first + ' ' + middle + ' ' + last);
// }
// // 4. Use interpolation instead of concatination.
//
// function fullName (first, middle, last) {
//   console.log(`${first} ${middle} ${last}`);
// }
//
// // *Math*
// // 1. Find the largest number, fix line 36.
// let number_1 = 10;
// let number_2 = 20;
// let number_3 = 30;
// let largestNumber = 0; //Use Math.max here. Keep it simple. Don't use an array.
// console.log('Largest number is: ' + ${Math.max([number_1[, number_2[, number_3]]])});
//


// *Scope*
let today = 'Tuesday';
if (today === 'Tuesday') {
  tomorrow = 'Wednesday';
}
// Tomorrow is undefined on the line below. Uncomment & fix me! (Hint: let is block scoped)
console.log('Tomorrow is ' + tomorrow);
