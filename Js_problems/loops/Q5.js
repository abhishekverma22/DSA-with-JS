/*
Nested If Statement
Write a program that checks whether a given year is a leap year. A leap year occurs if:

It is divisible by 4, but not divisible by 100, OR
It is divisible by 400.
Example Input: year = 2020
Expected Output: "Leap year"

*/

function leapYear(num){
  if(num%4==0 || num%100 !==0 && num%400 ==0 ){
    console.log("Lear Year")
  }else{
    console.log("Not a Leap Year")
  }
}

leapYear(2024)
leapYear(2023)