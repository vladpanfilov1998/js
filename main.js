// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    const res = [];
    while (str.length) {
        res.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(res)
    return res
};
console.log(cutString('наслаждение',3))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//

let delete_characters = (str, length) => {
    return str.substr(0, length);
};
let str = 'Каждый охотник желает знать';
console.log(delete_characters(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
str = "HTML JavaScript PHP";
console.log(insert_dash(str));
document.write(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//

let firstUp = (str) => {
    return str[0].toUpperCase() + str.slice(1)
};
document.write(firstUp(str));
console.log(firstUp(str));

// - Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normName = (name) => {
    console.log(name.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' '));
}
normName(n1);
normName(n2);
normName(n3);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArr = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    console.log(array);
    return array;
};
randomArr(10);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let randomNewArr = (size) => {
    let arrayNew = [];
    for (let i = 0; i < size; i++) {
        arrayNew.push(Math.round(Math.random() * 100));
    }
    return arrayNew;
};

let arraySort = randomNewArr(20)
console.log(arraySort.sort((a, b) => a - b));
console.log(arraySort.sort((a, b) => b - a));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//

let filterArr = (size) => {
    let arrayFilter = [];
    for (let i = 0; i < size; i++) {
        arrayFilter.push(Math.round(Math.random() * 100));
    }
    return arrayFilter;
};

let arrayNewFilter = filterArr(20)
console.log(arrayNewFilter.filter(value => value % 2 === 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
document.write(capitalize(str));
console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//

let eMail = (poste) => {
    let f = poste.indexOf('@');
    let g = poste.indexOf('.');
    return f + 2 <= g
};
console.log(eMail('someeMAIL@i.ua'));

// - є масив
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//

let coursesSort = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(coursesSort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//

let count = (str, stringsearch) => {
    let result = 0;
    for (const type of str) {
        if (type === stringsearch) result++;
    }
    return stringsearch + '=' + result;
}
console.log(count("Астрономия это наука о небесных объектах", 'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//

let cutString1 = (str, n) => {
    let arr = str.split(' ');
    let arrNew = [];
     for (let i = 0; i < n; i++) {
        arrNew.push(arr[i]);
    }
    return arrNew
}
console.log(cutString1('Сила тяжести приложена к центру масс тела', 5))

//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'Fun interesting story',
        pages: 37889,
        author: ['Vasya', 'Mykola'],
        genre: ['action', 'horror'],
    },
    {
        title: 'Interesting story',
        pages: 8899999,
        author: ['Vasya'],
        genre: ['roman', 'action', 'horror']
    },
    {
        title: 'Fun story',
        pages: 3889,
        author: ['Ivan', 'Vasya', 'Mykola'],
        genre: ['horror']
    }
]

// -знайти наібльшу книжку.

let booksSort = books.sort((a, b) => b.pages - a.pages);
console.log(booksSort[0]);

// - знайти книжку/ки з найбільшою кількістю жанрів

let booksSort1 = books.sort((a, b) => b.genre.length - a.genre.length);
console.log(booksSort1[0]);

// - знайти книжку/ки з найдовшою назвою

let booksSort2 = books.sort((a, b) => b.title.length - a.title.length);
console.log(booksSort2[0]);

// - знайти книжку/ки які писали 2 автори

let booksSort3 = books.sort((a, b) => b.author.length - a.author.length);
console.log(booksSort3[0]);

// - знайти книжку/ки які писав 1 автор

let booksSort4 = books.sort((a, b) => a.author.length - b.author.length);
console.log(booksSort4[0]);

// - вісортувати книжки по кількості сторінок по зростанню
//

let booksSort5 = books.sort((a, b) => a.pages - b.pages);
console.log(booksSort5);
