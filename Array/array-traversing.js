// Array Traversing

let arrNumber = [1,2,3,4,678,56,34,78,45,23,78,8,0];


let num = []

for(let i=0; i<arrNumber.length; i++){
    console.log(arrNumber[i]);  // print every element in new line..
    num += arrNumber[i]+" "; // store every element in num variable
}

console.log(num);   //  print every element in single line with space...