
function serT(){
const search = document.getElementById('search');
    const cards = document.querySelectorAll('.card');
   // const body = document.body;
      const val = search.value.toLowerCase();
      cards.forEach(card => {
        const word = card.querySelector('.word-title').innerText.toLowerCase();
        card.style.display = word.includes(val) ? 'block' : 'none';
      });
    
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
    
    
    
    function scrol(letter) {
    const cards = document.querySelectorAll('.card');
    for (let card of cards) {
    const word = card.querySelector('.word-title').innerText.trim().toUpperCase();
    if (word.startsWith(letter)) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    break;
    }
    }
    }
    
    