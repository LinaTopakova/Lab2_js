//№1
console.log("№1");

function subtraction1(a,b){
    console.log(a-b);
}

function subtraction2(a,b){
    return a-b;
}

let a = 13;
let b = 7;
subtraction1(a,b);
console.log(subtraction2(a,b));

//№2
console.log("№2");

function checkAge(age){
    if(age > 0) {
        if(age < 18) {
            console.log("Привет, малыш!");
        }
        else {
            console.log("Здравствуйте, юноша!");
        }
    }
    else {
        console.log("Error");
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите возраст: ', (answer) => {
    let age = Number(answer);

    if (!isNaN(age)) {
        checkAge(age);
    } else {
        console.log("Это не число!");
    }
    rl.close();
});

//№3
console.log("№3");

function maxNumber(num1, num2, num3){
    if(num1 >= num2 && num1 >= 3){
        return num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2;
    }
    else{
        return num3;
    }
}
console.log(maxNumber(1,5,3));

//№4
console.log("№4");

let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная"; //Внутри функции создается локальная переменная, которая перекрывает глобальную переменную с тем же именем
    console.log(variable);
}
f();
console.log(variable); // вне функции, используется глобальная переменная, так как локальная переменная, объявленная внутри функции, недоступна за ее пределами

//№5
console.log("№5");

function max(a,b){
    if(a > b){
        return a;
    }
    return b;
}

function calculation(x,y,z){
    let u = (max(x,y)+max(x+y,z))/(max(0.5,x+z))**2;
    return u;
}

console.log(calculation(1,2,3));

//№6
console.log("№6");

function calculatePerimeter(coordinates) {
    if (coordinates.length % 2 !== 0 || coordinates.length < 4) {
        return "Неверное количество координат";
    }

    let perimeter = 0;
    let n = coordinates.length / 2;
    let x1, x2, y1, y2, sum;

    for (let i = 0; i < n; i++) {
        x1 = coordinates[2 * i];
        y1 = coordinates[2 * i + 1];
        x2 = coordinates[(2 * (i + 1)) % coordinates.length];
        y2 = coordinates[(2 * (i + 1) + 1) % coordinates.length];

        sum = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        perimeter += sum;
    }

    return perimeter;
}
let figure = [0, 0, 4, 0, 2, 3];
console.log(calculatePerimeter(figure));

//7
console.log("№7");
function sineOfNumber(n, sum = 0, i = 1) {
    if (i <= n) {
        return sineOfNumber(n, sum + Math.sin(i), i + 1);
    }
    return sum;


}

let n = 8;
console.log(sineOfNumber(n));
