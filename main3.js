// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let arr = [];
for (let i = 0, j = 0; i < 100; i++) {
    if (i%2 === 0) {
        arr[j] = i;
        j++;
    }
}
console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.

let arrNew = [];
for (let w = 0, f = 0; w < 100; w++) {
    if (w%2) {
        arrNew[f] = w;
        f++;
    }
}
console.log(arrNew);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arrN = [];
for (let e = 0; e < 20; e++) {
    arrN[e] = Math.ceil(Math.random() * 100);
}
console.log(arrN);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrL = [];
for (let e = 0; e < 20; e++) {
    arrL[e] = Math.ceil(Math.random() * (732 - 8) + 8);
}
console.log(arrL);

// 2. Вивести за допомогою console.log кожен третій елемент

let arrK = [];
for (let e = 0; e < 20; e++) {
    arrK[e] = Math.floor(Math.random() * (732 - 8) + 8);
}
for (let i = 0; i < arrK.length; i+=3) {
    console.log(arrK[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

let arrB = [];
for (let e = 0; e < 20; e++) {
    arrB[e] = Math.floor(Math.random() * (732 - 8) + 8);
}
for (let j = 0; j < arrB.length; j+=3) {
    if (arrB[j] % 2 === 0) {
        console.log(arrB[j]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr = [];
for (let i = 0, j = 0; i < arrB.length; i+=3) {
    if (arrB[i] % 2 === 0) {
        newArr[j] = arrB[i];
        j++
    }
}
console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i < array.length; i++) {
    if (array[i+1] % 2 === 0) {
        console.log(array[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//

let arrayX = [100,250,50,168,120,345,188];
let num = 0;
let sum;
for (const prise of arrayX) {
    num += prise;
    sum = num/arrayX.length;
    }
console.log(sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arrayN = [];
let arrayNN = [];
for (let i = 0; i < 20; i++) {
    arrayN[i] = Math.ceil(Math.random() * 100);
    arrayNN[i] = arrayN[i] * 5;
}
console.log(arrayN);
console.log(arrayNN);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arrayDD = [];
let arrayNewDD = [];
arrayDD[0] = "Vasya";
arrayDD[1] = 5461;
arrayDD[2] = true;
arrayDD[3] = false;
arrayDD[4] = "671234weds";
arrayDD[5] = "823hwue"
arrayDD[6] = true;
arrayDD[7] = false;
arrayDD[8] = 24;
arrayDD[9] = "Oleh";
for (let i = 0, j = 0; i < arrayDD.length; i++) {
    if (typeof arrayDD[i] === 'number') {
        arrayNewDD[j] = arrayDD[i];
        j++;
    }
}
console.log(arrayNewDD);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
     let usersWithId = [
         {id: 1, name: 'vasya', age: 31, status: false},
         {id: 2, name: 'petya', age: 30, status: true},
         {id: 3, name: 'kolya', age: 29, status: true},
         {id: 4, name: 'olya', age: 28, status: false}
     ];

 let citiesWithId = [
     {user_id: 3, country: 'USA', city: 'Portland'},
     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
     {user_id: 2, country: 'Poland', city: 'Krakow'},
     {user_id: 4, country: 'USA', city: 'Miami'}
 ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city;
        }
    }
}
console.log(usersWithId);

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//

let arrQ = []
for (let db = 0; db < 10; db++) {
    arrQ[db] = Math.floor(Math.random() * 100);
}
for (let j = 0; j < arrQ.length; j++) {
if (arrQ[j] % 2 === 0)
    console.log(arrQ[j]);
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//

let arrS = [];
let arrS2 = [];
for (let i = 0; i < 10; i++) {
    arrS[i] = Math.floor(Math.random() * 100);
}
for (let j = 0; j < arrS.length; j++) {
    arrS2[j] = arrS[j];
}
console.log(arrS, arrS2);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrayWord1 = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < arrayWord1.length; i++) {
    word += arrayWord1[i];
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let arrayWord2 = [ 'a', 'b', 'c'];
let word2 = '';
let v = 0;
while (v < arrayWord2.length) {
    word2 += arrayWord2[v];
      v++
    }
console.log(word2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arrayWord3 = [ 'a', 'b', 'c'];
let word3 = '';
for (const letter of arrayWord3) {
    word3 += letter;
}
console.log(word3);

