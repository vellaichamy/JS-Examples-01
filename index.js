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
  var temp = 'Vellaichamy';
  return () => {
    console.log('Inner called...', temp);
    return 'Inner called...' + temp;
  };
};
const cl = outer();
cl();
// ========================
// const addCounter = () => {
//   let counter = 0;
//   // return () => {
//   // counter++;
//   return counter;
//   // };
// };
// const addCounter = 
 function addCounter() {
  let counter = 0;
  return () => {
  counter++;
  return counter;
  };
};
console.log(typeof(addCounter))
const cl1 = addCounter();
console.log(cl1());
console.log(cl1());
console.log(cl1());
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

var result01 = (function myIIFEFunc(param1) {
  console.log("Hi, I'm IIFE, " + param1);
  return 1;
})('Ugra');
// outputs "Hi, I'm IIFE, Ugra!"
// result variable will contain 1

~(function () {
  console.log("hi I'm IIFE");
})();

!(function () {
  console.log("hi I'm IIFE");
})() +
  (function () {
    console.log("hi I'm IIFE");
  })() -
  (function () {
    console.log("hi I'm IIFE");
  })();

// (function myIIFEFunc1 (){console.log("hi I'm IIFE");})();
var i = (function () {
  console.log("hi I'm IIFE");
})();
true &&
  (function () {
    console.log("hi I'm IIFE");
  })();
0,
  (function () {
    console.log("hi I'm IIFE");
  })();
new (function () {
  console.log("hi I'm IIFE111");
})();
new (function () {
  console.log("hi I'm IIFE");
})();
// ============================
/* Lazy Instantiation skeleton for a singleton pattern */

var MyNameSpace = {};
MyNameSpace.Singleton = (function () {
  // Private attribute that holds the single instance
  var singletonInstance;

  // All of the normal code goes here
  function constructor() {
    // Private members
    var privateVar1 = 'Ugra';
    var privateVar2 = [1, 2, 3, 4, 5];

    function privateMethod1() {
      // code stuff
    }

    function privateMethod1() {
      // code stuff
    }

    return {
      attribute1: 'Ugra',
      publicMethod: function () {
        alert('Ugra'); // some code logic
      },
    };
  }

  return {
    // public method (Global access point to Singleton object)
    getInstance: function () {
      //instance already exist then return
      if (!singletonInstance) {
        singletonInstance = constructor();
      }
      return singletonInstance;
    },
  };
})();

// getting access of publicMethod
// console.log(MyNamespace.Singleton.getInstance().publicMethod());

// ============================================
function Clone(object) {
  var newObject = {};
  for (var key in object) {
    newObject[key] = object[key];
  }
  return newObject;
}

var objectLit = { foo: 'Bar' };
var cloneObj = Clone(obj); // Clone is the function which you have to write
console.log(cloneObj === Clone(objectLit)); // this should return false
console.log(cloneObj == Clone(objectLit)); // this should return true

var arr20 = [10, 32, 65, 2];
for (let i = 0; i < arr20.length; i++) {
  setTimeout(
    (function (j) {
      // return function () {
      console.log('The index of this number is: ' + j);
      // };
    })(i),
    3000
  );
}

// =========================================================

function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.incrementSalary = function (byValue) {
    this.salary = this.salary + byValue;
  };
}

//Prototypal Inheritance
// Employee.prototype = new Person("Nishant", 24,5000);

// var emp1 = new Employee("Google");

// console.log(emp1 instanceof Person); // true
// console.log(emp1 instanceof Employee); // true

// ============================

var employee = {
  name: 'Ugra',
};

// Seal the object
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true

// delete employee.name // fails silently unless it's in strict mode

// Trying to add new property will give an error
// employee.age = 30; // fails silently unless in strict mode

var employee = {
  name: 'Ugra',
};

//Freeze the object
Object.freeze(employee);

// Seal the object
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true
console.log(Object.isFrozen(employee)); // true

// employee.name = "xyz"; // fails silently unless in strict mode
// employee.age = 30;     // fails silently unless in strict mode
// delete employee.name   // fails silently unless it's in strict mode

// "use strict";

var employee = {
  name: 'Ugra',
};

//Freeze the object
Object.freeze(employee);

// Seal the object
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true
console.log(Object.isFrozen(employee)); // true

// employee.name = "xyz"; // fails silently unless in strict mode
// employee.age = 30;     // fails silently unless in strict mode
// delete employee.name;  // fails silently unless it's in strict mode

// =========================================================

var z = 1,
  y = (z = typeof y);
console.log(y);
(function () {
  console.log("Hi, I'm IIFE!");
})();
// outputs "Hi, I'm IIFE!"
// =============================
// merge two JavaScript Object dynamically
var person = {
  name: 'John',
  age: 24,
};

var address = {
  addressLine1: 'Some Location x',
  addressLine2: 'Some Location y',
  city: 'NewYork',
};

// const merge = (toObj, fromObj) => Object.assign(toObj, fromObj);

function merge(toObj, fromObj) {
  // Make sure both of the parameter is an object
  if (typeof toObj === 'object' && typeof fromObj === 'object') {
    for (var pro in fromObj) {
      // Assign only own properties not inherited properties
      if (fromObj.hasOwnProperty(pro)) {
        // Assign property and value
        toObj[pro] = fromObj[pro];
      }
    }
    return toObj;
  } else {
    throw 'Merge function can apply only on object';
  }
}

console.log(merge(person, address));
// ===========================
var employeeId = '1234abe';
(function () {
  var employeeId = '122345';
  (function () {
    var employeeId = 'abc1234';
  })();
  console.log(employeeId);
})();

// =====================================

(function () {
  console.log(typeof displayFunc);
  var displayFunc = function () {
    console.log('Hi I am inside displayFunc');
  };
  console.log(typeof displayFunc);
})();

// ==========================
var employeeId = 'abc123';
function foo() {
  employeeId = '123bcd';
  return;
}
foo();
console.log(employeeId);

// =================

var employeeId = 'abc123';

function foo() {
  employeeId = '123bcd';
  return;

  // function employeeId() {}
}
foo();
console.log('foo()=====>', employeeId);

// ==================================================
var employeeId = 'abc123';

// function foo() {
// 	employeeId();
// 	return;

// 	function employeeId() {
// 		console.log(typeof employeeId);
// 	}
// }
// foo();
// =============
var employeeId = 'abc123';

function foo00() {
  employeeId();
  return;

  function employeeId() {
    console.log('====?', typeof employeeId);
  }
}
foo00();

// =============================
function foo01() {
  employeeId1();
  var product = 'Car';
  return;

  function employeeId1() {
    console.log('product====>0', product);
  }
}
foo01();

// ===========================

(function foo() {
  bar();

  function bar() {
    abc();
    console.log(typeof abc);
  }

  function abc() {
    console.log(typeof bar);
  }
})();

// ===========================

(function () {
  'use strict';

  var person = {
    name: 'John',
  };
  person.salary = '10000$';
  person['country'] = 'USA';

  Object.defineProperty(person, 'phoneNo', {
    value: '8888888888',
    enumerable: true,
  });

  console.log(Object.keys(person));
})();

// ======================================

(function () {
  'use strict';

  var person = {
    name: 'John',
  };
  person.salary = '10000$';
  person['country'] = 'USA';

  Object.defineProperty(person, 'phoneNo', {
    value: '8888888888',
    enumerable: false,
  });

  console.log(person);
  console.log(Object.keys(person));
})();
// ======================================

(function () {
  var objA = new Object({ foo: 'foo' });
  var objB = new Object({ foo: 'foo' });
  console.log(objA == objB);
  console.log(objA === objB);
})();

// =====================================
(function () {
  var objA = Object.create({
    foo: 'foo',
  });
  var objB = Object.create({
    foo: 'foo',
  });
  console.log('1======>', objA == objB);
  console.log('2======>', objA === objB);
})();

// ============================

(function () {
  var objA = Object.create({
    foo: 'foo',
  });
  var objB = objA;
  console.log(objA == objB);
  console.log(objA === objB);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
// =================================

(function () {
  var objA = Object.create({
    foo: 'foo',
  });
  var objB = objA;
  objB.foo = 'bar';
  console.log(objA.foo);
  console.log(objB.foo);
})();
// ===================================

(function () {
  var objA = Object.create({
    foo: 'foo',
  });
  var objB = objA;
  objB.foo = 'bar';

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();

// =======================================

(function () {
  var array = new Array('100');
  console.log(array);
  console.log(array.length);
})();
// ==============================

(function () {
  var array = new Array('a', 'b', 'c', 'd', 'e');
  console.log(array.length);
  array[10] = 'f';
  console.log(array.length);
  delete array[10];
  console.log(array.length);
})();
// ==================================
(function () {
  var animal = ['cow', 'horse'];
  animal.push('cat');
  animal.push('dog', 'rat', 'goat');
  console.log('animal', animal.length);
})();
//========================

(function () {
  var animal = ['cow', 'horse'];
  animal.push('cat');
  animal.unshift('dog', 'rat', 'goat');
  console.log(animal);
})();

// =============================

(function () {
  var array = [1, 2, 3, 4, 5];
  console.log('indexOf(2)', array.indexOf(2));
  let a = [{ name: 'Ugra' }, { name: 'Ugra' }];
  console.log('a====>', a.indexOf({ name: 'Ugra' }));
  console.log([[1], [2], [3], [4]].indexOf([3]));
  console.log('abcdefgh', 'abcdefgh'.indexOf('e'));
})();

// =======================
(function () {
  var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
  console.log('indexOf(2)', array.indexOf(2));
  console.log('indexOf(2,3)', array.indexOf(2, 2));
  console.log('indexOf(10)', array.indexOf(2, 10));
})();

// ==================================
(function () {
  var numbers = [2, 3, 4, 8, 9, 11, 13, 12, 16];
  var even = numbers.filter(function (element, index) {
    return element % 2 === 0;
  });
  console.log(even);

  var containsDivisibleby3 = numbers.some(function (element, index) {
    return element % 3 === 0;
  });

  console.log(containsDivisibleby3);
})();
// ===================================
(function () {
  var list = ['foo', 'bar', 'john', 'ritz'];
  console.log(list.slice(1));
  console.log(list.slice(1, 3));
  console.log(list.slice());
  console.log(list.slice(2, 2));
  console.log(list);
})();

// ================================
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  arrayNumb.sort();
  console.log(arrayNumb);
})();

// ====================================
function funcA() {
  console.log('funcA ', this);
  (function innerFuncA1() {
    console.log('innerFunc1', this);
    (function innerFunA11() {
      console.log('innerFunA11', this);
    })();
  })();
}

console.log(funcA());

// ================================
var obj02 = {
  message: 'Hello',
  innerMessage: !(function () {
    console.log(this);
  })(),
};

// console.log(obj02.innerMessage);

var obj03 = {
  message: 'Hello',
  innerMessage: function () {
    return this.message;
  },
};

console.log(obj03.innerMessage());

// =================================
var obj04 = {
  message: 'Hello',
  innerMessage: function () {
    // (function () {
    //   console.log(this.message);
    // }());
  },
};
console.log(obj04.innerMessage());
// ===========================
var obj04 = {
  message: 'Hello',
  innerMessage: function () {
    var self = this;
    // (function () {
    //   console.log(self.message);
    // }());
  },
};
console.log(obj04.innerMessage());

// ========================
function myFunc() {
  console.log(this.message);
}
myFunc.message = 'Hello Ugra';

// console.log(myFunc());
// ===================================

function myFunc() {
  console.log('Inner', myFunc.message);
}
myFunc.message = 'Hello Ugra';

console.log('Outer', myFunc());
// ====================

function myFunc() {
  myFunc.message = 'Hello Ugra';
  console.log(myFunc.message);
}
console.log(myFunc());
// ==============================

function myFunc01(param1, param2) {
  console.log(myFunc.length);
}
console.log('1====?', myFunc01());
console.log('2====?', myFunc01('a', 'b'));
console.log('3====?', myFunc01('a', 'b', 'c', 'd'));
// ===============================

function myFunc() {
  console.log(arguments.length);
}
console.log(myFunc());
console.log(myFunc('a', 'b'));
console.log(myFunc('a', 'b', 'c', 'd'));
// ===================
function Person02(name, age) {
  this.name = name || 'Ugra';
  this.age = age || 25;
  this.displayName = function () {
    console.log(this.name);
  };
}

// Person02.name = "Ugra";
// Person02.displayName = function(){
// 	console.log(this.name);
// }

// var person1 = new Person02('Ugra');
// 	person1.displayName();
// 	Person02.displayName();

function passWordMngr() {
  var password = '12345678';
  // this.userName = 'Ugra';
  return {
    pwd: password,
  };
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
// console.log(userInfo.userName);

var employeeId = 'aq123';
function Employee() {
  this.employeeId = 'Ugra';
}
console.log(Employee.employeeId);

// =====================================
var employeeId = 'aq123';
function Employee02() {
  this.employeeId = 'qncde';
}
console.log(Employee03.employeeId);
// ===========================

var employeeId = 'aq123';

function Employee03() {
  this.employeeId = 'abcdef';
}
console.log(new Employee03().employeeId);
Employee03.prototype.employeeId = 'kj182';
// Employee.prototype.JobId = '1BJKSJ';
// console.log(new Employee().JobId);
// console.log(new Employee().employeeId);

var employeeId = 'aq123';
(function Employee04() {
  try {
    throw 'foo123';
  } catch (employeeId) {
    console.log('catch', employeeId);
  }
  console.log('Outer', employeeId);
})();

// =================================
(function greetNewCustomer() {
  console.log('Hello ' + this.name);
}.bind({
  name: 'Ugra',
})());

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
