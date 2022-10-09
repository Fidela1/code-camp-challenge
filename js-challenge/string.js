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

// Setup
const testNotEqual = (val) =>{
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));