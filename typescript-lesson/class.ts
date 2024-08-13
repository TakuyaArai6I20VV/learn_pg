class Person {
  name: string;
  age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  greeting(this: { name: string, age: number }) {
    console.log(`Hello, ${this.name}!\nYour age is ${this.age}`);
  }
}

const Mike = new Person('Mike', 22);
console.log(Mike);
console.log(Mike.name);
console.log(Mike.age);
Mike.greeting();
