let num = 0;
function increment(num) {
  if (num < 3) {
    console.log(num);
    num++;
    increment(num);
  } else {
    return num;
  }
}

increment(num);

// クロージャー
// プライベート変数
function incrementFactory() {
  let num = 0;

  function increment() {
    num++;
    console.log(num);
  }

  return increment;
}

const increment1 = incrementFactory();

increment1();

// 動的関数生成
function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

// 即時関数
function a() {
  console.log("called");
}
a();

(function() {
  console.log("called");
})();

// ------------------------------------------------------
function calcFactory(num) {
  let result = num;

  function plus(val) {
    result += val;
    console.log(result);
  }

  function minus(val) {
    result -= val;
    console.log(result);
  }

  function multiply(val) {
    result *= val;
    console.log(result);
  }

  function divide(val) {
    result /= val;
    console.log(result);
  }

  return {
    plus,
    minus,
    multiply,
    divide
  }
}

const calc = calcFactory(10);
calc.plus(3);
calc.minus(3);
calc.multiply(2);
calc.divide(2);

const cal = (function(num) {
  let result = num;

  function plus(val) {
    result += val;
    console.log(result);
  }

  function minus(val) {
    result -= val;
    console.log(result);
  }

  function multiply(val) {
    result *= val;
    console.log(result);
  }

  function divide(val) {
    result /= val;
    console.log(result);
  }

  return {
    plus,
    minus,
    multiply,
    divide
  }
})(10);

calc.plus(3);
calc.minus(3);
calc.multiply(2);
calc.divide(2);
