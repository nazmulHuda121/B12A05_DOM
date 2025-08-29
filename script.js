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

// Clear History
function clearHistory() {
  document.getElementById('history_container').innerHTML = '';
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

    // Call History added
    const target = e.target;
    const cartTitle = target.parentNode.parentNode.children[1].innerText;
    const cartEmargency = target.parentNode.parentNode.children[3].innerText;

    if (e.target.className.includes('cart_btn')) {
      const totalCoin = document.getElementById('coins').innerText;
      if (totalCoin < 20) {
        alert('Not enough coins to make a call!');
        return;
      }
      const remainCoin = Number(totalCoin) - 20;
      document.getElementById('coins').innerText = remainCoin;
      document.getElementById('coins_mobile').innerText = remainCoin;

      const historyContainer = document.getElementById('history_container');
      const createDiv = document.createElement('div');
      createDiv.innerHTML = `
        <div class="flex bg-gray-100 p-5 rounded-xl items-center justify-between w-3/3">
            <div>
              <h3 class="text-[18px] font-semibold">${cartTitle}</h3>
              <h3 class="text-lg">${cartEmargency}</h3>
            </div>
            <p class="text-sm text-gray-500">${getCurrentTimeString()}</p>
          </div>
        `;
      historyContainer.append(createDiv);

      alert(`\u{1F4DE}calling ${cartTitle} ${cartEmargency}...`);
    }

    // Counting copy and copy the text
    if (e.target.className.includes('cart_copy')) {
      const button = document.getElementById('copy').innerText;
      const countCopy = Number(button) + 1;

      document.getElementById('copy').innerText = countCopy;
      document.getElementById('copy_mobile').innerText = countCopy;

      // copy text
      const text = target.parentNode.parentNode.children[3].innerText;

      navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
      });
    }
  });
