interface Nameable {
  name: string;
}

interface Human extends Nameable{
  name: string;
  age: number;
  greeting(message: string): void;
}

// const human: Human = {
//   name: 'John',
//   age: 22,
//   greeting(message: string): void {
//     console.log(message);
//   }
// }

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string): void {
    console.log(message);
  }
}

const user: Human = new Developer("Mike", 22, 3);
