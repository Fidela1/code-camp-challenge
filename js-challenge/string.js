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