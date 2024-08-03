// 型注釈
let hello: string = 'hello';
// 型推論
let hell = 'hello';
console.log(hello);

function add(a: number, b: number): number {
  return a + b;
}

const person: {
  name: string;
  age: number;
} = {
  name: 'taro',
  age: 21
}

console.log(person);
console.log(person.age);
person.age = 23;
console.log(person);
console.log(person.age);

// const fruits = ['Apple', 'Banana', 'Orange']
const fruits: string[] = ['Apple', 'Banana', 'Orange'];

console.log(fruits);

const book: [string, number, boolean] = ['business', 10, false];
book.push(21);
console.log(book);

// Enum
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

console.log(coffee.size);
console.log(CoffeeSize);

// Union
let unionType: number | string = 19;
let unionList: (number | string)[]= [];

// Literal
// const apple: 'apple' = 'apple'
const apple = 'apple'

let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'red',
  size: 'large'
}

// エイリアス
type ClothSize = 'small' | 'medium' | 'large';
const cloth2: {
  color: string;
  size: ClothSize;
} = {
  color: 'red',
  size: 'large'
}

function add2(num1: number, num2: number): number {
  return num1 + num2;
}

function sayHello(): void {
  console.log('hello!');
}

sayHello();

// callback関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num);
  console.log(doubleNum);
}

doubleAndHandle(10, num => {
  return num * 2;
});

// never
function error(message: string): never {
  throw new Error(message);
}

// console.log(error('This is an error'));
