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
    let newPoste = poste.toLowerCase();
    let f = newPoste.indexOf('@');
    let g = newPoste.indexOf('.');
    return f + 2 <= g
};

console.log(eMail('someemail@gmail.com'));
console.log(eMail('someeMAIL@gmail.com'));
console.log(eMail('someeMAIL@i.ua'));
console.log(eMail('some.email@gmail.com'));