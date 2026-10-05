//conditional statements task
//if — 6 Examples

//1.Positive Number

let n=10
if(n>0){
    console.log('positive');
}
console.log('program ended')

function checkpositive(){
        let n=parseInt(document.getElementById('num').value)
        document.getElementById('res').value=' '

    if(n>0){
        document.getElementById('res').value='positive number'
    }
     
}


//2.Eligible to Vote
// let age=15
// if(age>18){
//     console.log('Eligible to vote');  
// }
// console.log('program ended')


// function eligibleornot(){
//         let age=parseInt(document.getElementById('age').value)
//         document.getElementById('res').value=' '

//     if(age>18){
//         document.getElementById('res').value='Eligible to vote'
//     }
// }


//3.Temperature Warning
// let temp=50
// if(temp>40){
//     console.log('High temperature')
// }
// console.log('program ended')


// function tempwarning(){
//         let temp=parseInt(document.getElementById('temp').value)
//         document.getElementById('res').value=' '

//     if(temp>40){
//         document.getElementById('res').value='High Temperature'
//     }
    
// }


//4.Shopping Discount
// let am=6000
// if(am>5000){
//     console.log('You are eligible for discount')
// }
// console.log('program ended')

// function shoppingdiscount(){
//         let am=parseInt(document.getElementById('amount').value)
//         document.getElementById('res').value=' '

//     if(am>5000){
//         document.getElementById('res').value='You are eligible for discount'
//     }
    
// }

//5.Login Security Check
// let username='admin'
// let password='1234'
// if(username==='admin' && password==='1234'){
//     console.log('Login Successful')
// }
// console.log('program ended')

//6.Employee Bonus
// let salary=45000
// let exper=6
// if(salary<50000 && exper>5){
//     console.log('Eligible for bonus')
// }
// console.log('program ended')

//🔹 if...else — 6 Examples

//1.Even or Odd
// let n=5
// if(n%2==0){
//     console.log('Even');
    
// }
// else{
//     console.log('odd')
// }

//2. Pass or Fail
// let m=50
// if(m>=40){
//     console.log('Pass')
// }
// else{
//     console.log('Fail')
// }

//3.Profit or Loss
// let cp=7000
// let sp=6000
// if(sp>cp){
//     console.log('Profit');
// }
// else{
//     console.log('Loss')
// }

//4.Driving License Eligibility
// let age=19
// if(age>=18){
//     console.log('Eligible for license'); 
// }
// else{
//     console.log('Not eligible')
// }

//5.ATM Withdrawal
// let am=5000
// let witham=6000
// if(witham<=am){
//     console.log('Withdrawal Successful')
// }
// else{
//     console.log('Insufficient balance')
// }

//6.Electricity Bill Check
// let am=5000
// if(am<=1000){
//     console.log('Normal bill');
    
// }
// else{
//     console.log('High bill')
// }

//task
//1.check given number is a 3-digit number or not 
// function threedigit(){
//     let n=parseInt(document.getElementById('num').value)
// if(n>=100 && n<=999){
//     document.getElementById('res').value='given number is 3-digit number'
// }
// else{
//     document.getElementById('res').value='given number not a 3-digit number'
// }
// }

//2.Check whether a given number is divisible by both 3 and 5 or not.
// function divisible(){
//     let n=parseInt(document.getElementById('num').value)
//     if(n%3==0 && n%5==0){
//         document.getElementById('res').value='divisible by both 3 and 5'
//     }
//     else{
//         document.getElementById('res').value='not divisible by both 3 and 5'
//     }
// }

//3.Check whether a given triangle is a valid triangle or not.
     //#hint :The sum of any two sides should be greater than the third side.
//   function trianglevalidornot(){
//     let a=parseInt(document.getElementById('valuea').value)
//     let b=parseInt(document.getElementById('valueb').value)
//     let c=parseInt(document.getElementById('valuec').value)
//     if((a+b)>c && (b+c)>a && (c+a)>b){
//        document.getElementById('res').value='valid triangle' 
//     }
//     else{
//         document.getElementById('res').value='invalid triangle'
//     }
//   }




//🔹 if...else if — 6 Examples
//1.Grade Calculator
// let m=50;
// if(m>=90 && m<=100){
//     console.log('A garde');
    
// }
// else if(m>=75 && m<=89){
//     console.log('B garde');
// }
// else if(m>=60 && m<=74){
//     console.log('C garde');
// }
// else if(m>=40 && m<=59){
//     console.log('D garde');
// }
// else if(m<40){
//     console.log('Fail');
// }

//2.Electricity Usage
// let units=400
// if(units>=0 && units<=100){
//     console.log('Low usage');   
// }
// else if(units>=101 && units<=300){
//     console.log('Medium usage')
// }
// else if(units>=301 && units<=500){
//     console.log('High  usage')

// }
// else if(units>500){
//     console.log('very high usage')
// }

//3.Movie Ticket Price
// let age=30
// if(age<5){
//     console.log('Free ticket'); 
// }
// else if(age>=5 && age<=17){
//     console.log('Ticket price:₹100 ')
// }
// else if(age>=18 && age<=59){
//     console.log('Ticket price:₹200 ')
// }
// else if(age>60){
//     console.log('Ticket price:₹120 ')
// }


// if(n==1){
//     console.log('N is 1')
// }
// else if(n==2){
//     console.log('N is 2')

// }
// else if(n==3){
//     console.log('N is 3')
// }
// else{
//     console.log('N is not 1,2,3')
// }


//#if-else if-else -task
//1.Check the type of triangle based on its sides.
       //Equilateral, Isosceles, or Scalene.
//    function typeoftriangle(){
//      let a=parseInt(document.getElementById('valuea').value)
//     let b=parseInt(document.getElementById('valueb').value)
//     let c=parseInt(document.getElementById('valuec').value)
//     if(a===b && b===c){
//         document.getElementById('res').value='Equilateral triangle'
//     }
//     else if((a===b && b!=c) || (b===c && c!=a) || (c=== a && a!=b)){
//         document.getElementById('res').value='Isosceles triangle'
//     }
//     else{
//         document.getElementById('res').value='Scalene triangle'
//     }
//    }

// 2.Calculate the electricity bill based on units consumed.
//    # 0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.

// function calculatebill(){
//     let unit=parseInt(document.getElementById('units').value)
// if(unit>0 && unit<=100){
//     document.getElementById('res').value=unit*2 
// }
// else if(unit>=101 && unit<=200){
//     document.getElementById('res').value=unit*3
// }
// else if(unit>=201 && unit<=300){
//     document.getElementById('res').value=unit*5
// }
// else if(unit>300){
//     document.getElementById('res').value=unit*7
// }
// }

//
// 3.Display the age category.
//    # Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
// function category(){
//     let age=parseFloat(document.getElementById('age').value)
//     if(age<13){
//         document.getElementById('res').value="Child"
//     }
//     else if(age>=13 && age<=19){
//         document.getElementById('res').value='Teenager'
//     }
//     else if(age>=20 && age<=59){
//         document.getElementById('res').value='Adult'
//     }
//     else if(age>=60){
//         document.getElementById('res').value='Senior citizen'
//     }
// }


// #6.Check whether a given year is a Leap Year or not.
//     # Condition 1: year % 400 == 0
//     # Condition 2: year % 4 == 0 and year % 100 != 0
// function checkleap(){
//     let year=parseInt(document.getElementById('year').value)
//     if(year%400===0){
//         document.getElementById('res').value='Leap Year'
//     }
//     else if(year%4 === 0 && year %100!=0){
//         document.getElementById('res').value='Leap Year'
//     }
//     else{
//         document.getElementById('res').value=' not Leap Year'
//     }
// }


//multiple if
// if(true){
//     console.log('1 condition ')
// }
// if(true){
//     console.log('2 condition ')
// }
// if(true){
//     console.log('3 condition ')
// }

//nested if
// if(true){
//     console.log('outer condition-true:outer if is executed')
//     if(true){
//           console.log('inner condition-true:inner if is executed')
//     }
//     else{
//         console.log('inner condition-flase:inner else is executed')
//     }
// }
// else{
//     console.log('outer condition-false:outer else is executed')
// }

// check the given num is even or odd if it positive

// let n=5;
// if(n>0){
//     console.log(`${n} is positive`)
//     if(n%2===0){
//        console.log(`${n} is even`) 
//     }
//     else{
//         console.log(`${n} is odd`)
//     }
// }
// else{
//     console.log(`${n} is negative`)
// }
//6-examples on nested-if
// #1.Check whether a person is eligible to donate blood.
//     #Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
//  function blooddonate(){
//     let age=parseInt(document.getElementById('age').value)
//     if(age>18 && age <60){
//        let weight=parseInt(document.getElementById('weight').value)
//        if(weight>50){
//          document.getElementById('res').value='eligible to donate'
//        }
//        else{
//          document.getElementById('res').value='not eligible to donate'
//        }

//     }
//     else{
//         document.getElementById('res').value=' not eligible to donate'
//     }
//  }
//2.Display the grade based on average only if the student has passed in all 4 subjects.
// function calgrade(){
//     let m=parseInt(document.getElementById('m').value)
// let p=parseInt(document.getElementById('p').value)
// let b=parseInt(document.getElementById('b').value)
// let e=parseInt(document.getElementById('e').value)
// if(m>35 && p>35 && b>35 && e>35){
//     let avg=(m+p+b+e)/4
//     if(avg>90){
//         document.getElementById('res').value='Garde=S'}
//     else if(avg>=81 && avg<=90){
//         document.getElementById('res').value='Garde=A'}
//     else if(avg>=71 && avg<=80){
//          document.getElementById('res').value='Garde=B'
//         }
//     else if(avg>=61 && avg<=70){
//         document.getElementById('res').value='Garde=C'
//     }
//     else if(avg>=51 && avg<=60){
//          document.getElementById('res').value='Garde=D'
//     }
//     else if(avg>=41 && avg<=50){
//         document.getElementById('res').value='Garde=E'
//     }
//     else{
//          document.getElementById('res').value='Fail'
//     }
// }
        
// else{
//     document.getElementById('res').value='Fail'
// }
// }

//Check whether a student is eligible for a scholarship.
    //#Age should be above 18. If eligible by age, score should be above 86.
//      function scholarship(){
//     let age=parseInt(document.getElementById('age').value)
//     if(age>18){
//        let score=parseInt(document.getElementById('score').value)
//        if(score>86){
//          document.getElementById('res').value='eligible for scholarship'
//        }
//        else{
//          document.getElementById('res').value='not eligible for scholarship'
//        }

//     }
//     else{
//         document.getElementById('res').value=' not eligible for scholarship'
//     }
//  }



 //switch case example
// switch(expression){
//     case value:
//         //statement or logic
//     break;
//     case value:
//         //statement or logic
//     break;
//     case value:
//           //statement or logic
//     break;
//     default:
//         //default case
// }


//example-1
// let n=2
// switch(n){
//     case 1:
//         console.log('case 1 executed');
//     break;
//     case 2:
//         console.log('case 2 executed');
//     break;
//     case 3:
//         console.log('case 3 executed');
//     break;
//     default:
//         console.log('default block executed');
// }


// let n='10'
// switch(n){
//     case 10:     //  '10'===10
//         console.log('case 1')
//     break;
//     case '10':        //'10'==='10'
//         console.log('case 2')
//     break;
//     default:
//         console.log('default block executed');

// }

//example-2
// let n1=10;
// let n2=5;
// let op='/';
// switch(op){
//     case '+':
//         console.log(`sum:${n1+n2}`)
//     break;
//     case '-':
//         console.log(`sub:${n1-n2}`)
//     break;
//     case '*':
//         console.log(`mul:${n1*n2}`)
//     break;
//     case '/':
//         console.log(`div:${n1/n2}`)
//     break;
//     case '%':
//         console.log(`rem:${n1%n2}`)
//     break;

//     default:
//         console.log('ivalid operator')
// }


// function operations(){
//     let n1=parseInt(document.getElementById('n1').value);
// let n2=parseInt(document.getElementById('n2').value);
// let op=document.getElementById('op').value;
// switch(op){
//     case '+':
//         document.getElementById('res').value=`sum:${n1+n2}`
//     break;
//     case '-':
//         document.getElementById('res').value=`sub:${n1-n2}`
//     break;
//     case '*':
//         document.getElementById('res').value=`mul:${n1*n2}`
//     break;
//     case '/':
//        document.getElementById('res').value=`div:${n1/n2}`
//     break;
//     case '%':
//       document.getElementById('res').value=`mod:${n1%n2}`
//     break;

//     default:
//         console.log('invalid operator')
// }
// }



//fallthrough example
// let n=2
// switch(n){
//     case 1:
//         console.log('case 1 executed');
//     case 2:
//         console.log('case 2 executed');
//     case 3:
//         console.log('case 3 executed');
//     case 4:
//         console.log('case 4 executed');
//     default:
//         console.log('default block executed');
// }