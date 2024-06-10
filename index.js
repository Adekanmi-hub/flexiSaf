//let Keyword
//Let is accessible here because it's a global scope.
//i.e it's not restricted with the use of curly braces to make it local.
let globX = 30;

{
  /* This "let" keyword here is inside a local scope as it can not be accessed
  outside the curly braces. */
  let locX = 25;
  let locY = 2;

  let calc = locX * locY;
  console.log(calc);
}
document.getElementById("let").innerHTML = globX;

//Const Keyword
//Const works like the let keyword but the values and constant i.e can not be changed.
//For example
const globCon = "Happy new month";

{
  const loCon = "Hello world";
  const locon = "I like it here.";

  const allCon = loCon + ", " + locon;
  console.log(allCon);
}
document.getElementById("const").innerHTML = globCon;

//Arrow Functions
const newFunc = function (c, d) {
  let newSum = c + d;
  console.log(newSum);
  return newSum;
};
newFunc(5, 9);

//it allows usto write shorter function syntax
//example
const ArrFunc = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return sum;
};
ArrFunc(5, 6);

//Arrow function can also be used without curly braces
//example
const listen = () => "Can you hear me John!";
document.getElementById("arrfunc").innerHTML = listen();
