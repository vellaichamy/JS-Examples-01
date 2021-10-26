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

const appDiv = document.getElementById('app');
appDiv.innerHTML =
  `<h1>JS Examples</h1>xValue =` +
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
