// push method

const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog",3]);
console.log('myArray ',myArray);

// 

const myArra = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray.pop(["cat",2]);
console.log(removedFromMyArray);
console.log(myArra);

// shift method
const myArr = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArra = myArr.shift();
console.log('removed array',removedFromMyArra);
console.log(myArr);

// unshift and shift method

const ourArray = [["John", 23], ["dog", 3]];
ourArray.shift();

ourArray.unshift(["Paul",35]);
console.log('new array',ourArray);

// sub array

const myList = [["John",1],["Jane",2],["Ange",3],["Alice",4],["Anne",5]];

console.log('names and numbers',myList);



  // to find sum

  const functionWithArgs = (a,b) =>{
    console.log(a+b);
  }
  functionWithArgs(1,2);
  functionWithArgs(7,9);


  function timesFive(a){
    console.log('answer =',a*5);
  }
   timesFive(5);
   timesFive(2);
   timesFive(0);


 
let sum = 0;

function addThree() {
  sum = sum + 3;
  console.log('sum is',sum);
}

 function addFive(){
   sum = sum + 5;
 }
addThree();
addFive();

// Assignment with a Returned Value

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);

//vghj
function countItem (sr){

  if (sr){
    var obj ={};
  for(let i=0;i<sr.length;i++){
    if (obj[sr[i]]){
      obj[sr[i]] += obj[sr[i]];
    }
    else{
      obj[sr[i]] = 1;
    }
    }
    console.log(obj);
  }
}
countItem("abbds");