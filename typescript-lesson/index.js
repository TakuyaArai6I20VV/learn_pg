// 型注釈
var hello = 'hello';
// 型推論
var hell = 'hello';
console.log(hello);
function add(a, b) {
    return a + b;
}
var person = {
    name: 'taro',
    age: 21
};
console.log(person);
console.log(person.age);
person.age = 23;
console.log(person);
console.log(person.age);
// const fruits = ['Apple', 'Banana', 'Orange']
var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
var book = ['business', 10, false];
book.push(21);
console.log(book);
// Enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
console.log(coffee.size);
console.log(CoffeeSize);
// Union
var unionType = 19;
var unionList = [];
// Literal
// const apple: 'apple' = 'apple'
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'red',
    size: 'large'
};
var cloth2 = {
    color: 'red',
    size: 'large'
};
function add2(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello!');
}
sayHello();
// callback関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num);
    console.log(doubleNum);
}
doubleAndHandle(10, function (num) {
    return num * 2;
});
// never
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
