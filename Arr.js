//№1
console.log("№1");
let arr=[];

for (let i = 0; i < 3; i++){
    arr[i] = i;
}

console.log("arr[2]: ", arr[2]); // с 0 индексация
console.log("Количество элементов массива: ", arr.length);

arr.splice(1, 1);
for (let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

//№2
console.log("№2");

function displayFor() {
    for (let i = 0; i < countries.length; i++) {
        console.log("Страна: ", countries[i], ", население: ", population[i]);
    }
}

function displayForIn() {
    for (let i in countries) {
        console.log("Страна: ", countries[i], ", население: ", population[i]);
    }
}

let countries = ['Россия', 'США', 'Китай', 'Франция', 'Германия'];
let population = [14131312122, 1221002651, 139323776, 13110004385, 321559417];

displayFor();
displayForIn();

//№3
console.log("№3");

let arr3 = ["January", "February", "March", "April", "May", "June"];
let len = arr3.pop();
console.log(arr3);
console.log(len);

//№4
console.log("№4");
let a = [1, 2, 3, 4, 5, 6, 7];
let t = a.slice(0, 3);
console.log(t);

//№5
console.log("№5");
let a5 = [1, 2, 3, 4, 5, 6, 7];
let d = a5.splice(1, 3);
console.log(a5);

//№6
console.log("№6");

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reverse());

//№7
console.log("№7");

let elements = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
let result = elements.sort();
console.log(elements);

//№8
console.log("№8");

let numbers8 = [1, 2, 3, 4, 5];
let result8 = numbers8.join("+");
console.log(result8);

//№9
console.log("№9");

function median(arr) {
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
    else {
        return arr[mid];
    }
}

let arr1 = [1, 2, 5, 4, 6, 8];
let arr2 = [2, 5, 9, 5];
let combinedArr = arr1.concat(arr2);
combinedArr.sort();
console.log(median(combinedArr));

//№10
console.log("№10");

let arr10 = [];
for (let i = 0; i < 10; i++) {
    arr10.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
}
console.log(arr10);
let max_ = Math.max(...arr10);
let min_ = Math.min(...arr10);

let maxIndex = arr10.indexOf(max_);
let minIndex = arr10.indexOf(min_);

arr10[maxIndex] = min_;
arr10[minIndex] = max_;
console.log(arr10);

//№11
console.log("№11");

function check(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return i + 1;
        }
    }
    return arr.reverse();
}

//let array = [10, 9, 8, 7, 6];
let array = [10, 9, 7, 8, 6];

console.log(check(array));

//№12
console.log("№12");

function newArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0 && arr[i] > 0) {
            arr[i] *= 3;
        }
        else if (i % 2 === 0 && arr[i] < 0) {
            arr[i] /= 5;
        }
    }
    return arr;
}

let arr12 = [10, -20, 2, -6, 2, -1, -5, 4];
console.log(newArr(arr12));

//№13
console.log("№13");

let matrix = [
    [1, -6, 3, 8, 10],
    [-5, 0, 7, 12, -3],
    [4, 5, -2, 9, 6],
    [8, -1, 2, 3, 11],
    [-7, 4, 0, -5, 8]
];
let min = -5;
let max = 7;
let arr13 = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] >= min && matrix[i][j] <= max) {
            arr13.push(matrix[i][j]);
        }
    }
}
console.log(arr13);

//№14
console.log("№14");
