//document.write('Hello World');

//var hello = 'Hello World';
//alert(hello);
//console.log(hello);

//var userName = prompt('Enter your name');
//var greet = 'Hello, '+ userName;
//document.write('greet');

var a=2;
var b=5;
var c=3;


function equationDescr(a,b,c) {
var d=b*b-4*a*c;

if (a===0 || d<0) {
 result='no result';  
}
else {
if (d>0) {
x1=(-b+Math.sqrt(d))/(2*a);
x2=(-b-Math.sqrt(d))/(2*a);
result='x1='+x1+', x2='+x2;
}
else if (d===0) {
x1= -b/(2*a);
result="x="+x1;
}
}
return result;
}

document.write(equationDescr(a,b,c));


/*
var coefficientA, coefficientB, coefficientC;
var firstQuadrat, secondQuadrat;
var result;
var discriminant;

function quadraticEquation(a, b, c) {
  discriminant = b * b - 4 * a * c;
  
  if (discriminant < 0 || a == 0) {
    result = 'There are no real quadrats';
    
  }  else if (discriminant > 0) {
    firstQuadrat = (-b + Math.sqrt(discriminant)) / (2 * a);
    secondQuadrat = (-b - Math.sqrt(discriminant)) / (2 * a);
    result = 'x<sub>1</sub> = ' + firstQuadrat +
             '; x<sub>2</sub> = ' + secondQuadrat;
    
  } else if (discriminant == 0) {
    result = 'Quadrat' + ' ' -b / (2 * a);
  }
  
  return result;
};

function writeResult() {
  coefficientA = Number(document.getElementById('coefficientA').value);
  coefficientB = Number(document.getElementById('coefficientB').value);
  coefficientC = Number(document.getElementById('coefficientC').value);
  
  quadraticEquation(coefficientA, coefficientB, coefficientC);
  document.getElementById('discriminant').innerHTML =
      'Discriminant = ' + discriminant + '.';
  document.getElementById('result').innerHTML = 'Result: ' + result;
};
*/