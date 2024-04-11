console.log('JS is connected!!!');

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  // Part 1
// Checking if all numbers are divisible by 5
const divBy5 = (n1 % 5) +  (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
console.log(divBy5) // true

// Checking if the first number is larger than the last
const isLarger = (n1 > n4);
console.log(isLarger) // true

// Subtracting the first number from the second
const subtract = (n2 - n1)
console.log(subtract) // 5

// Multiplying the result by the third number
const multiplyResult = (5 * n3)
console.log(multiplyResult) // 100

// Finding the remainder of dividing the result by the fourth number
const findRemainder =  (100 / n4)
console.log(findRemainder) // 20

// Changing the way that isOver25 calculates so that we do not need to 
// use the NOT operator (!) in other logic comparisons
let isNotOver25 = (n1 != 25) && (n2 != 25) && (n3 != 25) && (n4 != 25);
console.log(isNotOver25) // true

// Part 2
// Declaring variables
const m1 = 55;
const m2 = 60;
const m3 = 75 ;
const g1 = 30;
const g2 = 28;
const g3 =23;
const g = 3;
const tt = 1500; // totaltrip

// How mnay gallons needed
let comparisonGal = (tt / g1); // 50
console.log(comparisonGal)
const compGal1= (tt / g2); // 53.57
console.log(compGal1)
const compGal2 = (tt / g3); // 65.22
console.log(compGal2)

// calculating if budget is enough for fuel expense
const budget1 = (tt / g1 * g) 
console.log(budget1) // $150, it will be enough
const budget2 = (tt / g2 * g) 
console.log(budget2) // $160.71, it will be enough
const budget3 = (tt / g3 * g) 
console.log(budget3) // $195.65, it will not be enough

// How long will the trip take
const hours1 = (tt / m1);
console.log(hours1) // 27 hours
const hours2 = (tt / m2);
console.log(hours2) // 25
const hours3 = (tt / m3);
console.log(hours3) // 20






