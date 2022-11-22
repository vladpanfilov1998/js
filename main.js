// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let lengthFirst = 'hello world';
console.log(lengthFirst.length);

let lengthSecond = 'lorem ipsum';
console.log(lengthSecond.length);

let lengthThird = 'javascript is cool';
console.log(lengthThird.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let lengthFirst1 = 'hello world';
let upFirst = lengthFirst1.toUpperCase();
console.log(upFirst);

let lengthSecond1 = 'lorem ipsum';
let upSecond = lengthSecond1.toUpperCase();
console.log(upSecond);

let lengthThird1 = 'javascript is cool';
let upThird = lengthThird1.toUpperCase();
console.log(upThird);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lengthFirst2 = 'HELLO WORLD';
let lowerFirst = lengthFirst2.toLowerCase();
console.log(lowerFirst);

let lengthSecond2 = 'LOREM IPSUM';
let lowerSecond = lengthSecond2.toLowerCase();
console.log(lowerSecond);

let lengthThird2 = 'JAVASCRIPT IS COOL';
let lowerThird = lengthThird2.toLowerCase();
console.log(lowerThird);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToArray = (str1) => {
    return str1.split(' ');
}

let str1 = 'Ревуть воли як ясла повні';

let arr = stringToArray(str1);
console.log(arr);
document.write(arr);  // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let num1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
num1.map(elem => console.log(elem + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//

const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b)
    }
    if (direction === 'descending') {
        return nums.sort((a, b) => b - a)
    }
};

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a, b) => (b.monthDuration - a.monthDuration))
    .map(duration => console.log(duration.title + ': ' + duration.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//

coursesAndDurationArray.filter(duration => duration.monthDuration > 5)
    .map(duration => console.log(duration.title + ': ' + duration.monthDuration));

// описати колоду карт

let deck = [
    {cardSuit: 'Spade', value: 6, color: 'Black'},
    {cardSuit: 'Clubs', value: 6, color: 'Black'},
    {cardSuit: 'Hearts', value: 6, color: 'Red'},
    {cardSuit: 'Diamonds', value: 6, color: 'Red'},
    {cardSuit: 'Spade', value: 7, color: 'Black'},
    {cardSuit: 'Clubs', value: 7, color: 'Black'},
    {cardSuit: 'Hearts', value: 7, color: 'Red'},
    {cardSuit: 'Diamonds', value: 7, color: 'Red'},
    {cardSuit: 'Spade', value: 8, color: 'Black'},
    {cardSuit: 'Clubs', value: 8, color: 'Black'},
    {cardSuit: 'Hearts', value: 8, color: 'Red'},
    {cardSuit: 'Diamonds', value: 8, color: 'Red'},
    {cardSuit: 'Spade', value: 9, color: 'Black'},
    {cardSuit: 'Clubs', value: 9, color: 'Black'},
    {cardSuit: 'Hearts', value: 9, color: 'Red'},
    {cardSuit: 'Diamonds', value: 9, color: 'Red'},
    {cardSuit: 'Spade', value: 10, color: 'Black'},
    {cardSuit: 'Clubs', value: 10, color: 'Black'},
    {cardSuit: 'Hearts', value: 10, color: 'Red'},
    {cardSuit: 'Diamonds', value: 10, color: 'Red'},
    {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
    {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
    {cardSuit: 'Spade', value: 'King', color: 'Black'},
    {cardSuit: 'Clubs', value: 'King', color: 'Black'},
    {cardSuit: 'Hearts', value: 'King', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
    {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
];

// - знайти піковий туз

let deckFilter1 = deck.filter(function(number) {
    return number.cardSuit.includes('Spade') &&
        number.value === 'Ace'
});

console.log(deckFilter1);

// - всі шістки

let deckFilter2 = deck.filter(function(number) {
    return number.value === 6
});

console.log(deckFilter2);

// - всі червоні карти

let deckFilter3 = deck.filter(function(number) {
    return number.color === 'Red'
});

console.log(deckFilter3);

// - всі буби

let deckFilter4 = deck.filter(function(number) {
    return number.cardSuit === 'Diamonds'
});

console.log(deckFilter4);

// - всі трефи від 9 та більше
//
//

let deckFilter5 = deck.filter(function(number) {
    return number.cardSuit === 'Clubs' &&
        (number.value > 8 || number.value.length > 2)
});

console.log(deckFilter5);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


console.log(deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'Spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'Diamonds') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'Hearts') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'Clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: [] }));


