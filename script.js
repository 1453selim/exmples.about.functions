// 1-less than 100
function lessThan100(a, b) {
	if((a+b<100)) {
		return true;
	}else {
		return false;
	}
	
}
console.log(lessThan100(87,15)) //false
// 1-find max number 
function findMax (num1,num2,num3) {
    return Math.max(num1,num2,num3);
    
}
console.log(findMax(18,3,24));//24
// 2--Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.
  

let number =prompt("pozitif number giriniz")
function evensAndOdds () {
 if((number%2)===0) {
   return "even";
 }else {
   return "odd";
 }
}
console.log(evensAndOdds(8));//odd

// 3--Write a function which generates a randomUserIp. Ex: 168.127.25.2

function userIp () {
  return (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
}
console.log(userIp());//81.65.191.223


// 4---Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
function fullName (name1,name2) {

  return `${name1} ${name2} ${(name1+name2).length} character`;
}
console.log(fullName("selim","cihan")) //selim cihan 10 character

// 5--Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.
var yourName1 = prompt("write you name ");
var yourName2 = prompt("write you name ");
var yourName3 = prompt("write you name ");
function gretings (name) {
  return `${yourName1}\' den sevgilerle ,${yourName2}\' den sevgilerle,${yourName3}\' den sevgilerle`
}
console.log(gretings());//ahmet' den sevgilerle ,selim' den sevgilerle,kerim' den sevgilerle


