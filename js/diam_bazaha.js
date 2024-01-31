const timelineTarget = document.querySelector('#timelineTarget');
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown-menu');

hamburger.onclick = function() {
  dropdown.classList.toggle('open');
}
const schedule = [
  {
    jour: 1,
    circuit: "TANA – FIANARANTSOA",
    description: `Départ de Tana vers le Sud sur la fameuse RN7, en passant par Ambatolampy. Visite de la fonderie.
    A Antsirabe, visite de la ville d'eau et des ses artisans en corne à zébu, broderie, et taillerie de pierre précieuse. 
    Après Transfert sur Fianarantsoa
    Nuit à l’hôtel.
    `
  },
  {
    jour: 2,
    circuit: "DESCENTE DE LA MATSIATRA",
    description: `Départ en direction de Mahasoabe. Pour la descente en pirogues traditionnelles de la rivière Matsiatra à travers les paysages de rizières de la campagne Betsileo, en découvrant au fil de l’eau la vie du fleuve (environ 3 h). La Matsiatra est une rivière qui sépare 2 anciens royaumes Betsileo, c’est aussi une route très empruntée par les villageois car c’est sur cette rivière qu’ils acheminent leur récolte pour le marché de Sahambavy. Arrêt sur la cascade pour le pique nique.
    Nous laisserons les pirogues sur les berges près d’Iseta. Rencontre avec les paysans du village de l’Iseta et  départ à pied pour rejoindre le lac ; Traversée des plantations de thé et des villages typiques betsileo.
    Après  découverte des plantations de thé et de l’usine de conditionnement, nous passons la nuit à l’hôtel.    
    `
  },
  {
    jour: 3,
    circuit: "FIANARANTSOA – ANDRINGITRA  faible dénivelé",
    description: `Départ le matin de bonne heure en direction du massif de l’Andringitra. En chemin, visite du vignoble de Soavita. A Ambalavao, visite d’un 
    atelier de fabrication artisanale de soie sauvage et de papier Antemoro. Puis en piste pour rejoindre l’entrée du parc, petite balade dans la vallée de Namoly, rencontre avec les villageois, traversée des rizières en terrasses. 
    Une petite balade pour comprendre et vivre avec les Betsileo, ces villageois qui ont conservé les vraies valeurs éthiques Malagasy, une promenade où le contact sera le mot d’ordre et où l’on pourra comprendre facilement ce peuple Betsileo, aux nombreuses spécififiités.
    Nuit en bivouac dans le village d’Ambalamanandray ou aux gîtes.
    `
  },
  {
    jour: 4,
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
    jour: 5,
    circuit: "ANDRINGITRA : 600m+ 900m- de dénivelé 7h à 8h de marche",
    description: `Départ matinal avant le lever du soleil pour faire l’ascension du 2eme sommet de Madagascar.  
    2 heures 30 mn de montée pour atteindre le pic Boby le plus haut pic accessible d’une altitude de 2658 m, d’un dénivelé de 600 m .Au sommet, une superbe vue sur les alentours, vous aurez notamment l’occasion de laisser vos impressions dans le  livre d’or. 
    Pique-nique en haute montagne. Descente et départ pour le circuit « DIAVOLANA » et ses paysages lunaires surréalistes dignes d’un décor de science fiction. 
    Descente vers Iantaranomby,  traversée de la forêt de palmiers endémiques à ce versant « ravenea glauca » Nuit en bivouac  au bord d’une rivière dans laquelle vous pourrez vous rafraîchir.    
    `
  },
  {
    jour: 6,
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
    jour: 7,
    circuit: "VALLEE DE TSARANORO - RANOMAFANA",
    description: `Transfert pour Ranomafana au petit matin.
    A l’arrivée à Ranomafana, vous rencontrerez notre équipe et traverserez les différents types de forêts qui y existent. La forêt de pandanus en particulier abrite la reine des orchidées, l’Eulophiella. Nous consacrerons la journée entière à la visite de la Grande cascade, des villages Tanala (« le peuple de la forêt ») environnants, à l’observation de lémuriens, d’oiseaux,  de la forêt primaire et de sa flore endémique.
    Nuit en Bivouac    
    `
  },
  {
    jour: 8,
    circuit: "RANOMAFANA 7 heures de randonnée, assez difficile",
    description: `Début du trekking, traversée de la forêt secondaire pour atteindre la forêt primaire 
    Observation de nombreuses espèces de lémuriens tels que les Varecia Variegata, une des espèces les plus menacées à l’heure actuelle et les Bambous Lémurs. L’extrême majorité des plantes sont endémiques à Madagascar, et la plupart sont médicinales. C’est donc dans cette pharmacie à ciel ouvert que vous évoluerez à Ranomafana.
    Nous enchainerons avec la visite nocturne des alentours du campement pour voir les microcèbes, l’un des plus petits lémuriens de Madagascar, et d'autres animaux nocturnes.
    Campement près du domaine des chercheurs.    
    `
  },
  {
    jour: 9,
    circuit: "RANOMAFANA",
    description: `
    Après le petit déjeuner, traversée de la forêt primaire très dense pour observer d’autres espèces de lémuriens et la flore locale. Cette grande balade vous révèlera la grande cascade et le reste de la faune et de la flore présente au cœur de la forêt.
    Déjeuner piquenique.
    Visite des villages typiques Antanala et des thermes.
    Nuit à l’hôtel
`
  },
  {
    jour: 10,
    circuit: "RANOMAFANA- TANA",
    description: `Transfert pour Tana. Visite du marché de la digue. Et vol retour le soir 
    `
  }
];

for (let data of schedule) {
  if (Array.isArray(data.description)) {
    if (data.jour === 9) {
      let htmlContent = '';
      for (let [circuit, description] of Object.entries(data.description[0])) {
        htmlContent +=
          `<p>
            <b>- ${circuit}</b> : ${description} 
          </p>`;
      }
      timelineTarget.innerHTML +=
        `<li class="event" data-date="Jour ${data.jour}">
          <h4 class="mb-3">${data.circuit}</h4>
          ${htmlContent}
        </li>`;
    }
  } else {
    timelineTarget.innerHTML +=
      `<li class="event" data-date="Jour ${data.jour}">
        <h4 class="mb-3">${data.circuit}</h4>
        <p>
          ${data.description} 
        </p>
      </li>`;
  }
}


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