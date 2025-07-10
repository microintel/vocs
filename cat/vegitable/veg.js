
function serT() {
  const val = document.getElementById('search').value.toLowerCase();
  const cards = document.getElementsByClassName('card');
  let show = false;

  for (let i = 0; i < cards.length; i++) {
    const titleEl = cards[i].querySelector('.word-title');
    if (!titleEl) continue;

    const word = titleEl.textContent;

    if (word.startsWith(val)) {
      cards[i].style.display = 'block';
      show = true;
    } else {
      cards[i].style.display = 'none';
    
      if (show && word > val) break;
    }
  }

  for (; i < cards.length; i++) {
    cards[i].style.display = 'none';
  }
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
    
    async function downl() {
    const w = new Set();
    document.querySelectorAll('.word-title').forEach(e => {
    const t = e.textContent.trim().toLowerCase();
    if (t) w.add(t);
    });
    const a = [...w];
    
    Swal.fire({
    title: 'Choose Format',
    showDenyButton: true,
    confirmButtonText: 'JSON ',
    showCloseButton:true,
    denyButtonText: 'Readable'
    }).then(async (res) => {
    if (res.isConfirmed) {
    const json = JSON.stringify(a, null, 2);
    const b = new Blob([json], { type: 'application/json' });
    const u = URL.createObjectURL(b);
    const link = document.createElement('a');
    link.href = u;
    link.download = 'wd.json';
    link.click();
    URL.revokeObjectURL(u);
    } else if (res.isDenied) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text("MICROINTEL", 105, 20, null, null, "center");
    doc.setFontSize(14);
    doc.text("VOC ( vegitables )", 105, 30, null, null, "center");
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    
    let y = 40;
    const rowHeight = 10;
    const colWidth = 45;
    const startX = 10;
    
    for (let i = 0; i < a.length; i += 4) {
    if (y > 280) {
    doc.addPage();
    y = 20;
    }
    
    for (let j = 0; j < 4; j++) {
    const word = a[i + j];
    if (word !== undefined) {
    const num = i + j + 1;
    const x = startX + j * colWidth;
    doc.text(`${num}. ${word}`, x + 2, y + 7);
    doc.rect(x, y, colWidth, rowHeight);
    }
    }
    
    y += rowHeight;
    }
    
    doc.save("wd.pdf");
    }
    });
    }