// 1. Reverse a String
const reverseString = str => str.split("").reverse().join("");
console.log("Reverse String:", reverseString("hello"));

// 2. Find Max Number
const findMax = arr => Math.max(...arr);
console.log("Max Number:", findMax([1, 7, 3, 9]));

// 3. Check Palindrome
const isPalindrome = str => str === str.split("").reverse().join("");
console.log("Palindrome Check (madam):", isPalindrome("madam"));

// 4. Factorial
const factorial = n => [...Array(n).keys()].map(i => i+1).reduce((a, b) => a * b, 1);
console.log("Factorial 5:", factorial(5));

// 5. FizzBuzz
console.log("FizzBuzz from 1 to 15:");
for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// 6. Sum of Evens
const sumEvens = arr => arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
console.log("Sum of Evens:", sumEvens([1, 2, 3, 4, 5, 6]));

// 7. Remove Duplicates
const unique = arr => [...new Set(arr)];
console.log("Unique Array:", unique([1, 2, 2, 3, 4, 4]));

// 8. Async Example
const fakeFetch = () => new Promise(resolve => {
  setTimeout(() => resolve("Fetched data!"), 300);
});
async function run() {
  const data = await fakeFetch();
  console.log("Async Fetch:", data);
}
run();

// 9. Count Characters
const countChars = str => str.split("").reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log("Character Count:", countChars("hello"));

// 10. Longest Word
const longestWord = str => str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
console.log("Longest Word:", longestWord("I am learning JavaScript"));
