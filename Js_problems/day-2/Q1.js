/*
wap in js to check  two number and return trus if one of the number is 100 or if the sum of the number is 100.
*/ 

const checkTwo = (a,b) => a===100 || b=== 100 || (a+b) === 100;

console.log(checkTwo(100,10))
console.log(checkTwo(0,100))
console.log(checkTwo(20,80))
console.log(checkTwo(700,3))