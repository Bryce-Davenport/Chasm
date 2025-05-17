document.addEventListener("DOMContentLoaded", () => {
  // Insert header template dynamically
  fetch('/src/templates/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-header').innerHTML = html;
    });

  // Populate featured cards (placeholder)
  const featured = document.getElementById('featured-cards');
  ['A', 'B', 'C'].forEach(title => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = title;
    featured.appendChild(card);
  });
});