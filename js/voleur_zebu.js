const lineTarget = document.querySelector('#lineTarget');
const ddhamburger = document.querySelector('.dropdown-hamburger');
const dropdownH = document.querySelector('.dropdown-content-hamburger');
ddhamburger.onclick = function() {
  dropdownH.classList.toggle('open');
console.log(dropdownH)
}
const schedule = [  
  {
    jour: "Jour 1",
    circuit: "ANTANANARIVO – AMPEFY",
    description: `Accueil à l'arrivée.  Puis départ pour Ampefy, à 134 km à l’Ouest d’Antananarivo. 
    Traversée des paysages volcaniques et typique du centre ouest de l’île. 
    Arriver à Ampefy dans l’après midi. 
    Installation à l’hôtel au bord du lac. 
    Possibilité de se promener autour du lac ou de partir à la rencontre des pêcheurs du lac. 
    La région fournie la capitale de MADAGASCAR en poisson d’eau douce (le Tilapia). Nuit à l’hôtel. Dîner libre
    `
  },
  {
    jour: "Jour 2",
    circuit: "AMPEFY – TSIROANOMANDIDY – BELOBAKA",
    description: `Transfert pour  Tsiroanomandidy (le plus grand marché au zébu de Madagascar), à 113 km à l'ouest d’Ampefy, en suivant la route des zébus du Moyen Ouest Malgache.
      Puis nous continuons en taxi-brousse par la piste pour atteindre le village de Belobaka, la dernière grande agglomération avant les grandes zones désertiques de l’ouest. 
      Nuit en bivouacs.
    `
  },
  {
    jour: "Jour 3 au 4",
    circuit: "RANDONNÉE PÉDESTRE 400 À 600M DE DENIVELLÉ",
    description: `A l’aube, accompagnés de nos porteurs, nous commençons notre randonnée pédestre en passant par un paysage sauvage et méconnu, formé par des collines entaillées de « Lavaka » (petit canyon). 
    Ces petits canyons sont du a l’érosion du sol durant la saison de pluie. Rencontre avec les villageois qui sillonnent les sentiers avec leurs marchandises, que ce soit du tabac, alcool local ou du riz. Nuit en bivouacs.
    `
  },
  {
    jour: "Jour 5",
    circuit: "RANDONNÉE PÉDESTRE – ANKAVANDRA",
    description: `Dernier jour de randonnée. Toujours par un sentier caillouteux le long de l’escarpement du massif.
      Nous suivons un joli cours d’eau dont les chutes ont creusées des bassins naturels dans la roche. 
    Arrivée et déjeuner au village d’Ankavandra dans le pays du Menabe (Grand Rouge). 
    Un accueil chaleureux de la part des villageois à l’arriver de ces 3 jours loin de toute civilisation. Mais on se rend vite compte qu’ici c’est pareil. 
    Il y a juste un peu plus de monde mais c’est toujours le fin fond de la brousse malgache.
      Possibilité de visiter la petite école. 
    Nuit sous cases typique de la région.
    `
  },
  {
    jour: "Jour 6",
    circuit: "DESCENTE DE LA MANAMBOLO",
    description: `Nous chargeons tôt nos provisions et on embarque pour 4 jours de voyages insolites et hors du temps.  Nous embarquons a bord de  nos pirogues traditionnels pour la descente du fleuve Manambolo. Mais avant de partir, nous allons demander aux ancêtres de nous protéger durant cette aventure. Nos piroguiers commencent le « fomba », le rituel se fait avant le départ. Offrande de rhum aux ancêtres et au zanahary. Le convoi se laisse porter par le courant de la majestueuse Manambolo. Nous traversons un paysage lunaire de collines déchiquetées et dénudées par l’érosion. Déjeuners pique nique. Nuit en bivouacs sur les berges du fleuve.
    Soirée feu de camp et chant traditionnel      
    `
  },
  {
    jour: "Jour 7",
    circuit: "DESCENTE  DE LA MANAMBOLO",
    description: `Accompagnés des cris de joies des enfants du village, nous reprenons notre voyage au cœur du Menabe. Parfois le cours de la rivère  se perd dans son lit de sable et nous oblige descendre de nos pirogues. Pendant que notre équipe pousse les pirogues dans la rivière ensablée. Se resserrant parfois entre deux collines, la rivière longe des petites falaises d’où jaillissent des sources d’eau claire. Toute la vie du fleuve se déroule sous nos yeux au rythme languissant de la nature et du courant qui nous emporte. Nuit en bivouacs aux abords de la rivière.
    Soirée feu de camp et chant traditionnel      
    `
  },
  {
    jour: "Jour 8",
    circuit: "DESCENTE DE LA MANAMBOLO",
    description: `Le  paysage  se  transforme à l’approche  des tsingy de Bemaraha. Nous entrons  dans les contreforts de la montagne. Les habitations disparaissent petit à petit ; et les rives laissent places à des murs de sable creusés par les crus de la rivière. Nous plantons nos tentes dans les gorges du fleuve. Nuit en bivouacs.
    Soirée feu de camp et chant traditionnel
    `
  },
  {
    jour: "Jour 9",
    circuit: "ARRIVEE A BEKOPAKA",
    description: `Le matin, notre avancer sur Bekopaka se fait dans un silence impressionnant des majestueux gorge de Bemaraha. Un défilé de falaises aux parois verticales creusées par la rivière, nous isole du reste du monde extérieur. Vers midi,  nous sortons des gorges pour rejoindre Andadoany, l’entrer du parc national des Tsingy de bemaraha. Installation au campement. Après midi circuit d’acclimatation des Petits Tsingy (3h00).. Site insolite formé de pics calcaires de plus de 30m de haut (classé patrimoine mondial par l'UNESCO). Nuit  à l’hôtel. Dîner libre
    `
  },
  {
    jour: "Jour 10",
    circuit: "BEKOPAKA GRAND TSINGY DE BEMARAHA",
    description: `
    Déclaré Site du Patrimoine Mondial d l’UNESCO en 1990, Bemaraha est devenu Parc National en Août 1997 afin de développer ses potentialités Eco touristiques. Les Tsingy constituent un réseau très dense de failles, de crevasses, de blocs calcaires sculptés en lame ou en aiguilles acérées. Dans les fonds, ils possèdent une hydrologie complexe avec des cavités souterraines qui auraient servi d’abri aux « vazimba », premiers occupants de l’île. La faune est très riche avec 13 espèces de lémuriens, des mammifères comme le Fosa, des oiseaux terrestres et aquatiques, des amphibiens, des reptiles. Pour la flore, 85% des espèces sont endémiques. Une large variété de circuits, de niveaux de difficulté différents, permet une visite « à la carte » de ce site exceptionnel. A Bemaraha la Découverte s’écrit avec un grand « D ». Nous la ferons ensemble !
    Nuit à l’hôtel. Dîner libre      
      `,
  },
  {
    jour: "Jour 11",
    circuit: "BEKOPAKA - MORONDAVA",
    description: `Départ pour Morondava de beau matin. Nous retraversons le manambolo mais cette fois ci avec le Bac. Au bout de 15 mn de traverser, nous partons sur la piste des baobabs qui font la célébrité de la région de Morondava. Arrêt à Belo sur Tsiribihina pour le déjeuner. Nous traverserons le fleuve Tsiribihina en bac avant de reprendre la piste et aller saluer le Baobab Sacré (faites vos vœux !). Puis nous partirons à la découverte des plus beaux spécimens de baobabs du monde : le Baobab Amoureux  et l’Allée des Baobabs pour le coucher du soleil. Arrivée le soir à Morondava. Nuit à l’hôtel. Dîner libre
    `
  },
  {
    jour: "Jour 12",
    circuit: "MORONDAVA - BELO SUR MER",
    description: `Transfert pour Belo sur mer, un petit village de pêcheur Vezo au sud de Morondava.
    Installation  à l’Eco Lodge le Dauphin. Après midi libre.
    3 Nuits à l’hôtel. Dîners libres      
    `
  },
  {
    jour: "Jour 13 au 14",
    circuit: "BELO SUR MER",
    description: `Belo Sur Mer, un village de pêcheurs Vezo de l'ouest de Madagascar, idéal pour s'imprégner du mode de vie des habitants de la région. L'écolodge Le Dauphin  a été construit en total respect avec son environnement naturel. Les propriétaires ont une vrai démarche écologique : les déchets sont brûlés ou recyclés, le pain et les yaourts sont fabriqués au lodge, la cuisine est faite au maximum à base de produits locaux... Les 8 bungalows du lodge s'intègrent au coeur d'un jardin fleuri très agréable, et font face à la mer. Construits en matériaux naturels, ils sont tous équipés d'une salle de bains privée, d'une moustiquaire et d'une terrasse. Les repas sont servis face à la mer. La cuisine proposée est une cuisine locale simple et variée à base des produits de la mer essentiellement. Depuis le lodge vous aurez tout le loisir d'observer les allers et retours des pêcheurs sur leur pirogue à voile, ou de découvrir le travail des artisans fabriquant les fameuses boutres, typiques de l'île.
    Des sorties plongée et pêche sont organisées par l'écolodge. La faune et la flore abondent dans ces lieux face aux îles coralliennes. On y trouve de nombreux mérous, requins de récif, carangues, tortues... Plusieurs types de pêche peuvent être pratiqués, à la traîne, à la palangrotte... Il est également possible d'effectuer des sorties kayaks de mer.       
    `
  },
  {
    jour: "Jour 15",
    circuit: "BELO SUR MER – MORONDAVA – MIANDRIVAZO",
    description: `Transfert sur Morondava et en route pour Miandrivazo, la ville de départ pour ceux qui sont tenté par la descente du fleuve Tsiribihina. C’est aussi  la ville la plus chaude de Madagascar.
    Nuit à l’hôtel. Dîner libre      
    `
  },
  {
    jour: "Jour 16",
    circuit: "MIANDRIVAZO – ANTSIRABE",
    description: `En route pour Antsirabe. En route découverte des orpailleurs de Mandoto. Petit à petit le paysage désertique de l’ouest malgache et la chaleur  laissent  place aux rizières et un climat plus doux. Découverte du grand lac Andraikiba. Déjeuners près du lacs.
    Nous repartons pour Antsirabe après le déjeuner. Installation à l’hôtel 
    Après midi Libre.
    Nuit à l’hôtel. Dîner libre      
    `
  },
  {
    jour: "Jour 17",
    circuit: "ANTSIRABE – TANA – VOL RETOUR",
    description: `Petit déjeuner a l’hôtel et départ à 8h00 pour Tana. 
    Découverte du marché de la digue et de la capitale.
    Transfert à l’aéroport le soir et vol retour.      
    `
  },
]
lineTarget.innerHTML = "";
schedule.forEach(data => {
  if (Array.isArray(data.description)) {
    let htmlContent = '';
    for (let [circuit, description] of Object.entries(data.description[0])) {
      htmlContent +=
        `<p>
          <b>- ${circuit}</b> : ${description} 
        </p>`;
    }
    lineTarget.innerHTML +=
      `<li class="event" data-date="${data.jour}">
        <h4 class="mb-3">${data.circuit}</h4>
        ${htmlContent}
      </li>`;
  } else {
    lineTarget.innerHTML +=
      `<li class="event" data-date="${data.jour}">
        <h4 class="mb-3">${data.circuit}</h4>
        <p>
          ${data.description} 
        </p>
      </li>`;
  }
});

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