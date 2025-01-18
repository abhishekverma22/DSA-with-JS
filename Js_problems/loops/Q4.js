/*
Multiple Conditions (If-Else)
Write a program that checks if a student’s score is between 90-100, 75-89, 50-74, or below 50, and prints a grade based on the score:

90-100: "A"
75-89: "B"
50-74: "C"
below 50: "F"
Example Input: score = 85
Expected Output: "B"

*/ 

studentScore(90)
studentScore(78)
studentScore(50)
studentScore(34)


function studentScore(num){
if(num >= 90 && num <= 100){
  console.log("A")
}else if (num >=75 && num <= 89){
  console.log("B")
}else if (num >=50 && num <= 74){
  console.log("C")
}else{
  console.log("F")
}
}