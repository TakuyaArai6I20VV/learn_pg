class Person {
  public name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge() {
    this.age++;
  }

  greeting(this: Person) {
    console.log(`Hello, ${this.name}!\nYour age is ${this.age}`);
  }
}

const Mike = new Person('Mike', 22);
console.log(Mike);
console.log(Mike.name);
Mike.greeting();
