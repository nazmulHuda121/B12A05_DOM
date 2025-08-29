// Hamburger menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

// Current Time function / Challenge part

function getCurrentTimeString() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

///-------------------------------------#####---------------------------------///

document
  .getElementById('card_container')
  .addEventListener('click', function (e) {
    // Heart count
    if (e.target.className.includes('white_heart')) {
      const redHeart = document.getElementById('red_heart').innerText;
      const totalHeart = Number(redHeart) + 1;
      document.getElementById('red_heart').innerText = totalHeart;
      document.getElementById('red_heart_mobile').innerText = totalHeart;
    }
  });
