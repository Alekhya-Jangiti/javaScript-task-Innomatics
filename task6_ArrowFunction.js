// -----------------------------------without input & without return---------------------------------------------------------

// Logic 1: Print numbers divisible by 7

let divisibleBySeven = () =>{
    for(let i=1; i<=70; i++){
        if(i%7==0){
            console.log(i)
        }
    }
}
divisibleBySeven()

// Logic 2: Print squares from 1 to 10

let printSquares = () =>{
    for(let i=1; i<=10; i++){
        console.log(`${i} square = ${i*i}`)
    }
}
printSquares()

// Logic 3: Print first 10 multiples of 3

let multiplesOf3=()=>{
    console.log(`Multiples of three in given range :`)
    for(let i=1;i<=10;i++){
        console.log(3*i)
    }
}
multiplesOf3()

// -----------------------------------with input & without return---------------------------------------------------------

// Logic 1: Calculate simple interest

let simpleInterest = (p,r,t) =>{
    let si=(p*r*t)/100
    console.log(`Principal = ${p}`)
    console.log(`Rate = ${r}`)
    console.log(`Time = ${t}`)
    console.log(`Simple Interest = ${si}`)
}
simpleInterest(10000,5,2)

// Logic 2: Calculate discount amount

let calculateDiscount = (price,discount) =>{
    let discountAmount=(price*discount)/100
    let finalPrice=price-discountAmount
    console.log(`Discount Amount = ${discountAmount}`)
    console.log(`Final Price = ${finalPrice}`)
}
calculateDiscount(5000,20)

// Logic 3: Check whether a character is vowel or consonant

let vowelOrConsonant = (ch) =>{
    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        console.log(`${ch} is Vowel`)
    }
    else{
        console.log(`${ch} is Consonant`)
    }
}
vowelOrConsonant('e')

// -----------------------------------without input & with return---------------------------------------------------------

// Logic 1: Find count of digits greater than 5

let countGreaterFive = () =>{
    let n=7864593
    let count=0
    while(n>0){
        let digit=n%10
        if(digit>5){
            count++
        }
        n=parseInt(n/10)
    }
    return count
}
let res=countGreaterFive()
console.log(`Digits Greater than 5 = ${res}`)

// Logic 2: Check whether a number is a palindrome year

let palindromeYear = () =>{
    let n=2002
    let temp=n
    let rev=0
    while(n>0){
        let digit=n%10
        rev=rev*10+digit
        n=parseInt(n/10)
    }
    if(temp==rev){
        return `${temp} is a Palindrome Year`
    }
    else{
        return `${temp} is not a Palindrome Year`
    }
}
let res1=palindromeYear()
console.log(res1)

// Logic 3: Difference between largest and smallest digit

let digitDifference = () =>{
    let n=583927
    let largest=0
    let smallest=9
    while(n>0){
        let digit=n%10
        if(digit>largest){
            largest=digit
        }
        if(digit<smallest){
            smallest=digit
        }
        n=parseInt(n/10)
    }
    return largest-smallest
}
let res2=digitDifference()
console.log(`Difference = ${res2}`)

// -----------------------------------with input & with return---------------------------------------------------------

// Logic 1: Calculate area of rectangle

let rectangleArea = (length,width) =>{
    let area=length*width
    return area
}
let res3=rectangleArea(10,5)
console.log(`Area of Rectangle = ${res3}`)

// Logic 2: Convert kilometers to meters

let kilometerToMeter = (km) =>{
    let meter=km*1000
    return meter
}
let res4=kilometerToMeter(5)
console.log(`Meters = ${res4}`)

// Logic 3: Find remainder of two numbers

let findRemainder = (a,b) =>{
    let remainder=a%b
    return remainder
}
let res5=findRemainder(25,4)
console.log(`Remainder = ${res5}`)

