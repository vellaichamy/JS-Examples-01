// Import stylesheets
import './style.css';

let x = 10;
function a() {
  x = x + 5;
}
function b() {
  console.log('x ==>', x);
  return x;
}
a();
let xValue = b();
// ======================

function test() {
  return {
    a: 5,
  };
}
let obj = test();
console.log('obj ==>', obj);
// ========================

function sum(...nums) {
  console.log('sum ==>', nums);
  return nums;
}
sum(4, 5);
const Sum = sum(5, 6, 7, 8);

// =======================

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8];
console.log('arr2 ==>', arr2);

// ========================

let arr = [1, 5, 89, 5, 900, 234, 1456];
console.log('max ==>', Math.max(...arr));
// ========================

let aa = 5;
let bb = 'value';
console.log(isFinite(aa * bb));
console.log(isFinite(5 * 4));
console.log(isFinite(Number.MAX_VALUE * 4));
console.log(isFinite(Infinity));

// ========================

const outer = () => {
  return () => {
    console.log('Inner called...');
    return 'Inner called...';
  };
};
const cl = outer();
cl();
// ========================

const addCounter = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};
const cl1 = addCounter();
console.log(cl1());
// ========================
// Currying
const PriceCalc = (price) => {
  return (dPer) => {
    return price * dPer;
  };
};

const discountAmount = PriceCalc(300);
console.log(discountAmount(0.3));
console.log(discountAmount(0.5));
console.log(discountAmount(0.1));
// =================================

const genFunction = function* () {
  console.log('Hello');
  yield 'Y1';
  console.log('World');
  yield 'Y2';
  console.log('and Galaxy');
};
const gObj = genFunction();
for (let o of gObj) {
  console.log(o);
}

// ================================
function* gen() {
  console.log('gen ===========>', 'Hi');
}
function* gen1() {
  yield* gen();
}
const g1 = gen1();
g1.next();
// =================================

let arr10 = [4, 7, 9];
let arr11 = ['Hi', true, 900];
console.log(arr10);
console.log(arr11[0]);
console.log(arr11.length);
console.log(arr10[arr10.length - 1]);

// =================================

let arr02 = ['ES5', 'ES6', 'ES7', 'ES8'];
for (let elem in arr02) {
  console.log(elem);
}

for (let elem of arr02) {
  console.log(elem);
}

arr02.forEach((elem, index) => {
  console.log(elem, index);
});

let arr03 = ['One', 'Two', 'Three', 'Four', 'Five'];

console.log(arr03.push('Six'));
console.log(arr03);

console.log(arr03.unshift('Test'));
console.log(arr03);

console.log(arr03.pop());
console.log(arr03);

console.log(arr03.shift());
console.log(arr03);

console.log(arr03.splice(2));
console.log(arr03);

let arr04 = ['One', 'Two', 'One', 'Three', 'Four', 'One', 'Five'];
console.log(arr04.indexOf('One'));
console.log(arr04.indexOf('One', 3));
console.log(arr04.indexOf('one'));

console.log(arr04.lastIndexOf('One'));
console.log(arr04.lastIndexOf('One', 3));

console.log(arr.includes('Three'));
// ==============================

let arr05 = [2, 3, 6, 4, 5];
arr05.map((elem, index) => {
  console.log(elem, index);
});

let nArr = arr05.map((elem) => {
  return Math.sqrt(elem);
});
console.log(nArr);

let result = arr05.reduce((accumulator, current) => {
  return accumulator + current;
}, 10);
console.log(result);

let arr06 = [4];
let [c, d = 0] = arr06;
console.log(a, b);
// =================================

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

arrayList.splice(0, arrayList.length);
console.log(anotherArrayList); // Output []

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
while (arrayList.length) {
  arrayList.pop();
}
console.log(anotherArrayList); // Output []
// check if an object is an array or not
var arrayList = [1, 2, 3];

if (Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}

console.log(Array.isArray(arrayList));
// ================================

var x1 = 1;
var output = (function () {
  // delete x1;
  return x1;
})();

// output 1 as output. delete operator is used to delete a property from an object. Here x is not an object it's global variable of type number.
console.log(output);

var x2 = { foo: 1 };
var output = (function () {
  delete x2.foo;
  return x2.foo;
})();

console.log(output);

var Employee = {
  company: 'xyz',
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);

// NFE (Named Function Expression)
var foo = function bar() {
  return 12;
};
console.log(typeof foo());
// ==========================================

var salary = '1000$';

(function () {
  console.log('Original salary was ' + salary);

  var salary = '5000$';

  console.log('My New Salary ' + salary);
})();
// =============================

var obj01 = {
  helloWorld: function () {
    return 'hello world, ' + this.name;
  },
  name: 'Ugra',
};
console.log(obj01.helloWorld()); // // "hello world Ugra"

function User(name) {
  this.name = name || 'Ugra';
}

var person = (new User('xyz')['location'] = 'India');
console.log(person);

// ============================

const appDiv = document.getElementById('app');
appDiv.innerHTML =
  `<h1>JavaScript Examples</h1>xValue =` +
  xValue +
  `<br> obj = ` +
  JSON.stringify(obj) +
  `<br> Sum = ` +
  JSON.stringify(Sum) +
  `<br> arr2 = ` +
  JSON.stringify(arr2) +
  `<br> max = ` +
  Math.max(...arr) +
  `<br> Closer = ` +
  cl() +
  `<br> addCounter = ` +
  cl1() +
  `<br> PriceCalc = ` +
  discountAmount(0.1) +
  `<br> genFunction = ` +
  JSON.stringify(g1.next());
