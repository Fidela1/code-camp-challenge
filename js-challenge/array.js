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
