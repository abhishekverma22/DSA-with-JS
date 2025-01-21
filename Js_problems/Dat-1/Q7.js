/*
Complex If-Else

Write a program that takes a person's age and checks the eligibility for a driving license. The conditions are:

Age should be at least 18
If the person is under 18, check if they are at least 16 and have permission from a guardian. If they meet the second condition, print "Eligible for a learner's permit".
Example Input: age = 17
Expected Output: "Eligible for a learner's permit"
*/ 

function drivingPermisio(age){
if(age >= 18){
  console.log("Eligible for Driving Permit")
}else {
  if(age >= 16 && age<= 17){
    console.log("Eligible for a Learner's permit")
  }else{
    console.log("Not permint")
  }

}
}

drivingPermisio(18)   // Eligible for Driving permit
drivingPermisio(16)  // Eligible for a Learner's Permit
drivingPermisio(18)  // Not permit