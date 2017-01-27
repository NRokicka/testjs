//document.write('Hello World');

//var hello = 'Hello World';
//alert(hello);
//console.log(hello);

//var userName = prompt('Enter your name');
//var greet = 'Hello, '+ userName;
//document.write('greet');

var a=1;
var b=-26;
var c=120;

function equationDescr(a,b,c) {
var d, x1, x2, result;
d=b*b-4*a*c;

if (a==0) {
 result='a can not equal 0';  
}
else {
if (d>0) {
x1=(-b+Math.sqrt(d))/(2*a);
x2=(-b-Math.sqrt(d))/(2*a);
result='x1='+x1+', x2='+x2;
}
else if (d==0) {
x1= -b/(2*a);
result="x="+x1;
}
else if(d<0) {
result='no result';
}
}
return result;
}

document.write(equationDescr(a,b,c));
