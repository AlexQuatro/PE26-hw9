'use strict';

/* 
Теоретичні питання
1. Опишіть своїми словами що таке Document Object Model (DOM)

	Це представлення браузером HTML та CSS-документів, яке дозволяє за допомогою JavaScript маніпулювати та працювати з елементами та стилями веб-сайту.

2. Яка різниця між властивостями HTML-елементів innerHTML та innerText?

	innerHTML дозволяє отримувати HTML всередині елемента у вигляді рядка, а innerText представляє текстовий вміст елемента.

3. Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?

	до елементу сторінки можна звернутись методами getElement(s)by або querySelector. Методи getElement(s)by надають прямий доступ до елементу за допомогою унікальних ідентифікаторів і більш продуктивні. Методи querySelector надають доступ за CSS-селекторами і вимагають більшої обробки.

4. Яка різниця між nodeList та HTMLCollection?

	HTMLCollection відображає поточний стан документа і оновлюється при його зміні, nodeList - статична колекція.

*/

/* 
Практичні завдання
1. Знайдіть всі елементи з класом "feature", запишіть в змінну, вивести в консоль.
Використайте 2 способи для пошуку елементів.
Задайте кожному елементу з класом "feature" вирівнювання тексту по - центру(text-align: center).
*/

const elementClass = document.getElementsByClassName('feature');
const elmentSelector = document.querySelectorAll('.feature');
console.log(elementClass);
console.log(elmentSelector);

elmentSelector.forEach(element => {
	element.style.textAlign = 'center';
});

/* 
2. Змініть текст усіх елементів h2 на "Awesome feature".
*/

const elementTitle = document.querySelectorAll('h2');

elementTitle.forEach(element => {
	element.innerText = 'Awesome feature';
});

/* 
3. Знайдіть всі елементи з класом "feature-title" та додайте в кінець тексту елементу знак оклику "!".
*/

const elementClassTitle = document.querySelectorAll('.feature-title');

elementClassTitle.forEach(element => {
	const elementText = element.innerText;
	element.innerText = `${elementText}!`;
});