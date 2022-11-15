// --створити масив з:
//     - з 5 числових значень

let arrC = []
let c = 0;
while (c < 5) {
    document.write(`<div>${arrC[c] = Math.floor(Math.random() * 100)}</div>`);
    c++;
}


// - з 5 стічкових значень

let arrW = []
let a = 0;
while (a < 5) {
    document.write(`<div>${arrW[a] = Math.floor(Math.random() * 100) + ''} ${typeof(arrW[a])} </div>`);
    a++;
}

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

let arrZ = []
for (let b = 0; b < 2; b++) {
    document.write(`<div>${arrZ[b] = Math.floor(Math.random() * 100)} ${typeof(arrZ[b])} </div>`);
}

for (let b = 2; b < 4; b++) {
    document.write(`<div>${arrZ[b] = Math.floor(Math.random() * 100) + ''} ${typeof(arrZ[b])} </div>`);
}

    document.write(`<div>${arrZ[4] = !!Math.floor(Math.random() * 100)} ${typeof(arrZ[4])} </div>`);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let arrR = []
arrR[0] = Math.floor(Math.random() * 100);
arrR[1] = Math.floor(Math.random() * 100);
arrR[2] = Math.floor(Math.random() * 100);
arrR[3] = Math.floor(Math.random() * 100);
console.log(arrR)


// - є масив
let arrT = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let t = 0;
while (t < arrT.length) {
    document.write(`<h1> ${arrT[t]}</h1>`);
    t++;
}

//     2. перебрати його циклом for

for (let s = 0; s < arrT.length; s++) {
    document.write(`<div>${arrT[s]}</div>`);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let j = 0;
while (j < arrT.length) {
    if (j%2 !== 0) {
        document.write(`<h2> ${arrT[j]}</h2>`);
    }
    j++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arrT.length; i++) {
    if (i%2 !== 0) {
        document.write(`<h2> ${arrT[i]}</h2>`);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let y = 0;
while (y < arrT.length) {
    if (arrT[y]%2 === 0) {
        document.write(`<h3> ${arrT[y]}</h3>`);
    }
    y++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let k = 0; k < arrT.length; k++) {
    if (arrT[k]%2 === 0) {
        document.write(`<h2> ${arrT[k]}</h2>`);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let h = 0; h < arrT.length; h++) {
    if (arrT[h]%3 === 0) {
        arrT[h] = "okten";
    }
}
document.write(`<h4> ${arrT}</h4>`);

// 8. вивести масив в зворотньому порядку.

let arrF = [2,17,13,6,22,31,45,66,100,-18];
for (let f = arrF.length - 1; f >= 0; f--) {
    document.write(`<h4> ${arrF[f]}</h4>`);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1. перебрати його циклом while
let q = arrF.length - 1;
while (q >= 0) {
    document.write(`<h1> ${arrF[q]}</h1>`);
    q--;
}

// //    9. 2. перебрати його циклом for

 for (let e = arrF.length - 1; e >= 0; e--) {
     document.write(`<div>${arrF[e]}</div>`);
}

// //    9. 3. перебрати циклом while та вивести  числа тільки з непарним індексом

 let p = arrF.length - 1;
 while (p >= 0) {
     if (p%2 !== 0) {
         document.write(`<h4>${arrF[p]}</h4>`);
     }
     p--;
 }

// // 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом

 for (let g = arrF.length - 1; g >= 0; g--) {
     if (g%2 !== 0) {
         document.write(`<h2> ${arrF[g]}</h2>`);
     }
 }

// // 9.5. перебрати циклом while та вивести  числа тільки парні  значення

 let v = arrF.length - 1;
 while (v >= 0) {
     if (arrF[v]%2 === 0) {
         document.write(`<h3> ${arrF[v]}</h3>`);
     }
     v--;
 }

// //9.6. перебрати циклом for та вивести  числа тільки парні  значення

 for (let dd = arrF.length - 1; dd >= 0; dd--) {
     if (arrF[dd]%2 === 0) {
         document.write(`<h2> ${arrF[dd]}</h2>`);
     }
 }

// // 9.7. замінити кожне число кратне 3 на слово "okten"

 for (let hh = arrF.length - 1; hh >= 0; hh--) {
     if (arrF[hh]%3 === 0) {
         arrF[hh] = "okten";
     }
 }
 document.write(`<h4> ${arrF}</h4>`);


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrQ = []
for (let db = 0; db < 10; db++) {
    arrQ[db] = Math.floor(Math.random() * 100);
}
for (let ddb = 0; ddb < arrQ.length; ddb++) {
    console.log(arrQ[ddb]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrQQ = []
for (let dp = 0; dp < 10; dp++) {
    arrQQ[dp] = Math.floor(Math.random() * 100) + '';
}
for (let ddp = 0; ddp < arrQQ.length; ddp++) {
    console.log(arrQQ[ddp]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

massive = [24, 422, 51, 2.33, 336, "Vasya", "Oleh", "asdff", "671234weds", "12341823hwue"];
for (let uu = 0; uu < massive.length; uu++){
    console.log(massive[uu]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

massiveW = [24, 5422, true, false, 5461, 2.22, 76, 24, false, false, "Vasya", "Oleh", "asdff", "671234weds", "12341823hwue", "823hwue",true, true, false, false];
for (let ww = 0; ww < massiveW.length; ww++) {
    if (typeof massiveW[ww] === 'boolean') {
        console.log(massiveW[ww])
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

massiveWW = [24, 5422, true, false, 5461, 2.22,76, 24, false, false, "Vasya", "Oleh", "asdff", "671234weds", "12341823hwue", "823hwue",true, true, false, false];
for (let xx = 0; xx < massiveWW.length; xx++){
    if (typeof massiveWW[xx] === 'number') {
        console.log(massiveWW[xx])
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//

massiveWWW = [24, 5422, true, false, 5461, 2.22,76, 824, false, false, "Vasya", "Oleh", "asdff", "671234weds", "12341823hwue", "823hwue",true, true, false, false];
for (let rr = 0; rr < massiveWWW.length; rr++) {
    if (typeof massiveWWW[rr] === 'string') {
        console.log(massiveWWW[rr])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrDD = []
arrDD[0] = "Vasya";
arrDD[1] = 5461;
arrDD[2] = true;
arrDD[3] = false;
arrDD[4] = "671234weds";
arrDD[5] = "823hwue"
arrDD[6] = true;
arrDD[7] = false;
arrDD[8] = 24;
arrDD[9] = "Oleh";
for (let tt = 0; tt < arrDD.length; tt++) {
     console.log(arrDD[tt])
    }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let aa = 0; aa < 10; aa++){
    console.log(`step : ${aa}`);
    document.write(`step : ${aa}`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let bb = 0; bb < 100; bb++){
    console.log(`step : ${bb}`);
    document.write(`step : ${bb}`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let ii= 0; ii < 100; ii+=2) {
    console.log(`step : ${ii}`);
    document.write(`step : ${ii}`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let ii= 0; ii < 100; ii++) {
    if (ii % 2 === 0) {
        console.log(`step : ${ii}`);
        document.write(`step : ${ii}`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let ff= 0; ff < 100; ff++) {
    if (ff % 2 !== 0) {
        console.log(`step : ${ff}`);
        document.write(`step : ${ff}`);
    }
}

// створити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'Fun interesting story',
        pages: 37889,
        author: ['Vasya', 'Mykola'],
        genre: ['action', 'horror'],
    },
    {
        title: 'Interesting story',
        pages: 889,
        author: ['Vasya'],
        genre: ['roman']
    },
    {
        title: 'Fun story',
        pages: 3889,
        author: ['Ivan'],
        genre: ['horror']
    }
]

// -знайти наібльшу книжку.

let maxPages = books[0];
for (const book of books) {
    if (book.pages > maxPages.pages) {
        maxPages = book;
    }
}
document.write(`НАЙБІЛЬША КНИЖКА : ${maxPages.title} КІЛЬКІСТЬ СТОРІНОК : ${maxPages.pages}`);

// - знайти книжку/ки з найбільшою кількістю жанрів

let maxGenres = books[0];
for (const book of books) {
    if (book.genre.length > maxGenres.genre.length) {
        maxGenres = book;
    }
}
document.write(`НАЙБІЛЬШЕ ЖАНРІВ : ${maxGenres.title} ЖАНРИ : ${maxGenres.genre}`);

// - знайти книжку/ки з найдовшою назвою

let maxTitle = books[0];
for (const book of books) {
    if (book.title.length > maxTitle.title.length) {
        maxTitle = book;
    }
}
document.write(`НАЙДОВША НАЗВА : ${maxTitle.title}`);

// - знайти книжку/ки які писали 2 автори

let maxAuthors = books[0];
for (const book of books) {
    if (book.author.length === 2) {
        maxAuthors = book;
    }
}
document.write(`ПИСАЛИ 2 АВТОРИ : ${maxAuthors.title} АВТОРИ : ${maxAuthors.author}`);

// - знайти книжку/ки які писав 1 автор

let minAuthors = books[0];
for (const element of books) {
    if (element.author.length === 1) {
        minAuthors = element;
    }
}
document.write(`ПИСАВ 1 АВТОР : ${minAuthors.title} АВТОРИ : ${minAuthors.author}`);