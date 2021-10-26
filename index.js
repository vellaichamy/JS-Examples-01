// Import stylesheets
import './style.css';
let test ='test'

let x = 10;
function a(){
  x=x+5;
}
function b(){
   console.log('x=====>',x);
   return x;
}
a()
let xValue = b();
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Examples</h1>xValue =`+xValue+`\n`;