// console.log('pamplet')
// console.log('pamplet')
// console.log('pamplet')

// for (i=1;i<=3;i++){
//     console.log('pamplet')
// }

//11 12 13 14 15
// for(i=11;i<=15;i=i+1){
//     console.log(i);
    
// }

//6 9 12 15
// for(i=6;i<=15;i=i+3){
//     console.log(i);
    
// }
// 9 14 19 24 29
// for(i=9;i<=29;i=i+5){
//     console.log(i);
// }

//5 4 3 2 1

// for(i=5;i>=1;i=i-1){
//     console.log(i);
// }

//20 19 18 17 16
// for(let i=20;i>=16;i=i-1){
//     console.log(i);
// }

// function series(){
//     let start=document.getElementById('start').value;
// let end=document.getElementById('end').value;
// let output=''
// for(let i=start;i>=end;i=i-1){
//     // document.getElementById('res').value=i
//     output=output+i+' '
// }
// document.write(output)
// }

//14 10 6 2
// for(let i=14;i>=2;i=i-4){
//     console.log(i);
// }


//1 2 3 4 5
//while loop
// let i=1
// while(i<=5){
//     console.log(i);
//     i=i+1
    
// }


//10 20 30 40 50
// let i=10
// while(i<=50)
// {
//     console.log(i);
//     i=i+10
    
// }



//4 7 10 13 16
// let i=4
// while(i<=16)
// {
//     console.log(i);
//     i=i+3
    
// }

// function series(){
// let start=parseInt(document.getElementById('start').value)
// let end=parseInt(document.getElementById('end').value)
// let output=''
// let i=start
// while(i<=end)
// {
//     output=output+i+' '
//     i=i+3
    
// }
// document.write(output)
// }



//10 to 1
// let i=10
// while(i>=1)
// {
//     console.log(i);
//     i=i-1
    
// }

//95 90 85 80..5

// let i=95
// while(i>=5)
// {
//     console.log(i);
//     i=i-5
    
// }

//2 3 4 5 6=30
// let sum=0;
// for(let i=2;i<=6;i=i+1)
// {
//     sum=sum+i
// }
// console.log('sum of above sequence:',sum);

// function sumof(){
//     let start=parseInt(document.getElementById('start').value)
//     let end=parseInt(document.getElementById('end').value)
//     let sum=0
//     let i=start
//     for(let i=start;i<=end;i=i+1)
//     {
//         sum=sum+i
//     }
//     document.write('sum:',sum)
// }


// let i=2
// let sum=0
// while(i<=6){
//     sum=sum+i
//     i=i+1
// }
// console.log('sum of above sequence:',sum);

//print the sum of first n natural 
// let n=4
// let sum=0
// let i=1
// while(i<=n){
//     sum=sum+i
//     i=i+1
// }
// console.log('sum of n natural numbers :',sum);

// function sumofn(){
//     let n=parseInt(document.getElementById('num').value)
// let sum=0
// let i=1
// while(i<=n){
//     sum=sum+i
//     i=i+1
// }
// document.write('sum of n natural numbers :',sum)
// }


//find the factorial of 3
// let n=3
// let fact=1
// let i=1
// while(i<=3){
//     fact=fact*i
//     i=i+1
// }
// console.log(`factorial of ${n} is: ${fact}`);


// function factorial(){
//    let n=parseInt(document.getElementById('num').value)
//    let fact=1
//    let i=1
// while(i<=n){
//     fact=fact*i
//     i=i+1
// }
// document.write(`factorial of ${n} is: ${fact}`)
// }
//nested loops

// for (j=1;j<=5;j++){
//     let output=''
//    for(let i=1;i<=3;i++){
//     output=output+i     //''+1--->'1'
//                         //'1'+2---->'12'
// }
// console.log(output);
// }

//deisplay even numbers in the range 1 to 10
// for(let i=1;i<=10;i++){
//     let n=i
//     if(n%2==0){
//        console.log(n);  
// }
// }

// display the factorial of each number in the sequence 1 to 5
// for(let j=1;j<=5;j++){
//     let n=j
// let fact=1
// for(i=1;i<=n;i++){
//     fact=fact*i
// }
// console.log(`${j} ---> ${fact}`);
// }

//using while loop
// let j=1;
// while(j<=5){
//     let n=j
//     let fact=1
//     let i=1
//     while(i<=n){
//         fact=fact*i
//         i=i+1
//     }
//     console.log(`${j} ---> ${fact}`);
//     j=j+1
// }

//nested loops patterns
//5 4 3 2 1
//5 4 3 2 1
//5 4 3 2 1
//5 4 3 2 1

// for(let j=1;j<=4;j++){
//     output=''
//     for(let i=5;i>=1;i--){
//         output=output+i+' '
//     }
//     console.log(output); 
// }

//  11111
//  22222
//  33333
//  44444
//  55555

// for(let j=1;j<=5;j++){
//     output=''
//     for(let i=1;i<=5;i++){
//          output=output+j+' '
//     }
//     console.log(output); 
// }

//  10101
//  10101
//  10101
//  10101
//  10101

// for(let j=1;j<=5;j++){
//     output=''
//     for(let i=1;i<=5;i++){
//         output=output+(i%2)
//     }
//     console.log(output);
// }

//  1
//  21
//  321
//  4321
//  54321

// for(j=1;j<=5;j++){
//     output=''
//     for(i=j;i>=1;i--){
//         output=output+i
//     }
//     console.log(output);
    
// }

// *
// **
// ***
// ****
// *****

// for(j=1;j<=5;j++){
//     output=''
//     for(i=j;i>=1;i--){
//         output=output+'*'
//     }
//     console.log(output);
    
// }

// 12345
// 1234
// 123
// 12
// 1

// for(let j=5;j>=1;j--){
//     output=''
//     for(let i=1;i<=j;i++){
//           output=output+i
//     }
//      console.log(output);
// }

// *****
// ****
// ***
// **
// *

// for(let j=5;j>=1;j--){
//     output=''
//     for(let i=1;i<=j;i++){
//           output=output+'*'
//     }
//      console.log(output);
// }

//     1
//    12
//   123
//  1234
// 12345

// for(let j=1;j<=5;j++){
//     output=''
//     for(let s=5;s>j;s--){
//          output=output+' '
//     }
//     for(let i=1;i<=j;i++){
//          output=output+i
//     }
//     console.log(output);
// }

//jumping statements
// for(let i=1;i<=10;i++){
//     console.log(i);
//     if(i===5){
//         break;
//     }
// }

// let i=1
// while(i<=5){
//     console.log(i);
//     if(i===3){
//         break;
//     }
//     i=i+1
// }

//logics using break statement
//display first divisible of 5 in the range of 22 to 30
// for(let i=22;i<=30;i++){
//     let n=i
//     if(n%5==0){
//         console.log(n);
//         break; 
//     }
// }

//using while loop
// let i=22
// while(i<=30){
//     let n=i
//     if(n%5==0){
//         console.log(n);
//         break;
//     }
//     i=i+1;
// }

//display the last divisible of 4 in the range of 50 to 59
// console.log('the last divisible of 4 in the range of 50 to 59: ');

// for(let i=59;i>=50;i--){
//     let n=i
//     if(n%4==0){
//         console.log(n);
//         break;
//     }
// }

//display first three numbers in given range
// let start=1
// let end=10
// let count=0
// for(let i=start;i<=end;i++){
//     console.log(i);
//     count=count+1
//     if(count==3){
//         break;
//     } 
// }

//display the last two even numbers in the range of 13 to 25
// let start=13
// let end=25
// let count=0
// console.log('last two even numbers in the range of 13 to 25:');
// for(i=end;i>=start;i--){
//     if(i%2==0){
//         count=count+1
//         console.log(i);
//     }
//     if(count==2){
//         break;
//     }
// }

//continue
// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
    
// }

//10 to 20 skip 13
// for(let i=10;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//     console.log(i)
// }

//skip the unlucky year in the range of 2000 to 2026
// let unlucky
// for(let i=2000;i<=2026;i++){
//     if(i===unlucky){
//         continue;
//     }
//     console.log(i)
// }

// let i=1
// while(i<=5){
//     if(i==3){
//         i=i+1
//         continue
//     }
//     console.log(i);
//     i=i+1
// }

// let i=2000
// let unlucky=2021
// while(i<=2026){
//     if(i==unlucky){
//         i=i+1
//         continue;
//     }
//     console.log(i); 
//     i=i+1
// }

//do while
// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10)
 
//10  to 5

// let i=10
// do{
//     console.log(i);
//     i--;
// }
// while(i>=5)



// let ans;
// do{
//     let n=parseInt(prompt('Enter the number:'))
//     if(n%2===0){
//         alert('Even')
//     }
//     else{
//         alert('not a even')
//     }
//    ans=prompt('Do you want to check other number(y/n):')
// }
// while(ans==='y')