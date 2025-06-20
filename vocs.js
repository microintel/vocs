const search = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
    const body = document.body;
    const themeBtn = document.querySelector('.theme-btn');

    search.addEventListener('input', () => {
      const val = search.value.toLowerCase();
      cards.forEach(card => {
        const word = card.querySelector('.word-title').innerText.toLowerCase();
        card.style.display = word.includes(val) ? 'block' : 'none';
      });
    });

    function toggleTheme() {
      const isLight = body.getAttribute('data-theme') === 'light';
      body.setAttribute('data-theme', isLight ? 'dark' : 'light');
      themeBtn.textContent = isLight ? 'Dark' : 'Light';
    }
    
    function sortw() {
    const wrapper = document.querySelector('.wrapper');
    const cards = Array.from(document.querySelectorAll('.card'));
    
    cards.sort((a, b) => {
    const wordA = a.querySelector('.word-title').innerText.toLowerCase();
    const wordB = b.querySelector('.word-title').innerText.toLowerCase();
    return wordA.localeCompare(wordB);
    });
    
    cards.forEach(card => wrapper.appendChild(card));
    }
    
    sortw();
    
    function scrollToLetter(letter) {
    const cards = document.querySelectorAll('.card');
    for (let card of cards) {
    const word = card.querySelector('.word-title').innerText.trim().toUpperCase();
    if (word.startsWith(letter)) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    break;
    }
    }
    }
    
    setTimeout(()=>{
    let xc= document.getElementsByClassName("word-title").length;
    document.getElementById("tot").innerText=xc;
    },1000);