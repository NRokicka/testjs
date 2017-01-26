
function equationDescr(a,b,c) {
var d, e, x1, x2, result;
d=b*b-4*a*c;
e=Math.sqrt(d);
if (a==0) {
 result='a can not equal 0';  
}
else {
if (d>0) {
x1=(-b+e)/(2*a);
x2=(-b-e)/(2*a);
result="x1="+x1+", x2="+x2;
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

alert(equationDescr(8,5,-60));
