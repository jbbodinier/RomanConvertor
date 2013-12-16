// JavaScript Document
var  RE = new RegExp("[^\-0-9IVXLCDMivxlcdm]+", "g");
var aRE = new RegExp("^\-?[0-9]+$");
var rRE = new RegExp("^[IVXLCDMivxlcdm]+$");

function calc(){
var rVal = "";
var aVal = "";
var cVal = document.form2.result1.value.replace(RE, "");
if (cVal.length == 0){
} else if (cVal.match(aRE)){
var aInt = parseInt(cVal);
if ("" + aInt == "NaN"){
alert("Enter Valid Number");
} else if (aInt <= 0){
alert("Enter Valid Number");
} else  if (aInt > 100000){
alert("Enter Valid Number");
} else {
aVal = cVal;
rVal = Aplh1(aVal);	
}
} else if (cVal.match(rRE)){
var a = Alph(cVal);
if (a == -1){
alert("Enter Valid Number");
} else {
aVal = a;
rVal = Aplh1(a);
}
} else {
alert("Enter Valid Number");
}
document.form2.result1.value = cVal;
document.form2.num.value = aVal;
document.form2.rom.value = rVal;
document.form2.result1.focus();
}

function conv (ans){
var field = document.form2.result1;
field.value = ans;
calc();

}

function Alph(s){
var c;
var c1;
var v;
var v1;
var num = 0;
for(var i=0; i<s.length; i++){
c = s.charAt(i);
v = getVal(c);
if (v == -1){
return -1;
}
if (i+1 < s.length){
c1 = s.charAt(i+1);
} else {
c1 = '!';
}
v1 = getVal(c1);
if (v1>v){
num += v1-v;
i++;
} else {
num += v;
}
}
if (num <= 100000){
return (num);
} else {
return (-1);
}
}

function getVal(c){
var result1 = -1;
switch (c){

case 'c':{
result1 = 100000;
} break;
case 'l':{
result1 = 50000;
} break;
case 'x':{
result1 = 10000;
} break;
case 'v':{
result1 = 5000;
} break;
case 'i':{
result1 = 1000;
} break;
case 'M':{
result1 = 1000;
} break;
case 'D':{
result1 = 500;
} break;
case 'C':{
result1 = 100;
} break;
case 'L':{
result1 = 50;
} break;
case 'X':{
result1 = 10;
} break;
case 'V':{
result1 = 5;
} break;
case 'I':{
result1 = 1;
} break;
}
return result1;
}

function Aplh1(i){
var rom = "";
var num = i;

while (num - 100000 >= 0){
rom += "c";
num -= 100000;
}
while (num - 90000 >= 0){
rom += "xc";
num -= 90000;
}
while (num - 50000 >= 0){
rom += "l";
num -= 50000;
}
while (num - 40000 >= 0){
rom += "xl";
num -= 40000;
}
while (num - 10000 >= 0){
rom += "x";
num -= 10000;
}
while (num - 9000 >= 0){
rom += "Mx";
num -= 9000;
}
while (num - 5000 >= 0){
rom += "v";
num -= 5000;
}
while (num - 4000 >= 0){
rom += "Mv";
num -= 4000;
}
while (num - 1000 >= 0){
rom += "M";
num -= 1000;
}
while (num - 900 >= 0){
rom += "CM";
num -= 900;
}
while (num - 500 >= 0){
rom += "D";
num -= 500;
}
while (num - 400 >= 0){
rom += "CD";
num -= 400;
}
while (num - 100 >= 0){
rom += "C";
num -= 100;
}
while (num - 90 >= 0){
rom += "XC";
num -= 90;
}
while (num - 50 >= 0){
rom += "L";
num -= 50;
}
while (num - 40 >= 0){
rom += "XL";
num -= 40;
}
while (num - 10 >= 0){
rom += "X";
num -= 10;
}
while (num - 9 >= 0){
rom += "IX";
num -= 9;
}
while (num - 5 >= 0){
rom += "V";
num -= 5;
}
while (num - 4 >= 0){
rom += "IV";
num -= 4;
}
while (num - 1 >= 0){
rom += "I";
num -= 1;
}
return (rom);
}
