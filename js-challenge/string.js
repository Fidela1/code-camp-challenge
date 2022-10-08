// function
const reusableFunction = () =>{
    console.log("Hi World");
  }
  reusableFunction();

  // Global vs Local Scope in Functions

const outerWear = "T-Shirt"; // global varuable

function myOutfit() {
  
const outerWear = "sweater" // local variable
  
  console.log(outerWear);
}

myOutfit();

// Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
 
if(wasThatTrue){
  console.log('Yes, that was true');
}
else{
  console.log('No, that was false');
}

}
trueOrFalse(true);
trueOrFalse(false);