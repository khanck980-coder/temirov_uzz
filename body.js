const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const content = document.getElementById("content");
const menuBtns = document.querySelectorAll(".menu-btn");

const topics = {
  home: {
    title: "Bosh sahifa",
    text: "Saytga xush kelibsiz! Menyudan mavzuni tanlang."
  },
  computer: {
    title: "Kompyuter tarixi",
    text: `Kompyuter tarixi:<br>
1️⃣ 1940-yillar: ENIAC va ilk elektron kompyuterlar<br>
2️⃣ 1950-yillar: Mainframe va asosiy hisoblash kompyuterlari<br>
3️⃣ 1970-yillar: Mikroprotsessor va shaxsiy kompyuterlar<br>
4️⃣ 1980-yillar: IBM PC va Apple Macintosh<br>
5️⃣ 1990-yillar: Internet va grafik interfeyslar<br>
6️⃣ 2000-yillar: Laptops, mobillar, serverlar rivoji<br>
7️⃣ Hozirgi davr: Kuchli shaxsiy kompyuterlar, AI, cloud computing`
  },
  parts: {
    title: "Kompyuter qismlari",
    text: `Kompyuter qismlari:<br>
🧠 Protsessor (CPU): Kompyuterning miyasi, hisob-kitoblarni bajaradi.<br>
🖥️ Asosiy plata (Motherboard): Barcha komponentlarni bog‘laydi.<br>
💾 RAM: Vaqtinchalik xotira, dasturlar ishlashi uchun zarur.<br>
🗄️ SSD/HDD: Doimiy saqlash qurilmalari, tez va ishonchli.<br>
🎮 Video karta (GPU): Grafikani qayta ishlaydi.<br>
⌨️ Kiritish qurilmalari: Klaviatura, sichqoncha, skaner.<br>
🖨️ Chiqish qurilmalari: Monitor, printer, karnay`
  },
  tips: {
    title: "Maslahatlar va hozirgi kompyuterlar",
    text: `Hozirgi kunning eng mukammal notebook va kompyuterlari:<br>
💻 Apple MacBook Pro, Dell XPS 13, Lenovo ThinkPad X1, ASUS ROG seriyasi.<br>
Foydali maslahatlar:<br>
✔️ Har doim antivirus o‘rnating<br>
✔️ Keraksiz dasturlarni o‘chiring<br>
✔️ SSD ishlating<br>
✔️ Kompyuterni changdan tozalab turing`
  },
  contact: {
    title: "Aloqa",
    text: `<div class="social-icons">
      <a href="https://instagram.com/tmv__7" target="_blank"><i class="fab fa-instagram"></i> @tmv__7</a>
      <a href="https://t.me/tmv_-7tg" target="_blank"><i class="fab fa-telegram"></i> @tmv_7</a>
    </div>`
  }
};


menuBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const topic = btn.getAttribute("data-topic");
    content.innerHTML = `<h2>${topics[topic].title}</h2><p>${topics[topic].text}</p>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});


const search = document.getElementById("search");
search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});


function Xayr() {
  alert("Dead!");
}
