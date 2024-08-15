type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const mike: EngineerBlogger = {
  name: 'Mike',
  role: 'Software Engineer',
  follower: 2000
}

// Type guard
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return ''
}
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
}

// instance guard
class Dog {
  speak() {
    console.log('Woof!');
  }
}

class Bird {
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('Flying');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());
