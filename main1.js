//- створити блок,

const div = document.createElement('div');

//    - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.backgroundColor = 'red'
div.style.color = 'blue'
div.style.fontSize = '16px'
div.innerText = 'okten'

//- додати цей блок в body.

document.body.appendChild(div);

//- клонувати його повністю, та додати клон в body.

const div2 = div.cloneNode(true);
document.body.appendChild(div2);

document.body.appendChild(div.cloneNode(true));

//- Є масив:
//    ['Main','Products','About us','Contacts']
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.

const arr = ['Main','Products','About us','Contacts'];
const menuDiv = document.getElementsByClassName('menu')[0];
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item
    menuDiv.appendChild(li);
}

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    let text = ''
    for (const key in value) {
        text += `---- ${key}: ${value[key]}`;
    }
    div.innerText = text.slice(2);
    document.body.appendChild(div);
})

//- Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.

coursesAndDurationArray1.forEach(value => {
    const div = document.createElement('div');
    div.classList.add('item')
    const h1 = document.createElement('h1');
    h1.classList.add('heading')
    const p = document.createElement('p');
    p.classList.add('description')
    p.style.fontSize = '32px'
    h1.innerText = value.title
    p.innerText = value.monthDuration
    div.append(h1, p)
    document.body.appendChild(div)
})