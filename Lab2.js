//№1
/*function subtraction1(a,b){
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

let age = prompt("Введите число:");//переделать
age = Number(age);
checkAge(age);

//№3
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
*/
//№4
let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);

//№5
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




