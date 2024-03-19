const change = document.querySelectorAll(".switch");
let langue = localStorage.getItem("langue");
langue === "français"? change.forEach(element => {
  element.textContent = "english";
}): change.forEach(element => {
  element.textContent = "français";
}) ;
const timelineTarget = document.querySelector(`#${langue}_lineTarget`);
const lineTarget = document.querySelector('#lineTarget');
const french =  document.querySelector('.french');
const english =  document.querySelector('.english');
french.style.display = localStorage.getItem("style");
english.style.display = localStorage.getItem("styleEn");
const ddhamburger = document.querySelector('.dropdown-hamburger');
const dropdownH = document.querySelector('.dropdown-content-hamburger');
ddhamburger.onclick = function() {
  dropdownH.classList.toggle('open');
console.log(dropdownH)
}
const schedule = {
  "fran\çais": [  
    {
      jour: "Jour 1",
      circuit: "TANA - ANTSIRABE, 170 km - 3h 30 de route",
      description: `Accueil à l’aéroport et  Départ pour Antsirabe. 
      Une balade dans la ville d'eau d’Antsirabe vous permettra de vous imprégner de l’ambiance des Hautes Terres et de l’atmosphère d’une cité ayant conservé de belles maisons Merina ainsi que quelques bâtiments coloniaux qui témoignent de son lustre d’antan. L’établissement thermal construit au début du siècle sur les bords du lac Ranomafana fait partie de ces admirables constructions. Les visites se poursuivent chez les artisans locaux : le marché des pierres semi-précieuses, un atelier de broderie et une confiserie artisanale.
      Nuit à l’hôtel      
      `
    },
    {
      jour: "Jour 2",
      circuit: "ANTSIRABE",
      description: `Découverte de la région des Vakinakaratra, en VTT.
      Il faut compter quelques 18 kilomètres pour atteindre les lacs (7km pour Andraikiba + 11km pour Tritriva). Emprunter la RN34 en direction de l’ouest d’Antsirabe, puis, à 7km, bifurquer à gauche pour atteindre le 1er lac Andraikiba. Au bout de 500m, le lac apparaît sur la droite, ainsi que les pêcheurs qui vivent de la pêche de poissons d’eau douce, tels que le tilapia, la carpe ou le black bass.  
      Pour atteindre le 2ème lac, le Lac Tritriva, considéré sacré par les malgaches, continuer tout droit sur une piste de terre rouge sur 10km. Traversée de paysages typiques des hautes terres avec ses maisons en briques. La région est très fertile car la terre est volcanique. Laisser les VTT au village de Belazao, puis, juste à la sortie du village, prendre une petite montée à droite qui mène au le lac sacré, encaissé entre les falaises. La profondeur de ce lac dépasse les cent mètres, et présente des couleurs d’un bleu-vert profond. Le gardien de ce lac sacré sera présent pour narrer la légende de Roméo et Juliette malgaches.  
      Nuit à l’hôtel 
      
      `
    },
    {
      jour: "Jour 3",
      circuit: "ANTSIRABE - MIANDRIVAZO, 250 km – 4h de route",
      description: `Petit déjeuner puis continuation sur Miandrivazo, située au bord de la rivière Mahajilo, affluent de la Tsiribihina. 
      Miandrivazo est une paisible petite ville qui compte parmi les plus chaudes de Madagascar. 
      Admirer le coucher de soleil sur la rivière est une option agréable pour profiter de la beauté du paysage.
      Nuit à l’hôtel
      `
    },
    {
      jour: "Jour 4",
      circuit: "MIANDRIVAZO- MASIAKAMPY-TSIRIBIHINA, 27 km – 1h puis 1er jour de descente en chaland",
      description: `Transfert à l’embarcadère de Masiakampy à environ 30 km du point de départ, Miandrivazo. 
      Ce trajet représente environ 2h de piste. 
      Installation sur le chaland (bateau à fond plat) et en vue de la descente du fleuve Tsiribihina. 
      Déjeuner sur le bateau. Vous découvrirez une faune et une flore extrêmement riches à l’état quasi sauvage. 
      Tout au long de la descente, vous observerez plantes rares et endémiques de Madagascar (pachypodiums, aloès, kalanchoes, baobabs, etc.) ainsi que plusieurs espèces d’oiseaux, lémuriens et crocodiles. 
      La découverte de la vie des riverains tout au long de la descente constitue un autre attrait de cette incursion sur le fleuve Tsiribihina. 
      Arrêt à Nosy Ampela pour la nuit. Dîner sur le bateau. Nuit sous tente.`
    },
    {
      jour: "Jour 5",
      circuit: "DESCENTE DE LA TSIRIBIHINA, 2ème jour de descente en chaland",
      description: `Après le petit-déjeuner, la descente de la Tsiribihina continue. 
      En cours de journée, arrêt pour une petite visite à pieds d’une immense cascade puis ascension à travers la forêt pour rejoindre la piscine naturelle, où il bien entendu possible de se baigner. 
      Retour sur le bateau et continuation de la navigation à travers des falaises de basalte. 
      Depuis le bateau, de nombreuses espèces d’oiseaux sont visibles : sarcelles, hérons, martins-pêcheurs, canards à bosse. 
      Déjeuner sur le bateau. Visite du village de Berevo. 
      Le soir venu, vous avez la possibilité d’assister à une animation villageoise avec chants Sakalava et Cabosses. 
      Dîner sur le bateau. Nuit sous tente.
      `
    },
    {
      jour: "Jour 6",
      circuit: "TSIRIBIHINA – BELO SUR TSIRIBIHINA, 3ème jour de descente en chaland",
      description: `Petit-déjeuner avant de poursuivre la croisière. 
      En fin de matinée, devant un relief plus doux, le cours de la rivière s’élargit et se perd dans son lit de sable. 
      L’activité fluviale s’anime et annonce l’arrivée quasi imminente à Belo-sur-Tsiribihina. 
      Déjeuner pique-nique sur le chaland. 
      Nuit à l’hôtel à Belo sur Tsiribihina.
      `
    },
    {
      jour: "Jour 7",
      circuit: "BELO SUR TSIRIBIHINA - BEKOPAKA, 100km de piste.",
      description: `Départ en  4x4 pour rejoindre les Tsingy de bemaraha. C’est au bout d’une piste longue et sauvage (4 à 5h) que vous accédez au village de Bekopaka, aux portes de l’étonnant domaine du Parc National des Tsingy de Bemaraha. 
      Découverte des petits Tsingy l’après midi.
      Nuit en à l’hôtel      
      `
    },
    {
      jour: "Jour 8",
      circuit: "BEKOPAKA",
      description: `Les Tsingy de Bemaraha font partie du réseau des Parcs Nationaux de Madagascar. Les circuits sont proposés selon la condition physique des participants : ceux d’Andamozavaky et de Brodway (niveau assez difficile entre 4 à 6h de marche) sont les circuits des grands espaces, des vertiges et des sensations fortes. La randonnée commence à 17 kilomètres au nord du village de Bekopaka pour rejoindre de gigantesques cathédrales de calcaire, des réseaux denses de failles, des crevasses profondes, des blocs de calcaire sculptés en lames ou en aiguilles acérées qui font les Grands Tsingy. 
      Nuit à l’hôtel      
      `
    },
    {
      jour: "Jour 9",
      circuit: "BEKOPAKA - MORONDAVA, 200 km de piste 8h de piste",
      description: `Journée de piste pour rejoindre Morondava. Bien que la route soit longue, elle vous emmène à la découverte de paysages et d’aventures variés : vous traverserez la savane arbustive caractéristique de l'Ouest malgache, emprunterez le bac de Belo-sur-Tsiribihina et passerez par une grande avenue de Baobabs qui s’alignent de chaque côté de la route et également du côté des tombeaux sakalava à l’approche de Morondava. Morondava est la capitale du pays de Sakalava de Menabe. Cette journée se terminera sur l’illustre allée des Baobabs pour admirer un coucher de soleil sans pareil.
      Fin de nos prestations      
      `
    },
  ],
  "english": [
    {
      jour: "Day 1",
      circuit: "TANA TO ANTSIRABE",
      description: `Meet and greet at the international airport of Ivato, and head straight south. Throughout the plains of the highlands, you’ll discover the first amazing scenery of your trip:  the rural villages surrounded by ricefields and the population of farmers whose lifestyle has never changed since the dawn of time
      Free lunch before Antsirabe, the thermal city constructed and developed by norvegian missionaries. This city is ranked first in agriculture and the second in industry in the whole country. The beautiful middle class houses downtown are witnesses of this frivolous era. 
      Overnight at the hotel      
      `
    },
    {
      jour: "Day 2",
      circuit: "ANTSIRABE",
      description: `Discovery of the region of the Vakinakaratra. 
      On bikes : It’s a 18 kilometer ride to reach the lakes (7 km to Andraikiba and 11 for Tritriva)
      We’ll take the RN34, west of Antsirabe and then, at roughly 7 km, take a left. The lake is on our right, there are villages of fishermen on its side, people here fish the carp, the tilapia and the black bass. To reach the second sacred lake, the Tritriva it’s another 10 kilometers on a red, dusty and difficult track, but you will cross some typical sceneries of the highlands, with its red clay bricks. It’s a really fertile region, because of the volcanic soil, but it was ravaged by the infamous practice of slash and burn. Once at the village of Belazao, we take a right and get to the steep-sided lake. Its more than 100 meter deep, and its colours, from green to blue makes the scenery quite magical. The guardian of the lake will welcome you and tell you some tales, related to the history of the lake for the locals, for example the history of the Malagasy Romeo and Juliet.
      Picnic Lunch
      Overnight at the hotel
      `
    },
    {
      jour: "Day 3",
      circuit: "ANTSIRABE TO  MIANDRIVAZO ",
      description: `Discovery of the famous lakes of Andraikiba and Tritriva. Then, we go westward. The fertile lands of Vakinankaratra are soon to be replaced by the bareness of the dry Bongolava
      We’ll have lunch in a local hoteli (gargotte) for a good discovery of the inevitable Malagasy rice meal.
      Miandrivazo is a city on the banks of Mahajilo, a tributary of the Tsiribihina, this is where we will start our journey on water. This river is well known for its naturally heated flows.
      Night and diner at the hotel
      
      `
    },
    {
      jour: "Day 4",
      circuit: "MIANDRIVAZO – RIVER TRIP DOWN ",
      description: `Boarding on the barge, we start a ride that will make the whole stern western Madagascar pass before our eyes. 
      As many breaks as we need to walk around in the luxurious wilderness and discover the local bird species like the whistling ducks, aigrettes, heron and chameleons. 
      A local lunch break, with only fresh food, fish, zebu, chicken and vegetables. Back to navigation till sunset, we camp on the sandy riverside. Bivouac`
    },
    {
      jour: "Day 5",
      circuit: "RIVER TRIP DOWN ",
      description: `Crossing of the gorges of Bemahara, break near a beautiful waterfall with a natural pool. You’ll get to swim and lunch on site. You’ll get to see lemurs and turtles. 
      Lunch and night camping.      
      `
    },
    {
      jour: "Day 6",
      circuit: "RIVER TRIP DOWN TO  BELO SUR TSIRIBIHINA ",
      description: `We leave at dawn to visit the villages settled on the shores. 
      There are many bats hooked on the cliffs and if you are lucky you can even sneak a peek of some crocodiles. Overnight at the Hotel
      `
    },
    {
      jour: "Day 7",
      circuit: "BELO SUR TSIRIBIHINA TO  BEKOPAKA",
      description: `After the breakfast, head to Tsingy of Bemaraha national, road deserving’s like a Camel Trophy
      In the afternoon we want to discover the “petit tsingy”
      Night at the hotel.            
      `
    },
    {
      jour: "Day 8",
      circuit: "BEMARAHA TSINGY ",
      description: `Ideally, we leave early for the Great Tsingy, the road is 15km long, about an hour with a 4x4.There are two circuits you can choose from,<br>
      - Le circuit RANOTSARA: 3 hours inside the great Tsingy. Lunch on the run. <br>
      - Le circuit ANDAMOZAVAKA: About 4 hours inside the Great Tsingy. We recommend this circuit but its intensity requires a good shape.<br>
      For both of these options, you’ll need gear, and a forehead lamp that we will provide. In the core of the Tsingy of Bemahaea, you’ll find two breath taking landscape sites before reaching the cathedral.
      The site was totally equipped respecting the environnement, for example with an amazing rope bridge suspended high above the Tsingys, tracks that lead to caverns, of stalagmites and stalactites. 
      Lemurs are likely to show up, as for the whole endemic fauna here.
      Diner and night at the hotel
            
      `
    },
    {
      jour: "Day 9",
      circuit: "BEKOPAKA TO  MORONDAVA ",
      description: `We head back to Morondava, and take a lunch break at the beautiful city of Belo sur Tsiribihina.
      On the trip back, you’ll discover the Lovers Baoba and the Sacred Baobab which the malagasy come honor from every side of Madagascar. There, people leave in the crevices conches, bottles, or red and black ribbons for their ancestors’ souls
      As the afternoon ends, we’ll reach the famous Baobabs alley, under a perfect sunset. This proper boulevard of Andansonia Grandidieri, protected as a “Natural
      Monument” during the first festival Jama in july 2007, remains the masterpiece of our journey. `
    },
  ]
};

getSchedule(schedule, langue);
function getSchedule(arr, lang) {
  timelineTarget.innerHTML = "";
  arr[lang].forEach(data => {
    if (Array.isArray(data.description)) {
      let htmlContent = '';
      for (let [circuit, description] of Object.entries(data.description[0])) {
        htmlContent +=
          `<p>
            <b>- ${circuit}</b> : ${description} 
          </p>`;
      }
      timelineTarget.innerHTML +=
        `<li class="event" data-date="${data.jour}">
          <h4 class="mb-3">${data.circuit}</h4>
          ${htmlContent}
        </li>`;
    } else {
      timelineTarget.innerHTML +=
        `<li class="event" data-date="${data.jour}">
          <h4 class="mb-3">${data.circuit}</h4>
          <p>
            ${data.description} 
          </p>
        </li>`;
    }
  });
}

change.forEach(element => element.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(this);
  if(localStorage.getItem("langue") === "français") {
    french.style.display = "none";
    localStorage.setItem("style", "none");
    english.style.display = "block";
    localStorage.setItem("styleEn", "block");
    localStorage.setItem("langue", "english");
    getSchedule(schedule, "english");
    this.textContent = "fran\çais";
    setTimeout(() => {
      location.reload();
    }, 300);
  } else {
    localStorage.setItem("langue", "fran\çais");
    french.style.display = "none";
    localStorage.setItem("style", "block");
    english.style.display = "block";
    localStorage.setItem("styleEn", "none");
    getSchedule(schedule, "français");
    this.textContent =  "english";
    setTimeout(() => {
      location.reload();
    }, 300);
  }
}));

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}