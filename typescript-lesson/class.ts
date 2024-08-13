abstract class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    else return false;
  }

  readonly id: number;
  public name: string;
  readonly age: number;

  constructor(initId: number, initName: string, initAge: number) {
    this.id = initId;
    this.name = initName;
    this.age = initAge;
  }

  // 初期化の省略
  // constructor(public name: string, private age: number) {}

  // incrementAge() {
  //   this.age++;
  // }

  greeting(this: Person) {
    console.log(`Hello, ${this.name}!\nYour age is ${this.age}`);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
  get valSubject() {
    if (!this.subject) {
      throw new Error('Subject is not set');
    }
    return this.subject;
  }

  set valSubject(value) {
    if (!value) {
      throw new Error('Subject is required');
    }
    this.subject = value;
  }

  constructor(id: number, name: string, age: number, public subject: string) {
    super(id, name, age);
  }

  greeting(this: Teacher) {
    console.log(`Hello, ${this.name}. You teach ${this.subject}.`);
  }

  explainJob(): void {
      console.log(`I teach ${this.subject}.`);
  }
}

// const Mike = new Person(1, 'Mike', 22);
// console.log(Mike);
// console.log(Mike.name);
// console.log(Mike.id);
// Mike.greeting();

const teacher = new Teacher(2, 'Tom', 30, 'science');
console.log(teacher)
teacher.greeting();
teacher.subject = 'math';
console.log(teacher)
console.log(teacher.subject);

console.log(Person.isAdult(2));
teacher.explainJob();
