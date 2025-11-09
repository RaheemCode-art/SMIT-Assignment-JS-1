// Q1: Alert
alert("Wellcome")

//Q2: variables for Strings
var userName = "Abdul Raheem"
console.log(userName)

//Q3: variables for Numbers
var number1 = 20
var number2 = 10
console.log(number1 + number2)

//Q4: legal and illegal names
// legal names
var fathername = "Ghulam Shabbir"
var cast = "Kandhro"
var brother_name = "Muhammad Ayoub "
var facultyDeppartment = "FET Software Emgineering"
var rollNumber = "2k25/SWE/05"
//illegal names
// var 1number = 22 //Can't start with digit
// var freind name = "mohsin" //Can't use Space
// var @gmail = "abdulraheem@gmail.com" //Can't use symbol 
// var class = "8th Class" // can't use reserved keywords of js
// var %percent = 70% // can't use special  character

//Q5: Math Espressions Familar operators

var number_1 = 10
var number_2 = 20
console.log(number_1 + number_2 )
console.log(number_1 - number_2 )
console.log(number_1 * number_2 )
console.log(number_1 / number_2 )

//Q6: Math Espressions unfamilar operators
//Q6a
var number =prompt("Enter a number to check it is even or odd")
number = Number(number)

if (number % 2 === 0) {
    console.log(number + " is  even number")  
} 
else {
    console.log(number + " is an odd number")
}

//Q6b: Pre Increament Decrement
var increment = 8
console.log(++increment) // i use increment operator where my innitial num is 8 then i used ++ to add in  next line consol.log
var Decrement = 8
console.log(--Decrement)  // i use decreament operator where my innitial num is 8 then i used -- to subtract in next line consol.log
//Q6b Post Increament 
var postIncrement = 8
console.log(postIncrement++)
console.log(postIncrement) // i used post increment that mean i tell him add but not in this add next line 
//Q6b post decrement
var postDecrement = 8
console.log(postDecrement--)
console.log(postDecrement) // i used post decrement that mean i tell him substract but not in this substract next line 

//Q7 Concatenating text string
var firstName = "Abdul Raheem"
var lastName = "Kandhro"
console.log(firstName + " " + lastName )

//Q8: Prompts
var color =prompt("What is favorite color ")
// console.log(color)
console.log("WoW Nice Choice")

//Q9: If statements
var number =prompt("What is greater than 10?")
if (number > 10){
    console.log("true")
}

//Q10: Comparison operators
var comparison1 = 5
var comparison2 = "5"
console.log(comparison1 == comparison2) // == checks only value 
console.log(comparison1 === comparison2) // === checks value and data types 

//Q11: if else statement 
var percentage =+prompt("Enter your percentage")
if(percentage >= 80){
    alert("A")
}
else if(percentage >=60){
    alert("B")
}
else if(percentage >=40){
    alert("C")
}
else  if (percentage < 40){
    alert("Fail")
}
else  {
    alert ("Fail")
}

//Bonus Task

var num1 = Number(prompt("Enter first number:"))
var num2 = Number(prompt("Enter second number:"))
var operator = prompt("Enter operator (+, -, *, /):")
if (operator === "+") {
  console.log( + (num1 + num2))
} else if (operator === "-") {
  console.log( + (num1 - num2))
} else if (operator === "*") {
  console.log( + (num1 * num2))
} else if (operator === "/") {
  console.log( + (num1 / num2))
} else {
  console.log("Invalid operator")
}