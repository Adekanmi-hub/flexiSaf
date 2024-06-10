//Array mapping
//Example of an array
const AttendedName = ["David", "Ayo", "John", "Bryan", "Crystal"];

//Mapping the array
const allNames = AttendedName.map((x) => {
  return x + " 1";
});
document.getElementById("arr").innerHTML = allNames;

//filtering Array
//Using the array we have above, we are going to filter them and see the result.
const filtArr = AttendedName.filter((item) => item.length <= 4);
//Here, the "filtArr" returns an array of elements that pass the test
//Also it returns an empty array if no element passes the test.
document.getElementById("filt").innerHTML = filtArr;

//Array reduce()
let numbers = [1, 5, -2, 20];
//Here, 0 is set to be our initial value. if we don't set 0 to be initial value,
//the first element in our array will be used as our intial value
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
document.getElementById("red").innerHTML = sum;

//Array forEach()
let anon = 0;
const num1 = [50, 30, 3, 7];
const newSum = num1.forEach((arg1) => {
  anon += arg1;
});
document.getElementById("fore").innerHTML = anon;

const anonSum = num1.forEach((arg2, index, arr) => {
  arr[index] = arg2 + 100;
});
console.log(num1);

//Array Splice()
//This is used to add/remove element from an array
const cars = ["Volvo", "Lexus", "Mazda", "Benz", "Honda"];
cars.splice(2, 0, "Hyundai", "Acura");
document.getElementById("Splice").innerHTML = cars;
