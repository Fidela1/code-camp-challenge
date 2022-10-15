// function
const reusableFunction = () =>{
    console.log("Hi World");
  }
  reusableFunction();

  // Global vs Local Scope in Functions

const outerWear = "T-Shirt"; // global varuable

const myOutfit = () =>{
  
const outerWear = "sweater" // local variable
  
  console.log(outerWear);
}

myOutfit();

// Use Conditional Logic with If Statements

const trueOrFalse = (wasThatTrue) =>{
 
if(wasThatTrue){
  console.log('Yes, that was true');
}
else{
  console.log('No, that was false');
}

}
trueOrFalse(true);
trueOrFalse(false);

// comparison operator

const testEqual = (val) =>{
  if (val == 12) { // Change this line
    console.log("Equal"); 
  }
  else{
  console.log("Not Equal"); 
  }
}

testEqual(10);

// Comparison with the Inequality Operator

const testNotEqual = (val) =>{
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));


const testStrictNotEqual = (val) => {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

// comparison with greater than operator

const testGreaterThan = (val) =>{
  if (val >100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));

// Comparison with the Greater Than Or Equal To Operator

const testGreaterOrEqual = (val) =>{
  if (val >=20) {  // Change this line
    return "20 or Over";
  }

  if (val >=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));


const testLessOrEqual = (val) =>{
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(10));
console.log(testLessOrEqual(20));

const testSize = (num) =>{
  
if(num < 5){
return "Tiny";
}
else if(num < 10){
return "Small";
}
else if(num < 15){
return "Medium";
}
else if(num < 20){
return "Large";
}
else if(num >= 20){
return "Huge";
}else{
  return "Change Me";
}
  
}

console.log(testSize(7));

// to make array empty
const emptyArray = () => {
var array = [1,2,3,4];
var newArray = array;
array= [];
console.log(array);
}
emptyArray();

// to check if number is enteger

const integer = (n) => {
 return n %1 === 0;

 }
console.log(integer(4));
console.log(integer(3.4));
console.log(integer(2.4));

// substring method

let c = 'Banana,Orange,Apple';
let t = c.substring(7,13);
console.log(t);

// switch case
const caseInSwitch = (val) =>{
  let answer = "";

switch(val){
  case 1:
answer = "alpha";
break;
  case 2:
answer = "beta";
break;
  case 3:
answer = "gamma";
break;
case 4:
answer = "delta";
break;
}
  return answer;
}

console.log(caseInSwitch(1));


function switchOfStuff(val) {
  let answer = "";
switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
}
  return answer;
}

console.log(switchOfStuff(1));