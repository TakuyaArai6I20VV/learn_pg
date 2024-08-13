class Person {
  readonly id: number;
  public name: string;
  private age: number;

  constructor(initId: number, initName: string, initAge: number) {
    this.id = initId;
    this.name = initName;
    this.age = initAge;
  }

  // 初期化の省略
  // constructor(public name: string, private age: number) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person) {
    console.log(`Hello, ${this.name}!\nYour age is ${this.age}`);
  }
}

const Mike = new Person(1, 'Mike', 22);
console.log(Mike);
console.log(Mike.name);
console.log(Mike.id);
Mike.greeting();
