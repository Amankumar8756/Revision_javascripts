// var a = 10;

// function b(){
//     var x= 10;
// }
//     console.log(window.a)
//     console.log(a)
//     console.log(this.a)


/* undefined and not defined*/


// console.log(a)
//  var a = 10;

//  console.log(x)

//================================> scope chaimn

let a = 1;

function outer() {
  let b = 2;

  function inner() {
    let c = 3;
    console.log(a, b, c); // ✅ 1 2 3 — found in scope chain
  }

  inner();
}
outer();


// lexical

function outer() {
  let outerVar = "I’m outer";

  function inner() {
    console.log(outerVar); // JS knows `outerVar` exists due to lexical environment
  }

  return inner;
}

const myFunc = outer();
myFunc(); // "I’m outer"
