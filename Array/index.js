  // Creating Array--

// let arr = ['mango', 'apple', 'water', 'bike', 'car', 'aeroplane'];

// Access of an array by indexing

// console.log(arr[2])
// console.log(arr[1])
// console.log(arr[6])


// In array we store functions like

// let person = {
//   name: "abhi",
//   age: 22
// }

// let arrAddFun = ['mango', 'apple', 'water', 'bike', 'car', 'aeroplane', person];

// console.log(arrAddFun[6]);



// now i want to Access specific key value 

// console.log("hi i am from function",  arrAddFun[6].name)

// how to find total number of element present in an array

// let arr = ['mango', 'apple', 'water', 'bike', 'car', 'aeroplane'];

// console.log(arr.length)   // give total number number of element are present in array.



// -----------------------------------------------------------------------------------

// Array -  Add and Remove element   Basic methods of array


// let arr = ['mango', 'apple', 'water', 'bike', 'car', 'aeroplane'];


// add to end of the array.

// arr.push("phone")
// arr.push("laptop")
// console.log(arr)

// remove from the last of the array..
// arr.pop()
// arr.pop()
// console.log(arr)

// add element in the begining of an array....

// arr.unshift("Orange")
// arr.unshift("Grapes")
// console.log(arr)

// remove elementin the begining of an array..

// arr.shift()
// console.log(arr)

// indexOf()  - find the index of a specific element

// console.log(arr.indexOf("car"))

// console.log(arr.includes("car"))  // return Boolean  value


// -----------------------------------------------------------------------------------

// Looping an array....       ${Iterating Over array}


// let arr = ['mango', 'apple', 'water', 'bike', 'car', 'aeroplane'];



// 1) for loop..

// for(let i=0; i<arr.length; i++) {
//   console.log(arr[i])    // print all value in array and every time print in new line..
  
// }

// 2) while loop...

// let i =0;

// while(i<arr.length){
//   console.log(arr[i])
//   i++
// }


/*
3) for.. of loop
*/

// for(let ele of arr){
//   console.log(ele)
// }

// -------------------Inbuilt loop methods in array-- or Advance array methods-----------------------------

// let nums = [1,2,3,4,5,6,7,8,9];


/*
1) map in js Iterate over an array and return new array  
map method are return one single value and 
It take 3 things as a parameter value, indexing, array but onle returnone at a time  
*/

// const newNum = nums.map((num, index, array)=>{
//   return num;
// });

// console.log(newNum)

/* 
2) filter in js Iterate over an array and return new array 
when inside the conditoin is true.. same filter method take 3 parameter 
and same return one value in at a one time 
*/

// const newFilterNum = nums.filter((num, index, array)=>{
//   return num%2===0,
// });

// console.log(newFilterNum)

/* 
3) reduce take an array and it reduce it down to just one value...
*/

// const reduceNum = nums.reduce((previousValue, currentValue)=>{
//   return previousValue + currentValue
// })
// console.log(reduceNum)

/*
4) some method and every method 
some - return check every element and any one element is if satisfied the conditoin then return true
every - method check every element and  if all element are satisfied the conditoin then return true else return false
*/

// const someNum = nums.some((num)=>{
//   return num >6;   // check every single element  if conditoin satisfied then return true else false
// })

// console.log(someNum)  // return Boolean value

// const everyNum = nums.every((num)=>{
//   return num > 100;   //check every single element if conditoin is true then return true else flase
// })

// console.log(everyNum)


/*
5) find method - return the value of first element in the array 
where predication is true otherwise return undefined
*/

// const findEle = nums.find((num)=>{
//   return num > 6;
// })

// console.log(findEle)


/*
6) sort method () sort an array (accending by default and alphabetically)
*/ 

// const sortArr = nums.sort((a,b)=>{
//   return b-a          // retutn in reverse order or decanding order  
// })
// console.log(sortArr)

//--------------------------Working with multidimensiopnal array-------------------

// array within arrays 

// let multuiArr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
//   ]
  
//   console.log(multuiArr[2][1])  //output is 8.
  
  
// ---------------------------------Array Destructuring----------------------------------------
//  unpacking values from arrays..

// let deStruArr = [10, 34, 56, 23];
// let [a,b,c,d] = deStruArr;

// console.log(a)
// console.log(d)
// console.log(b,c)

// -----------------------------------Spread and rest operation------------------------------
/* 
Spread operator-- merge two or more array in single array means combine two or more array
  and create new single array
  denoted by three dot (...) 
*/

// let num = [1,2,3];
// let num2 = [02, 30, 40];

// let finalNum = [...num, ...num2];
// console.log(finalNum)


/*
rest operator or rest parameter--- Rest parameter allows a function to accept an 
                                   indefinite number of arguments as an array. 
                                   It is represented by three dots (…) followed 
                                   by the parameter.
*/

// function numbers(...number){
//   return number;
// }

// console.log(numbers(1,4,6,8))

// ----------More Array method--------- concat----------------

/*
it combine two or more array and return new array without modifying any existing array.
*/
 
let name = ['abhi', 22, 'ranchi'];
let name2 =["pratham", 23, "ranchi"];

let combineName = name.concat(name2)
console.log(combineName)





















