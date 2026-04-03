// app.js — список фруктів з map()

const fruits = [
  '🍎 Яблуко',
  '🍌 Банан',
  '🍊 Апельсин',
  '🍇 Виноград',
  '🍓 Полуниця',
];

// map() перетворює кожен елемент масиву
const cards = fruits.map(function(fruit) {
  return `<div class="fruit-card">${fruit}</div>`;
});

// Вставляємо картки на сторінку
document.getElementById('fruits').innerHTML = cards.join('');