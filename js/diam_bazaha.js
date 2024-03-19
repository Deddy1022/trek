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
  "fran\çais":[
    {
      jour: "Jour 1",
      circuit: "TANA – FIANARANTSOA",
      description: `Départ de Tana vers le Sud sur la fameuse RN7, en passant par Ambatolampy. Visite de la fonderie.
      A Antsirabe, visite de la ville d'eau et des ses artisans en corne à zébu, broderie, et taillerie de pierre précieuse. 
      Après Transfert sur Fianarantsoa
      Nuit à l’hôtel.
      `
    },
    {
      jour: "Jour 2",
      circuit: "DESCENTE DE LA MATSIATRA",
      description: `Départ en direction de Mahasoabe. Pour la descente en pirogues traditionnelles de la rivière Matsiatra à travers les paysages de rizières de la campagne Betsileo, en découvrant au fil de l’eau la vie du fleuve (environ 3 h). La Matsiatra est une rivière qui sépare 2 anciens royaumes Betsileo, c’est aussi une route très empruntée par les villageois car c’est sur cette rivière qu’ils acheminent leur récolte pour le marché de Sahambavy. Arrêt sur la cascade pour le pique nique.
      Nous laisserons les pirogues sur les berges près d’Iseta. Rencontre avec les paysans du village de l’Iseta et  départ à pied pour rejoindre le lac ; Traversée des plantations de thé et des villages typiques betsileo.
      Après  découverte des plantations de thé et de l’usine de conditionnement, nous passons la nuit à l’hôtel.    
      `
    },
    {
      jour: "Jour 3",
      circuit: "FIANARANTSOA – ANDRINGITRA  faible dénivelé",
      description: `Départ le matin de bonne heure en direction du massif de l’Andringitra. En chemin, visite du vignoble de Soavita. A Ambalavao, visite d’un 
      atelier de fabrication artisanale de soie sauvage et de papier Antemoro. Puis en piste pour rejoindre l’entrée du parc, petite balade dans la vallée de Namoly, rencontre avec les villageois, traversée des rizières en terrasses. 
      Une petite balade pour comprendre et vivre avec les Betsileo, ces villageois qui ont conservé les vraies valeurs éthiques Malagasy, une promenade où le contact sera le mot d’ordre et où l’on pourra comprendre facilement ce peuple Betsileo, aux nombreuses spécififiités.
      Nuit en bivouac dans le village d’Ambalamanandray ou aux gîtes.
      `
    },
    {
      jour: "Jour 4",
      circuit: "ANDRINGITRA  dénivelée 600m+ 7h de marche",
      description: `Départ pour Mandriampotsy.
      7h de marche (600m de dénivelé) pour monter vers le terrain de camping au pied de la falaise et à 2100m d'altitude. Découverte du circuit Asaramanitra et de la forêt de Belambo.
      Pique nique au pied des cascades sacrées.
      Après continuation pour la prairie altimontagne.
      Point de  vue magnifique de la vallée de Namoly et de la rivière Zomandao.
      Nuit en bivouac.
      `
    },
    {
      jour: "Jour 5",
      circuit: "ANDRINGITRA : 600m+ 900m- de dénivelé 7h à 8h de marche",
      description: `Départ matinal avant le lever du soleil pour faire l’ascension du 2eme sommet de Madagascar.  
      2 heures 30 mn de montée pour atteindre le pic Boby le plus haut pic accessible d’une altitude de 2658 m, d’un dénivelé de 600 m .Au sommet, une superbe vue sur les alentours, vous aurez notamment l’occasion de laisser vos impressions dans le  livre d’or. 
      Pique-nique en haute montagne. Descente et départ pour le circuit « DIAVOLANA » et ses paysages lunaires surréalistes dignes d’un décor de science fiction. 
      Descente vers Iantaranomby,  traversée de la forêt de palmiers endémiques à ce versant « ravenea glauca » Nuit en bivouac  au bord d’une rivière dans laquelle vous pourrez vous rafraîchir.    
      `
    },
    {
      jour: "Jour 6",
      circuit: "ANDRINGITRA – VALLEE DE TSARANORO 6 heures de marche et 700m-  et +300 m de dénivelé",
      description: `Départ après le petit déjeuner pour la descente vers la vallée de Tsaranoro. 
      Possibilité de voir des Pachypodium d’enchyflorum, différentes espèces d’aloès et lézards. Une fois au pied du massif, le chemin continue et nous traversons  plusieurs villages des Barabory où les cultures Betsileo et Bara se mélangent . 
      A partir du village de Morarano, vous entamerez l’ascension du mont Caméléon par le dos. 
      En haut, le point de vue est tout simplement époustouflante (croyez-nous sur parole) sur toute la vallée de Tsaranoro et sur la falaise de Tsaranoro 800m verticale. 
      En redescendant, nous passerons par la forêt sacrée pour voir de près les lémuriens Catta se dorer au soleil.
      Nuit au Camp Catta    
      `
    },
    {
      jour: "Jour 7",
      circuit: "VALLEE DE TSARANORO - RANOMAFANA",
      description: `Transfert pour Ranomafana au petit matin.
      A l’arrivée à Ranomafana, vous rencontrerez notre équipe et traverserez les différents types de forêts qui y existent. La forêt de pandanus en particulier abrite la reine des orchidées, l’Eulophiella. Nous consacrerons la journée entière à la visite de la Grande cascade, des villages Tanala (« le peuple de la forêt ») environnants, à l’observation de lémuriens, d’oiseaux,  de la forêt primaire et de sa flore endémique.
      Nuit en Bivouac    
      `
    },
    {
      jour: "Jour 8",
      circuit: "RANOMAFANA 7 heures de randonnée, assez difficile",
      description: `Début du trekking, traversée de la forêt secondaire pour atteindre la forêt primaire 
      Observation de nombreuses espèces de lémuriens tels que les Varecia Variegata, une des espèces les plus menacées à l’heure actuelle et les Bambous Lémurs. L’extrême majorité des plantes sont endémiques à Madagascar, et la plupart sont médicinales. C’est donc dans cette pharmacie à ciel ouvert que vous évoluerez à Ranomafana.
      Nous enchainerons avec la visite nocturne des alentours du campement pour voir les microcèbes, l’un des plus petits lémuriens de Madagascar, et d'autres animaux nocturnes.
      Campement près du domaine des chercheurs.    
      `
    },
    {
      jour: "Jour 9",
      circuit: "RANOMAFANA",
      description: `
      Après le petit déjeuner, traversée de la forêt primaire très dense pour observer d’autres espèces de lémuriens et la flore locale. Cette grande balade vous révèlera la grande cascade et le reste de la faune et de la flore présente au cœur de la forêt.
      Déjeuner piquenique.
      Visite des villages typiques Antanala et des thermes.
      Nuit à l’hôtel
  `
    },
    {
      jour: "Jour 10",
      circuit: "RANOMAFANA- TANA",
      description: `Transfert pour Tana. Visite du marché de la digue. Et vol retour le soir 
      `
    }
  ],
  "english": [
    {
      jour: "Day 1",
      circuit: "TANA – FIANARANTSOA",
      description: `Meet and Greet at the international airport of Ivato, and head straight south. Throughout the plains of the highlands, you’ll discover the first amazing scenery of your trip:  the rural villages surrounded by ricefields and the population of farmers whose lifestyle has never changed since the dawn of time.
      After the visit of a traditional foundry, we’ll have lunch and then head down to Antsirabe, the thermal city constructed and developed by norvegian missionaries. This city is ranked first in agriculture and the second in industry in the whole country. The beautiful middle class houses downtown are witnesses of this frivolous era.
      
      We then head farther south, to Fianarantsoa where you’ll spend the night at the hotel.      
      `
    },
    {
      jour: "Day 2",
      circuit: "DESCENTE OF THE MATSIATRA",
      description: `In the morning, we’ll leave for Mahasoabe to start the pirogue descent of the Matsiatra river (around 3 hours). Aboard this traditional pirogue, you’ll cast a glance over the landscapes of the rural betsileo province, throughout ricefields and remote villages. This river is taken by the locals to carry their harvests to the market of Sahambavy. We’ll take a piquenique break near a waterfall .
      Then, we’ll let the pirogues on the riverbanks near Iseta. There, you’ll have your first opportunity of meeting with the locals, before heading on foot to the lake close by. We’ll then walk through the tea plantations and the typical betsileo villages, then towards the conditioning plant. After this big day, we head back to the hotel at Fianarantsoa.      
      `
    },
    {
      jour: "Day 3",
      circuit: "FIANARANTSOA – ANDRINGITRA  small height difference",
      description: `We hit the road pretty early to the mountain range of the Andringitra. On our way, we visit the Soavita winery and the city of Ambalavoa. We’ll also visit a couple craftshops, where traditional Antemoro paper and natural silk are made. After this, time to head to the park of Namoly Valley. The villagers there have kept all the very specific Bestileo values of ethics and you’ll discover how welcoming the Malagasy culture.
      We’ll camp near the village of Ambalamanandray or at the gite      
      `
    },
    {
      jour: "Day 4",
      circuit: "ANDRINGITRA  difference of height : 600m+ 7hours of walking ",
      description: `Leaving early for Mandriampotsy.
      The objective is to climb up to the camping site at the foot of the cliff, at 2100 meters of altitude.you’ll discovert the Asaramanitra circuit and the Belambo forest.
      Lunch at the sacred waterfall. Then the highmountain pastures and it’s amazing landscapes, on the whole valley and the Zomandao river.
      Night on camping site.      
      `
    },
    {
      jour: "Day 5",
      circuit: "ANDRINGITRA : difference of height  600m+ 900m- 7 to 8 hours of walking",
      description: `Waking up before sunrise, we must climb the second highest peak of Madagascar, pic Bobby: 2 hours and a half to go. 
      On top, at 2658m of altitude, after 600m of height, you’ll catch a superb view of the neighboring mountains and the valley down the cliff, filled with the morning light. 
      We’ll have lunch there, and a good break before heading down for the DIAVOLANA circuit, to the back of the mountain and its lunar surrealism. 
      The deserted grass fields seem directly taken out of a science fiction scenery. 
      We’ll then head for Lantaranomby, a forest of palmtrees « ravenea glauca », endemic to this very mountain.
      Night on camping site, next to a refreshing river      
      `
    },
    {
      jour: "Day 6",
      circuit: "ANDRINGITRA – VALLEE DE TSARANORO 6 hours of walking and 700m-  et +300 m of difference in height.",
      description: `After a good breakfast, we leave for the Tsaranoro valley, home of many types of lizzards, aloes, and Pachypodium d’enchyflorum. 
      Once on the foothills, the track crosses several Barabory villages. 
      Here, we can witness a cultural mix, the Betsileo and the Bara. 
      From this point, it’s time to climb up the Mount Chameleon. 
      Once on its back, you’ll get an amazing 360° landscape on the neighboring mountain ranges. 
      On out trip back we’ll walk through the sacred forest and observe some lemurs sunbathing on flat rocks.
      Night at the Camp Catta
      `
    },
    {
      jour: "Day 7",
      circuit: "VALLEE DE TSARANORO - RANOMAFANA",
      description: `We’ll leave early to take the car and go to Ranomafana. 
      This national park is one of the most diverse of the whole island. 
      Everything here is endemic. When you arrive, our team on site will welcome you and take you to the different forests we can find here.
      The pandanus forest, for instance is the sanctuary of the rare “Queen of the orchids”, the Eulophiella. 
      The rest of the day will be devoted to visiting the waterfall and the Tanala (people of the forest) villages around. 
      We’ll see many lemurs, plants and birds endemic of this rainforest.
      Night on camping site.      
      `
    },
    {
      jour: "Day 8",
      circuit: "RANOMAFANA 7 hours of walking, difficult walk",
      description: `We start the day by crossing the secondary forest to observe the Varecia Variegata and other species of Lemurs, among the most threatened like the Bamboo Lemurs.
      The extreme majority of plants here are endemic, and most of them can be used as diverse medicines. The guides will help you understand this out in the open pharmacy and its secrets. As night falls we’ll try to catch a glimpse of the microcèbes, one of the tiniest type of lemur existing, and some other nocturnal animals.
      We’ll camp near the research site in the forest.      
      `
    },
    {
      jour: "Day 9",
      circuit: "RANOMAFANA",
      description: `
      After breakfast, we’ll continue our journey inside the primary rainforest towards the great waterfall.
      A little picnic on site, and we’ll go visit Tanala villages, and the famous thermal baths of Ranomafana (literally “hot water”)
      Night at the hotel
      `
    },
    {
      jour: "Day 10",
      circuit: "RANOMAFANA- TANA",
      description: `Transfer to Tana. We’ll visit « marché de la digue » before heading to the airport.`
    }
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
    localStorage.setItem("style", "none");
    localStorage.setItem("styleEn", "block");
    localStorage.setItem("langue", "english");
    getSchedule(schedule, "english");
    this.textContent = "fran\çais";
    setTimeout(() => {
      location.reload();
    }, 300);
  } else {
    localStorage.setItem("langue", "fran\çais");
    localStorage.setItem("style", "block");
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