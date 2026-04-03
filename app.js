const fruits = [
  '🍎 Яблуко', '🍌 Банан', '🍊 Апельсин',
  '🍇 Виноград', '🍓 Полуниця', '🥝 Ківі',
];

function renderFruits(list) {
  // map() — для кожного фрукту створюємо div-картку
  const cards = list.map((fruit, index) => {
    return `<div class="fruit-card" style="animation-delay:${index * 0.1}s">
      ${fruit}
    </div>`;
  });
  document.getElementById('fruits').innerHTML = cards.join('');
}

function shuffle() {
  const shuffled = [...fruits].sort(() => Math.random() - 0.5);
  renderFruits(shuffled);
}

// Початковий рендер
renderFruits(fruits);