//--------------------------------------------without input & without return-------------------------------------------

// Logic 1: Factorial

// function factorial(){
//     let n= 5
//     let fact=1
//     for (let i=n;i>=1;i--){
//         fact= fact*i
//     }
//     console.log(`Factorial of ${n}= ${fact}`)
// }
// factorial()

// Logic 2 : Count the digits

// function countDigits() {
//     let n = 5832176;
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n =parseInt(n/10)
//     }
//     console.log("Number of Digits =", count);
// }
// countDigits();

//--------------------------------------------with input & without return-------------------------------------------

// Logic 1 : Leap Year

// function checkLeapYear(year) {
//     if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
//         console.log(`${year} is a Leap Year`);
//     }
//     else {
//         console.log(`${year} is not a Leap Year`);
//     }
// }
// checkLeapYear(2024);

// Logic 2 : Convert Celsius to Fahrenheit

// function convertTemperature(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32;
//     console.log(`Celsius = ${celsius}`);
//     console.log(`Fahrenheit = ${fahrenheit}`);
// }
// convertTemperature(30);

//--------------------------------------------without input & with return-------------------------------------------

// Logic 1: Sum of Digits

// function digitSum(){
//     let n= 58322
//     let sum =0
//     while (n>0){
//         let digit = n%10
//         sum=sum+digit
//     n= parseInt(n/10)
//     }
//     return sum
// }
// res=digitSum()
// console.log(`Sum od Digits : ${res}`)

// Logic 2: Palindrome

// function palindrome(){
//     let n=1221
//     let temp=n
//     rev=0
//     while(n > 0){
//         digit = n % 10
//         rev=rev * 10 +digit
//     n=parseInt(n/10)
//     }
//     if (temp==rev){
//         return `${temp} is Palindrome`
//     }
//     else{
//         return `${temp} is Not a Palindrome`
//     }
// }
// console.log(palindrome())

//--------------------------------------------with input & with return-------------------------------------------

// Logic 1: Prime Number

// function checkPrime(n){
//     count=0
//     for(let i=0; i<=n; i++){
//         if(n% i==0){
//             count++
//         }
//     }
//     if(count==2){
//         return `${n} is Prime Number`
//     }
//     else{
//         return `${n} is not a Prime Number`
//     }
// }
// let res=checkPrime(17)
// console.log(res)

// Logic 2: Armstrong Number

// function armstrong(n){
//     let temp=n
//     let sum=0
//     while( n> 0){
//         let digit= n%10
//         sum=sum + digit ** 3
//         n=parseInt(n/10)
//     }
//     if(temp==sum){
//         return `${temp} is Armstrong`
//     }
//     else{
//         return `${temp} is not an Armstrong`
//     }
// }
// let res=armstrong(153)
// console.log(res)