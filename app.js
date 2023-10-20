// Assignment # 35-38           function | JAVASCRIPT
// JAVASCRIPT

// Q1. Write a function that displays current date & time in your
// browser.

// function date(){
//  var currentDate = new Date();
//  document.write (currentDate);
// }
// date();

// Q2. Write a function that takes first & last name and then it
// greets the user using his full name.

// var a =prompt("Enter Your first Name");
// var b =prompt("Enter Your Last Name");    

// function sum (){
// var r = a + b;
// document.write( "Greeting" + r);
// }
// sum ();

// Q3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

 
// function sum() {
// var x =prompt("Enter Your First Number ");
// var y =prompt("Enter Your Second Number");
// var z = parseInt(x)+parseInt(y);
// console.log("The Sum of "+ x +" and "+ y + " is "+ z);    
// }
// sum();

// Q4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser

// var num1 =prompt("Please Enter Your First Number");
// var num2 =prompt("Please Enter Your Second Number");
// var opr =prompt("Please Select Your Operator + , - , * , / ");

// switch(opr){
// case "+":
// var res =parseFloat(num1)+parseFloat(num2);
// console.log(res);
// break;
// case "-":
// var res =parseFloat(num1)-parseFloat(num2);
// console.log(res);
// break;
// case "*":
// var res =parseFloat(num1)*parseFloat(num2);
// console.log(res);
// break;
// case "/":
// var res =parseFloat(num1)/parseFloat(num2);
// console.log(res);
// break;
// default:
// console.log("Invalid Operator");
// }

// Q5. Write a function that squares its argument

// function square(){
// var num =prompt("Enter a Number to be Squared");    
// var square = num**2;
// console.log(square)
// }
// square();


// Q6. Write a function that computes factorial of a number
// var number = prompt("Please Enter a Number ");
// var fact =1;
// console.log(fact);
// function factorial (n){
// if (n>number){
//    return; 
// }
// var tmp =fact;
// fact = fact * n;
// n++;
// factorial(n); 
// }
// factorial(1);
// console.log("the fact of "+number + " is "+ fact);


// Q7. Write a function that take start and end number as inputs
// & display counting in your browser.


// function numbers(){
//   let startNumber = parseFloat(prompt("Enter Start Number"))
//   let endNumber = parseFloat(prompt("Enter End Number"))

// for(let i = startNumber; i <= endNumber; i++){

//   return startNumber + endNumber;
// }
// }

// document.write( numbers() )

// Q8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function Outer(){
// var base = prompt("Enter a Base of a Right Angle Triangle "); 
// var prep = prompt("Enter a Perpendicular Number of a Right Angle Triangle ");
// var hyp = (base*base)+(prep*prep);
// console.log(" base: "+base+" Perpendicular: "+ prep + " hypotenuse: "+ hyp); 
// }
// function Inner(){
// var ans = Math.sqrt(Outer);
// console.log(ans);   
// Outer();
// }
// Inner();



// Q9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area (){
// var width =+prompt("Enter the width of Rectangle");
// var height =+prompt("Enter the height of Rectangle");
// var Area =width*height;
// console.log(Area);
// }
// area();

// function Area(w,h){
// let w =+prompt("Enter the width of Rectangle");
// let h =+prompt("Enter the height of Rectangle");
// var area =w*h;
// console.log(area);
// }
// Area();

// Q10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function Palindrome (){
// var string =prompt("Please Enter A Word ")
// var len = string.length;
// var msg = ("It is a Palindrome");
// for (var i=0; i<len/2; i++){
// if (string[i] !=string[len-1-i]){
// msg = ("It is not a Palindrome");   
// }
// }
// console.log(string + msg)
// }
// Palindrome();


// Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// const capitalize = function(sentence){ 
// let str =sentence.split(" ");
// for (let i=0; i<str.length; i++){
// str[i] = str[i][0].toUpperCase()+str[i].substring(1);    
// }
// return str.join(" ");   
// }
// console.log(capitalize(prompt("enter a word")));

// Q12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function LongestWord(){
// const str =prompt("Enter a String")
// const longestWord = (str)=>{
// const strArray =str.split(" ");
// const sortedStrArray =strArray.sort(
// (strA, strB)=>{
// return strB.length - 
// strA.length;
// }
// );
// return sortedStrArray[0];
// }
// console.log(longestWord(str));
// }
// LongestWord();

// Q13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function SpecifiedLetter (){                                                  
// var string = prompt("Please Enter a Number");
// var letter = prompt("Please Enter a specified letter");
// let strLen = string.length;
// var counter = 0;
// for(var i=0; i<strLen; i++){
//   if(string[i]==letter){
//     counter++;
//   }  
// }
// console.log(string +"=>" + letter + "=>"+ counter);
// }
// SpecifiedLetter();

// Q14. The Geometrize
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// function calcCircumference(){
// var r =prompt("Enter a Radius For the Circumference"); 
// var Pi = 3.141592653589793238462643383279502884197 
// var Circumference  = 2*Pi*r;
// console.log("The area is " + Circumference)
// }
// calcCircumference();

// function AreaOfCircle(){
// var r =prompt("Enter the Area of circle ");
// var Pi = 3.141592653589793238462643383279502884197     
// var Area =Pi*r*r ;
// console.log("The area is " + Area)
// }
// AreaOfCircle();















