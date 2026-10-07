// -----------------------------------without input & without return---------------------------------------------------------

// Logic 1: Print odd numbers from 1 to 20

let printOdd = function(){
    console.log(`Odd numbers from 1 to 20 are :`)
    for(let i=1; i<=20; i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}
printOdd()

// Logic 2: Print multiplication table of 8

let table = function(){
    let n=8
    for(let i=1; i<=10; i++){
        console.log(`${n} x ${i} = ${n*i}`)
    }
}
table()

// Logic 3: Print numbers from 1 to 10 with their cubes

let printCubes = function(){
    for(let i=1; i<=10; i++){
        console.log(`${i} cube = ${i**3}`)
    }
}
printCubes()

// -----------------------------------with input & without return---------------------------------------------------------

// Logic 1: Calculate area of circle

let circleArea = function(radius){
    let area = 3.14 * radius * radius
    console.log(`Area of Circle = ${area}`)
}
circleArea(5)

// Logic 2: Calculate total and average of 3 marks

let studentMarks = function(m1,m2,m3){
    let total = m1 + m2 + m3
    let average = total / 3
    console.log(`Total = ${total}`)
    console.log(`Average = ${average}`)
}
studentMarks(80,90,70)

// Logic 3: Check whether a number is divisible by 5 and 11

let divisible = function(n){
    if(n%5==0 && n%11==0){
        console.log(`${n} is divisible by 5 and 11`)
    }
    else{
        console.log(`${n} is not divisible by 5 and 11`)
    }
}
divisible(55)

// -----------------------------------without input & with return---------------------------------------------------------

// Logic 1: Find sum of even digits

let sumOfEven=function(){
    let n=58324
    let sum=0
    while(n > 0){
        let digit = n%10
        if(digit % 2==0){
            sum=sum+digit
        }
        n=parseInt(n / 10)
    }
    return sum
}
let res=sumOfEven()
console.log(`Sum of Even Digits = ${res}`)

// Logic 2: Find the sum of first 10 natural numbers

let naturalSum = function(){
    let sum=0
    for(let i=1; i<=10; i++){
        sum=sum+i
    }
    return sum
}
let res1=naturalSum()
console.log(`Sum of First 10 Natural Numbers = ${res1}`)

// Logic 3: Find number of zeros in a number

let countZeros = function(){
    let n=50203040
    let count=0
    while(n>0){
        let digit=n%10
        if(digit==0){
            count++
        }
        n=parseInt(n/10)
    }
    return count
}
let res2=countZeros()
console.log(`Number of Zeros = ${res2}`)

// -----------------------------------with input & with return---------------------------------------------------------

// Logic 1: Find the middle value among three numbers

let middleNumber = function(a,b,c){
    if((a>b && a<c) || (a<b && a>c)){
        return a
    }
    else if((b>a && b<c) || (b<a && b>c)){
        return b
    }
    else{
        return c
    }
}
let res3=middleNumber(10,25,18)
console.log(`Middle Number = ${res3}`)

// Logic 2: Check whether a number is a multiple of another number

let checkMultiple = function(a,b){
    if(a%b==0){
        return `${a} is a Multiple of ${b}`
    }
    else{
        return `${a} is not a Multiple of ${b}`
    }
}
let res4=checkMultiple(24,6)
console.log(res4)

// Logic 3: Calculate age from birth year

let calculateAge = function(birthYear,currentYear){
    let age=currentYear-birthYear
    return age
}
let res5=calculateAge(2004,2026)
console.log(`Age = ${res5}`)