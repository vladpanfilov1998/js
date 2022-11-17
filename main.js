// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const minimum = (x, y, z) => {
    let num = x;
    if (num > y) {
        num = y;
    } else if (num > z) {
        num = z;
    }
    return num;
}
document.write(minimum(45, 47, 9));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const maximum = (x, y, z) => {
    let num = x;
    if (num < y) {
        num = y;
    } else if (num < z) {
        num = z;
    }
    return num;
}
document.write(maximum(45, 47, 9));

// - створити функцію яка повертає найбільше число з масиву

let arrayY = [100,250,50,168,120,345,188];

const maximumAr = (array) => {
    let num = array[0];
    for (const element of array) {
        if (element > num) {
            num = element;
        }
    }
    return num;
}
document.write(maximumAr(arrayY));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrayN = [100,250,50,168,120,345,188];

const middle = (array) => {
     let i = 0;
     for (const element of array) {
         i += element;
     }
     return i/array.length;
 };
console.log(middle(arrayN))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

const maxminArray = (nums) => {
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log(max);
    return min;
}
console.log(maxminArray(arrayN));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomArr(arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}
let arrWW = [];
console.log(randomArr(arrWW));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomLimArr(arr, limit) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    return arr;
}
let arrWX = [];
console.log(randomLimArr(arrWX,60));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//

function reversArr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let arrElement = arr[i];
        newArr.push(arrElement);
    }
    return newArr
}
let arrayNM = [100,250,50,168,120,345,188];
console.log(reversArr(arrayNM));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//

function plusArray(arg1, arg2) {
    if ((arguments[1]) === undefined) {
        console.log(`${(arguments[0])}`);
    } else {
        console.log(`${(arguments[0])}${(arguments[1])}`);
    }
}
plusArray(56, 100);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
let arrayYY = [1,2,3,4];
let arrayNN = [2,3,4,5];
// результат
//     [3,5,7,9]
//

const sumArray = (array1,array2) => {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray[i] = array1[i] + array2[i];
    }
    return newArray;
}
console.log(sumArray(arrayYY, arrayNN));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//

let arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function randArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (const key in element) {
            newArray.push(key);
        }
    }
    return newArray;
}

console.log(randArray(arr1));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function randArray2(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (const key in element) {
            newArray.push(element[key]);
        }
    }
    return newArray;
}

console.log(randArray2(arr2));
