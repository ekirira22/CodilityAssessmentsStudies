// Array Methods 
//filter() method : create new array. 1. function ()  2. Output of items to fill the new array
//[] filter -> undefined. 
// does not change the original array. 
const age = [45,32,80,' ',16,15,18]
const result = age.filter(checkIfAbove18);

function checkIfAbove18(age){
  return age >= 18;
}

console.log(result)

//syntax 
// Array.filter(function(valueofthecurrentelement){});

// array of ids 
// filtering for invalid entries in array 
//our new array should contain non-zero and numeric 

let array = [{id: 3, name:'joseph'},{id: 4},{id: 0},{id: null},{id: 'undefined'},{id: 5},{ }];
let count = 0;
let resultTwo = array.filter(filterIds);
//count of invalid entries
function filterIds(array) {
  //logical code
  // array.id , array[id]
  if(Number.isFinite(array.id) && array.id !== 0 ){
    return true;
  }
  count++;
  return false;
}

console.log(resultTwo);


// find method  : returns the first value that passes the test 
// function attached 
// returns undefined if no elements are found 
// no execution for empty elements 
//does not change the original array 
// Array.find(function(valueofthecurrentelement){});

const ageFind = [14,15,16,18,18,20];
const resultThree = ageFind.find(checkAge);

function checkAge(ageFind) {
   return ageFind == 18;
}

console.log(resultThree);

// Reduce method :  executes a reducer function for an array element. 
// returns a single value : the functions accumulated result 
// empty arrays or array elements will be skipped 
// does not change the original array 

// reduce() : [1,2,3,4,5] : [left to right]
// reduceRight() : (moves from right to left )
// array.reduce(function(intialvalue,currentValue){}, intialValue)
// array.reduceRight(function(intialvalue,currentValue){}, intialValue)
// intialvalue = previously returned output of the reducer function
// return value : accumulated result from the last call of the callback function
const numbers = [15.5, 20, 10, 88];
let results = numbers.reduce(getSum,0);

function getSum(total,numbers) {
    return total + numbers;
}

console.log(results);

const numberRight = [2,30,100];

console.log(numberRight.reduce(getDiff));
function getDiff(diff,numberRight) { 
   return diff - numberRight;
}


