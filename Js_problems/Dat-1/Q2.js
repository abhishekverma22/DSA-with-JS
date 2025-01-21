/*
Switch Case Statement
Write a JavaScript program that uses a switch statement to print the name of the day based on a given number (1-7). For example, 1 should print "Monday", 2 should print "Tuesday", and so on.

Example Input: day = 3
Expected Output: "Wednesday"


*/

function checkWeek(num) {
 switch (num){
   case 1 :console.log("Monday")
   break;
  case 2 : console.log("Tuesday")
  break;
  case 3 : console.log("Wednesday")
  break;
  case 4 : console.log("Thursday")
  break;
  case 5 : console.log("Friday")
   break;
  case 6 : console.log("Saturday")
  break;
  case 7 : console.log("Sunday")
  break;
  default : console.log("Not A week number");
  
 }
}

checkWeek(0)
checkWeek(4)
checkWeek(1)
checkWeek(8)
checkWeek(3)
checkWeek(7)
checkWeek(2)
checkWeek(3)
checkWeek(1)