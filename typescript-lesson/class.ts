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

class Teacher extends Person {
  constructor(id: number, name: string, age: number, public subject: string) {
    super(id, name, age);
  }

  greeting(this: Teacher) {
    console.log(`Hello, ${this.name}. You teach ${this.subject}.`);
  }
}

const Mike = new Person(1, 'Mike', 22);
console.log(Mike);
console.log(Mike.name);
console.log(Mike.id);
Mike.greeting();

const teacher = new Teacher(2, 'Tom', 30, 'science');
console.log(teacher)
teacher.greeting();
