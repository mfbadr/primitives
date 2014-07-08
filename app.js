//this is a ingle line comment
//

/* this
 * is 
 * a
 * multi line
 * comment
 * */

var a = 3;
var b = 2;
var c = a + b;

console.log('this is a string'); 
console.log(a); 
console.log(b); 
console.log(c); 

var first = "sally";
var last = "smith";

var fullName = first + " " + last ;

console.log(first)
console.log(last)
console.log(fullName)
  
var d = Math.pow(2,8)

console.log('2^8 =', d);

a = 3;
b = 4;
var c = 5;
var d =6;
var e = Math.pow(( (a+b)/(b-c)) * ((b-a)/(c-d)),(b+a));
console.log(e);

/* Branching with if/else statements */

var age = 20;
if(age >= 21){
  console.log("You are legal to drink")

}else{
  console.log("You are not legal to drink")
  }

// this is the maximum allowed rating you can see

if(age >= 0 && age <= 5){
  console.log("You can see a G rated movie")
}else if(age < 13){
  console.log("PG Rated")
}else if(age <= 13){
  console.log("PG-13 Rated")
}else if(age === 17){
  console.log("R Rated")
}else if(age === 18){
  console.log("NC-17")
}else{console.log("X rated")}

var color = 'blue';
switch(color){
  case 'blue':
    console.log('i see blue');
    break;
  case 'red':
    console.log('i see red');
    break;
  case 'orange':
    console.log('i see orange');
    break;
  case 'green':
    console.log('i see green');
    break;
  default:
    console.log('that is not a valid color')}

a = 1

while(a < 10){
  console.log('a is looping...', a);
//  a++;
// a = a + 1
 a += 2;
}

for(var i = 0; i < 10; i++){
  console.log('1 ===', i)
}
