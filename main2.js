
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

let element = document.createElement("div");
let btn = document.createElement("button");
element.setAttribute('id', 'text');
element.innerText = 'text';
btn.innerText = 'КНОПКА-ХОВАНКА';
element.style.fontSize = '40px';
document.body.append(element, btn);
btn.onclick = function () {
    element.hidden = true;
}

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let inp = document.createElement("input");
inp.setAttribute('type', 'number');
inp.innerText = 'Set age';
let btn2 = document.createElement("button");
btn2.innerText = 'ok';
let p = document.createElement("p");
document.body.append(inp, btn2, p);
btn2.onclick = function () {
    if (inp.value < 18 && inp.value > -1) {
        p.innerText = 'Вік менше 18';
    } else if (inp.value > 18 && inp.value < 120) {
        p.innerText = 'Вік більше 18';
    } else if (inp.value == 18) {
        p.innerText = 'Вік дорівнює 18';
    } else if (inp.value < -1 || inp.value > 120) {
        p.innerText = 'ПОМИЛКА!';
    }
}

//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let wrapper = document.createElement("div");
document.body.appendChild(wrapper);

let inputRow = document.createElement("input");
inputRow.setAttribute('type', 'number');

let inputColumn = document.createElement("input");
inputColumn.setAttribute('type', 'number');

let inputContent = document.createElement("input");

let createTable = document.createElement("button");
createTable.innerText = 'createTable';
wrapper.append(inputRow, inputColumn, inputContent, createTable);
createTable.onclick = () => {
    let table = document.createElement('table');
    document.body.appendChild(table);
    let td = inputColumn.value;
    let tr = inputRow.value;
    if (td > 0 && tr > 0) {
        for (let i = 0; i < tr; i++) {
            let tableTr = document.createElement('tr');
            table.appendChild(tableTr);
            for (let j = 0; j < td; j++) {
                let tableTd = document.createElement("td");
                tableTd.innerText = inputContent.value;
                tableTr.appendChild(tableTd);
            }
        }
    }
}
