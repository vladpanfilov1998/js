//є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let h2Array = document.getElementsByTagName("h2");
let content = document.getElementById('content');
let htmlUListElement = document.createElement('ul');
for (const h2ArrayElement of h2Array) {
    let htmlLiElement = document.createElement('li');
    htmlLiElement.innerText = h2ArrayElement.innerText;
    htmlUListElement.appendChild(htmlLiElement)
}
content.appendChild(htmlUListElement);