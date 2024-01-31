const grid = document.querySelector('.grid');
const flex = document.querySelector('.flex');
const counter = document.querySelector('.counter');

const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown-menu');

hamburger.onclick = function() {
  dropdown.classList.toggle('open');
}
const data = [
  {
    titre: "Qualité de service",
    texte: "Spécialiste du voyage professionnel dédié à vous écouter attentivement afin de saisir vos exigences et vos désirs en matière de voyage.",
    image: "checkmark-circle"
  },
  {
    titre: "Réservation sécurisée",
    texte: "Une équipe dynamique est prête à vous assister en tout temps. N'hésitez pas à nous contacter par courrier électronique, 24 heures sur 24, 7 jours sur 7.",
    image: "lock-closed"
  },
  {
    titre: "Simplicité",
    texte: "Bénéficiez de tarifs négociés spécialement conçus pour s'ajuster à votre budget, ce qui vous donnera l'opportunité d'optimiser vos coûts de déplacement.",
    image: "flame"
  },
  {
    titre: "Fiabilité",
    texte: "En tant qu'agence locale fiable, notre approche repose sur la construction d'une relation de confiance avec nos clients, afin de mériter leur confiance.",
    image: "star-half"
  }
];

const flexData = [
  {
    titre: "DE BAOBAB À L'ÎLE DES PIRATES",
    texte: "Explorez une expérience singulière en découvrant la faune exceptionnelle de l'ouest de Madagascar, comprenant des lémuriens, des tortues, des crocodiles et des caméléons dans leur habitat naturel.",
    image: "bemaraha",
    lien:'./baobab.html'
  },
  {
    titre: "MADAGASCAR AU COEUR DES HOMMES",
    texte: "Bienvenue dans le joyau préservé de la nature qu'est Madagascar, un paradis unique où la biodiversité exceptionnelle, avec plus de 90% d'espèces endémiques, vous promet une aventure inoubliable au cœur d'un des derniers bastions de la vie sauvage authentique sur notre planète.",
    image: "Madagascar",
    lien:'./madagascar.html'
  },
  {
    titre: "DIAM-BAZAHA",
    texte: "Embarquez pour une aventure immersive au cœur des hautes terres Malgaches, alliant trek et randonnée, pour une exploration captivante des merveilles naturelles et humaines de cette région exceptionnelle.",
    image: "DB",
    lien:'./diam_bazaha.html'
  },
];

data.forEach(text => {
  grid.innerHTML += `
    <div class="entry">
      <div class="img">
        <img src="../ion_icons/${text.image}.svg"></img>
      </div>
      <h2>${text.titre}</h2>
      <p>
        ${text.texte}
      </p>
    </div>
  `;
});

let count = 0;

flexData.forEach(text => {
  flex.innerHTML += `
    <div class="flex-entry"  onclick="stockerTitre('${text.titre}')">
    <a href="${text.lien}">
      <div class="container">
        <span>Groupe</span>
        <div class="img">
          <img src="../images/${text.image}.jpg" alt="">
        </div>
        <h2>${text.titre}</h2>
      </div>
      <p>
        ${text.texte}
      </p>
    </a>
    </div>
  `;
  count++;
});

counter.textContent = count;
const flexEntries = document.querySelectorAll('.flex-entry');

const itemsPerSlide = 3;
let currentSlide = 0;

function updateFlexDisplay() {
  const startIndex = currentSlide * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;

  flexEntries.forEach((entry, index) => {
    if (index >= startIndex && index < endIndex) {
      entry.style.display = 'flex';
    } else {
      entry.style.display = 'none';
    }
  });
}

function showNextSlide() {
  currentSlide = (currentSlide + 1) % Math.ceil(flexEntries.length / itemsPerSlide);
  updateFlexDisplay();
}

function showPrevSlide() {
  currentSlide = (currentSlide - 1 + Math.ceil(flexEntries.length / itemsPerSlide)) % Math.ceil(flexEntries.length / itemsPerSlide);
  updateFlexDisplay();
}

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
console.log(nextButton)
function handleScreenWidthChange() {
  if (window.innerWidth <= 800 && flexEntries.length > 3) {
      updateFlexDisplay();
      prevButton.style.visibility = 'visible';
      nextButton.style.visibility = 'visible';
  } else {
    flexEntries.forEach((entry) => {
      entry.style.display = 'flex';
    });
    prevButton.style.visibility = 'hidden';
    nextButton.style.visibility = 'hidden';
  }
}

window.addEventListener('resize', handleScreenWidthChange);
handleScreenWidthChange();

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);