// Import stylesheets
import './style.css';


let x = 10;
function a(){
  x=x+5;
}
function b(){
   console.log('x ==>',x);
   return x;
}
a()
let xValue = b();
// ======================

function test(){
  return {
     a:5
  };
}
let obj = test();
console.log('obj ==>',obj); 
// ========================

function sum(...nums){
  console.log('sum ==>',nums);
  return nums;  
}
sum(4,5);
const Sum = sum(5,6,7,8);

// =======================

let arr1 = [1,2,3,4,5];
let arr2 = [...arr1,6,7,8];
console.log(arr1);

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Examples</h1>xValue =`+xValue+`<br> obj = `
+ JSON.stringify(obj) +`<br> Sum = `
+ JSON.stringify(Sum) 
;