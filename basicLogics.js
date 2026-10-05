function averageOfThree() {
    let a = Number(document.getElementById("average1").value);
    let b = Number(document.getElementById("average2").value);
    let c = Number(document.getElementById("average3").value);
    let average = (a + b + c) / 3;
    document.getElementById("averageResult").innerText =
        "Average = " + average;
}

function averageOfThreeDOM() {
    let a = Number(document.getElementById("domAverage1").value);
    let b = Number(document.getElementById("domAverage2").value);
    let c = Number(document.getElementById("domAverage3").value);
    let average = (a + b + c) / 3;
    document.getElementById("domAverageResult").innerText =
        "Average = " + average;
}

function sumNatural() {
    let n = Number(document.getElementById("sumN").value);
    let sum = n * (n + 1) / 2;
    document.getElementById("sumResult").innerText =
        "Sum = " + sum;
}

function averageNatural() {
    let n = Number(document.getElementById("averageN").value);
    let average = (n + 1) / 2;
    document.getElementById("averageNaturalResult").innerText =
        "Average = " + average;
}

function profitPercentage() {
    let cp = Number(document.getElementById("costPrice").value);
    let sp = Number(document.getElementById("sellingPrice").value);
    let profit = sp - cp;
    let percentage = (profit / cp) * 100;
    document.getElementById("profitResult").innerText =
        "Profit Percentage = " + percentage + "%";
}

function simpleInterest() {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let si = (p * r * t) / 100;
    document.getElementById("interestResult").innerText =
        "Simple Interest = " + si;
}

function missingAngle() {
    let a = Number(document.getElementById("angle1").value);
    let b = Number(document.getElementById("angle2").value);
    let missing = 180 - a - b;
    document.getElementById("angleResult").innerText =
        "Missing Angle = " + missing + "°";
}

function lastDigit() {
    let n = Number(document.getElementById("lastDigitNumber").value);
    let digit = n % 10;
    document.getElementById("lastDigitResult").innerText =
        "Last Digit = " + digit;
}

function removeLastDigit() {
    let n = Number(document.getElementById("removeDigitNumber").value);
    let result = Math.floor(n / 10);
    document.getElementById("removeDigitResult").innerText =
        "After Removing Last Digit = " + result;
}

function firstDigitThree() {
    let n = Number(document.getElementById("threeDigitNumber").value);
    let digit = Math.floor(n / 100);
    document.getElementById("threeDigitResult").innerText =
        "First Digit = " + digit;
}

function firstDigitFive() {
    let n = Number(document.getElementById("fiveDigitNumber").value);
    let digit = Math.floor(n / 10000);
    document.getElementById("fiveDigitResult").innerText =
        "First Digit = " + digit;
}

function celsiusToFahrenheit() {
    let c = Number(document.getElementById("celsius").value);
    let f = (c * 9 / 5) + 32;
    document.getElementById("celsiusResult").innerText =
        "Fahrenheit = " + f;
}

function fahrenheitToCelsius() {
    let f = Number(document.getElementById("fahrenheit").value);
    let c = (f - 32) * 5 / 9;
    document.getElementById("fahrenheitResult").innerText =
        "Celsius = " + c;
}

function grossSalary() {
    let basic = Number(document.getElementById("basicSalary").value);
    let hra = Number(document.getElementById("hra").value);
    let da = Number(document.getElementById("da").value);
    let gross = basic + hra + da;
    document.getElementById("salaryResult").innerText =
        "Gross Salary = " + gross;
}

function swapUsingThird() {
    let a = Number(document.getElementById("swapA").value);
    let b = Number(document.getElementById("swapB").value);
    let temp = a;
    a = b;
    b = temp;
    document.getElementById("swapResult").innerText =
        "After Swap: A = " + a + ", B = " + b;
}

function swapWithoutThird() {
    let a = Number(document.getElementById("swapX").value);
    let b = Number(document.getElementById("swapY").value);
    a = a + b;
    b = a - b;
    a = a - b;
    document.getElementById("swapWithoutResult").innerText =
        "After Swap: X = " + a + ", Y = " + b;
}

