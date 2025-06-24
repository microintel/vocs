const search = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
    const body = document.body;
    const themeBtn = document.querySelector('.theme-btn');

    search.addEventListener('input', () => {
      const val = search.value.toLowerCase();
      cards.forEach(card => {
        const word = card.querySelector('.wdddd').innerText.toLowerCase();
        card.style.display = word.includes(val) ? 'block' : 'none';
      });
    });

    
    
    function sortw() {
    const wrapper = document.querySelector('.wrapper');
    const cards = Array.from(document.querySelectorAll('.card'));
    
    cards.sort((a, b) => {
    const wordA = a.querySelector('.wdddd').innerText.toLowerCase();
    const wordB = b.querySelector('.wdddd').innerText.toLowerCase();
    return wordA.localeCompare(wordB);
    });
    
    cards.forEach(card => wrapper.appendChild(card));
    }
    
    sortw();
    
    function scrol(letter) {
    const cards = document.querySelectorAll('.card');
    for (let card of cards) {
    const word = card.querySelector('.wdddd').innerText.trim().toUpperCase();
    if (word.startsWith(letter)) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    break;
    }
    }
    }
    
    setTimeout(()=>{
    let xc= document.getElementsByClassName("wdddd").length;
    document.getElementById("tot").innerText=xc;
    },1000);