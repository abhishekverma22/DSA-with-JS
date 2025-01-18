/*
Switch with Default

Write a program that takes a month number (1-12) and returns the number of days in that month. Handle leap years for February.

Example Input: month = 2, year = 2024
Expected Output: "29 days"

*/ 

function monthDay(month, year){
  switch(month){
    
    case 1 :console.log("Jan & 31 days")
    break;
    case 3 : console.log("Mar & 31 days")
    break;
    case 5 : console.log("May & 31 days")
    break;
    case 7 : console.log("July & 31 days")
    break;
    case 8 : console.log("Aug & 31 days")
    break;
    case 10 : console.log("OCt & 31 days")
    break;
    case 12 : console.log("Dec & 31 days")
    break;

    case 4:  console.log("Apr & 30 days")
    break;
    case 6:  console.log("jun & 30 days")
    break;
    case 9:  console.log("sep & 30 days")
    break;
    case 11: console.log("NOv & 30 days")
    break;

    case 2 : if(year%4==0 || year%100 !==0 && year%400== 0){
      console.log("29 day")
    }else{
      console.log("28 day")
    }
  }
}

monthDay(2, 2025)

