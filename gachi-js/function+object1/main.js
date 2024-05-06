function fn(a, b=1) {
  console.log(a, b);
}

fn(1, 0);

function fn2() {
  console.log(arguments[0], arguments[1]);
}

fn2(1, 0);

// コールバック関数
function hello() {
  console.log("hello");
}

function cb(hello) {
  hello();
}

cb(hello);

setTimeout(hello, 2000);

console.log("////////////////////////////////////");

const personCb = {
  hello: function () {
    return 'hello Tom';
  }
}

setTimeout(function() {
  const hello = personCb.hello();
  console.log(hello);
}, 1000);

setTimeout(function() {
  const hello = personCb.hello();
  alert(hello);
}, 1000);

// this
const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello', this.name);
  }
}

person.hello();

window.name = 'John';
const ref = person.hello;
ref();

// bind
const helloTom = person.hello.bind(person);
helloTom();

// call. apply
const tim = {name: 'Tim'};

ref.apply(tim);
ref.call(tim);

// アロー関数
