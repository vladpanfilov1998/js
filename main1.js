// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

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

let arrayY = [100, 250, 50, 168, 120, 345, 188];

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

// - створити функцію яка повертає найменьше число з масиву

let arrayX = [100, 250, 50, 168, 120, 345, 188];

const minimumAr = (array1) => {
    let num = array1[0];
    for (const element of array1) {
        if (element < num) {
            num = element;
        }
    }
    return num;
}
document.write(minimumAr(arrayX));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//

let arrayF = [1, 2, 3, 5, 7, 9, 56, 8, 67];

const sum = (array) => {
    let num1 = 0;
    for (const element of array) {
        num1 += element;
    }
    return num1;
}
console.log(sum(arrayF));

// - Дано натуральное число n. Выведите все числа от 1 до n.

const nature = (n) => {
    for (let j = 1; j <= n; j++) {
        console.log(j);
    }
}
nature(30);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

const recrussion = (a, b) =>
{
     if (a === b)
    {
        return a;
    }
    else if (a > b)
    {
        return b + " " + recrussion(a, b + 1)
    }
    if (a < b)
    {
        return b + " " + recrussion(a, b - 1);
    }
}
console.log(recrussion(23, 5));
console.log(recrussion(3, 18));

