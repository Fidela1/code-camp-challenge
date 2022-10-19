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
const countItem = (sr) =>{

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

const myDog = {

  name:"sam",
  legs:4,
  tails:1,
  friends:["Alice","Alliane","Anne"]
  };
  console.log(myDog);


  // Accessing Object Properties with Variables
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16; 
const player = testObj[playerNumber];   
console.log(player);

// using forEach method
const students = ["Alliane","Alice","Anne","Jane"];
students.forEach(myStudent);
function myStudent(item){
  console.log(item);
}

const student = ["Alliane","Alice","Anne","Jane"];
student.forEach(myStudent);

// adding strings to the array elements

const myStudents = (item,index,arr) => {
  arr[index] = 'Hello ' +item;
  
}
console.log(student);


// to check if number is even or odd
const number1 = [1,2,3,4,5,6,7,8];
const findEven = (even) => {
return even%2 == 0;
}
let bbb = number1.filter(findEven);
console.log(bbb);


