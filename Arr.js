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