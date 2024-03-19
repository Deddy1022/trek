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
      circuit: "TANA - TULEAR - IFATY",
      description: `Vol pour Tuléar. Accueil et départ pour Ifaty par  la piste côtière, passage dans des nombreux villages typiques Vezo. Déjeuner libre.
      Nuit et dîner au bord du lagon.      
      `
    },
    {
      jour: "Jour 2",
      circuit: "IFATY",
      description: `Le lagon de Ranobe ou d’Ifaty est un site de plongée mondialement connu et l’un des plus beaux lagons de la planète, il offre sur plus de 40km des sites de plongée exceptionnels qui figurent parmi les plus prisés de la Grande île. Avec ses eaux limpides, ce lagon constitue un véritable joyau écologique en raison de sa faune et  de sa flore extrêmement riches. Il comporte deux grandes passes qui garantissent chacune une fascination à tous les plongeurs qui y viennent pour contempler ses fonds marins très caractéristiques.
      Déjeuner libre.
      Les courants chauds et froids émergents viennent soutenir et alimenter de grandes quantités de plancton microscopique et de krill, principale source de nourriture qui prend en charge une vaste gamme d’espèces – jusqu’à 46 types de coraux et plus de 400 espèces de poissons, seuls. Un coup d’œil sur une carte marine révèle un autre secret profond: des canyons serpentant le long de la barrière de corail, offrant des sites de plongée exceptionnels et des habitats coralliens sains.
      Nuit et dîner à l’hôtel `
    },
    {
      jour: "Jour 3",
      circuit: "IFATY - ISALO",
      description: `Petit déjeuner à l’hôtel, puis transfert sur Tuléar. Déjeuner libre.
      Départ pour le parc national de l’Isalo. En route : tombeaux Antandroy et Mahafaly, village des saphirs. Visite d’une mine de saphir à ciel ouvert.
      Coucher de soleil sur la fenêtre naturelle de l’Isalo. 
      Nuit et dîner  à l’hôtel.
      `
    },
    {
      jour: "Jour 4",
      circuit: "RANOHIRA PARC NATIONAL DE L'ISALO - ANDRINGITRA",
      description: `Petit-déjeuner à l’hôtel et départ pour une découverte des canyons d’Anamaza. La marche débute facilement avec la traversée d’un plateau aux allures de savane africaine. Ensuite commence la descente vers le fond d’un vallon escarpé sur un sentier bien aménagé avec ses escaliers pour la sécurité des « autres » touristes moins aventureux. Et au fond coule la Namaza, au bord de laquelle une agréable forêt protectrice du soleil abrite des lémuriens peu farouches. En remontant le cours d’eau sur environ 30 minutes, arrivée à la somptueuse cascade des Nymphes et ses eaux fraîches accueillantes, dans un décor sombre où le soleil ne perce jamais les eaux limpides.  La différence de décors entre la plaine désertique et les profondeurs luxuriantes du canyon est tout simplement unique en son genre.
      De là, rejoindre la voiture pour la somptueuse vallée de Tsaranoro. Déjeuner libre.
      Nuit et dîner au lodge
      `
    },
    {
      jour: "Jour 5",
      circuit: "ANDRINGITRA",
      description: `Après le petit déjeuner à la fraîcheur de l’aube, nous commencerons par aller visiter une forge artisanale afin de découvrir l’art de façonner les outils agricoles. Ici, le forgeron vous initiera à quelques gestes avec le marteau et le soufflet en main. 
      Après cette leçon,  nous retournerons au gîte pour le déjeuner, puis nous irons visiter les tisseuses et découvrir comment se travaille la soie sauvage dans cette région de Madagascar. 
      Pour terminer le séjour, retour à Ambohimahamasina le chef-lieu de commune, puis direction Ambalavao en voiture.
      Nuit et dîner à l’hôtel.    
      `
    },
    {
      jour: "Jour 6",
      circuit: "AMBALAVAO – ANDRINGITRA 4 heures de marche et 400 m de dénivelé",
      description: `"EXCURSION MONT CAMELEON" : pique-nique fourni
      500m+ de dénivelé pour 4 à 5h de marche aller et retour.
      A la sortie du Camp, traversée de la forêt sacrée du Tsaranoro, cimetière des habitants de la vallée. Départ de bon matin, pour avoir de fortes chances de voir des lémuriens se réchauffant au soleil. Après une petite grimpette en direction du Tsaranoro, bifurcation pour traverser le torrent qui vient du plateau. Courte pause rafraîchissante et marche le long du torrent, jusqu'à déboucher sur le plateau. Bifurcation sur la gauche en direction du sommet de Langera dit "Le Caméléon". Après un dernier raidillon, la prudence est conseillée pour atteindre l'arête : la vue  sur les alentours  vaut pourtant la peine : le panorama est à couper le souffle. Après le pique-nique, ou juste un en-cas en fonction de l'heure, redescente en direction du village de Morarano, puis du camp par le fond de vallée. La marche en fond de vallée est souvent chaude : arrêt possible le long de la rivière pour rafraîchissement. Nuit et dîner au lodge      
      `
    },
    {
      jour: "Jour 7",
      circuit: "ANDRINGITRA - FIANARANTSOA",
      description: `Petit déjeuner.<br>
      Et en route pour Fianarantsoa. Passage à Ambalavao, Découverte du marché aux zébus et du grand marché hebdomadaire d’Ambalavao (le mercredi seulement). Une visite à ne pas manquer, authentique et pleine de vie et de couleurs. Découverte du marché au zébu (le mercredi) 2000 têtes par semaine, le 2eme plus grand marché aux bestiaux de l’île. Petit tour dans le grand marché à ciel ouvert : ici les gens font encore des trocs comme avant (échange de riz contre huile ou sucre ou légume ou parfois même de la viande.). 
      Visite de la réserve de tourisme équitable Anjah, possibilité de voir les lémurs catta. Déjeuner libre.
      Visite de l’atelier de fabrication du papier Antemoro, et du tissage de soie sauvage. Arrivée à Fianarantsoa l’après-midi. Visite de l’atelier du photographe Pierrot Men et de la fameuse vieille ville. 
      Nuit à l’hôtel
      <br>Dîner libre
      `
    },
    {
      jour: "Jour 8",
      circuit: "FIANARANTSOA - AMBOSITRA - ANTSIRABE",
      description: `Petit-déjeuners et  départ pour Ambositra, capitale de l’artisanat malgache et du travail du bois. Visites des boutiques et des ateliers des artisans Zafimaniry. Déjeuner libre à Ambositra. Nuit et dîner à l’Hôtel
      `
    },
    {
      jour: "Jour 9",
      circuit: "VALLEE DE TSARANORO   ou journée repos au camp <br>Excursion possible dans la journée pique nique fourni.",
      description: `
        Découverte de la ville d’eau en pousse pousse pour voir découvrir les ateliers artisanaux de la région Vakinakaratra (broderie, travailleurs pousse pousse miniature, et miniature). L’après-midi départ pour Tana. Déjeuner libre.
        Nuit et dîner à l’hôtel
        `,
    },
    {
      jour: "Jour 10",
      circuit: "TANA - DIEGO SUAREZ",
      description: `Accueil à l’aéroport puis transfert de l'aéroport vers votre hôtel à Diego.
      Visite de la ville de Diego à la découverte de son passé colonial : les comptoirs à colonnades, les vieilles maisons coloniales, le marché et le port. Déjeuner libre.
      Ville chargée d'histoire, Diego-Suarez devrait son nom à un marin portugais, premier européen à avoir posé le pied sur les plages de Madagascar au début du 16ème siècle. D’après certaines sources, ce serait également à Diego qu'aurait été créée la république pirate de Libertalia, pionnière d'un état communiste et cosmopolite.
      Mais Diego Suarez est surtout connu pour sa baie et son port naturel qui servit de base navale française de 1885 à 1973. La longue présence française se ressent partout dans la ville : par ses belles maisons coloniales décaties, par l'ancien Hôtel de la Marine laissé à l'abandon, et les navires échoués dans la rade, sans compter la statue de Joffre ou le vieux kiosque à musique de l'époque coloniale. Diner et nuit à l’hôtel      
      `
    },
    {
      jour: "Jour 11",
      circuit: "LES 3 BAIES PIQUE-NIQUE FOURNI",
      description: `Nous quittons Diégo Suarez le matin vers 9h00 en direction de Ramena. Nous passons successivement devant l'îlot sacré du Pain de sucre puis devant la Montagne des Français tout en longeant la Baie de Diego, seconde plus grande baie au monde après celle de Rio de Janeiro.
      Nous empruntons alors un chemin de terre rouge qui laisse peu à peu la place au sable, dessinant un tracé agréable en pleine brousse. Il mène jusqu'au pied d'un baobab centenaire. A quelques minutes se trouve la Baie des Sakalava, du nom de l'ethnie majoritaire du nord de Madagascar.
      Viennent ensuite la Baie des Pigeons puis la Baie des Dunes au sable blanc et fin. Après une courte montée à sensations débouchant sur un panorama unique, nous prenons tout le temps de nous baigner tant le site est magique et naturel. Des vestiges historiques de l'époque coloniale sont présents au phare du Cap Miné et le guide vous donnera tous les détails souhaités !
      Au village de Ramena, nous prenons un repas complet au restaurant en bord de mer suivi selon les envies d'un massage à l'huile de ylang-ylang ou d'une sieste réparatrice.
      Après le repas, nous redémarrons les quads pour sillonner au travers de la brousse par des pistes fort amusantes. Le sable teinté de rouge vire soudain au blanc pur qui contraste avec le vert des arbustres alentour. Le tracé est magnifique et l'on passe d'un paysage à l'autre avec émerveillement.          
      `
    },
    {
      jour: "Jour 12",
      circuit: "DIEGO - MONTAGNE D'AMBRES",
      description: `Route de Diego Suarez vers Joffre ville (1h) ; cette journée sera consacrée à la visite du Parc National de la montagne d'Ambre avec un guide spécialiste du parc. Déjeuner pique-nique.
      Situé entre 850 et 1474 m d'altitude, le Parc National de la Montagne d'Ambre a été le premier parc créé pour préserver la faune, la flore ainsi que le massif lui-même. Sa forêt tropicale humide, comparable à bien des égards aux forêts de l'Est malgache, abrite des arbres atteignant jusqu'à 40m de hauteur. Le jardin botanique permet d'observer orchidées, palmiers, lianes et autres broméliacées. On notera également le très rare baobab de la forêt pluviale, l'Adansonia perrieri. De nombreuses espèces sont communes à la région Est mais quelques-unes sont uniques au parc : 7 espèces de lémuriens dont le maki couronné, le maki brun de Sanford, et le très rarement visible Aye Aye. La mangouste à queue annelée est le mammifère le plus fréquemment observé, ainsi que 36 espèces de papillons et une grande variété de grenouilles, serpents, et caméléons. Nuit et dîner  à l’hôtel      
      `
    },
    {
      jour: "13",
      circuit: "MONTAGNE D'AMBRES - ANKARATRA",
      description: `Route de Joffre ville vers le Parc National de l'Ankarana, à proximité d'Ambilobe (2h).
      Avec un guide spécialiste du parc, première découverte du Parc de l'Ankarana avec la visite des "Petits Tsingys" et d'une grotte pour observer stalactites, stalagmites et orgues calcaires. Un petit circuit permet de passer par 3 sites différents : La "perte des rivières", gouffre naturel karstique en hémicycle qui fait penser à un amphithéâtre romain, les "Tsingy Meva" qui permettent une première approche de ce curieux phénomène géologique et la de "Grotte des Chauves-souris", avec ses impressionnantes stalactites, stalagmites et orgues de calcaires. A la lumière des torches, vous découvrirez l'éclat de cristal de la roche mais aussi...des milliers de chauves-souris suspendues aux parois.
      Inscrit au patrimoine mondial de l'UNESCO, le Parc National de l'Ankarana est sans doute notre étape favorite dans le cadre d'un circuit au Nord de Madagascar.
      D'une superficie de 18 200 ha sur 35 km de long, il est constitué d'étonnantes formations rocheuses d'origine coralliennes que les malgaches appellent "Tsingy". Plus modestes par leur hauteur que les célèbres Tsingy de Bemaraha au Nord-Ouest du pays, les tsingy de l'Ankarana sont spectaculaires par leur étendue et bien plus faciles d'accès. Vous serez immanquablement séduits par ces aiguilles de calcaires pointées vers le ciel et parcourues par de longs canyons. Différents itinéraires de randonnées de durée variées sont possibles: découverte des "petits Tsingy", des grands "Tsingys de Benavony" et de la partie Ouest du parc plus rarement explorée.
      Les cactées telles que les euphorbes et les pachypodium dominent sur les Tsingy élevés et arides. Une forêt sèche pousse à la périphérie et entre les canyons, abritant canneliers, figuiers et baobabs. Le parc compte une dizaine d'espèces de lémuriens, telles que le maki couronné et le maki brun de Sanford. D'autres mammifères sont présents tels que tenrecs, fosas et mangoustes. On peut également y observer une grande variété d'oiseaux: martin pêcheur, coua huppé, l'aigle pêcheur de Madagascar ou le tantale ibis à crête. Déjeuner pique nique.      
      `
    },
    {
      jour: "14",
      circuit: "ANKARATRA - ANKIFY",
      description: `Journée consacrée à la visite des Grands Tsingy de l'Ankarana ou "Tsingy de Benavony" avec un guide spécialiste, déjeuner pique-nique.
      Notre itinéraire favori nécessite 3 à 4 heures de randonnée; Il passe par une forêt sèche caduque puis par les "Tsingy des Tourelles", véritables petites tours et canyons de pierre. Vous arriverez ensuite à un pont suspendu sur le canyon (très western) et un panorama de Tsingy à perte de vue. Simplement grandiose !
      Ce circuit nécessite d'être en bonne forme physique car il peut faire très chaud et le sentier aménagé sur les roches est souvent escarpé. Pour les plus petits marcheurs, des itinéraires plus courts sont possibles. Le choix d'un itinéraire sera décidé sur place avec votre guide en fonction de votre forme et de vos envies.
      Après-midi en route pour Ankify via Ambanja et la vallée du Sambirano, au milieu des plantations d'ylang ylang, de cacao et de café. Visite d'une plantation de cacao, avec découverte du processus de culture du cacao et de distillation par alambic d'huiles essentielles. Nuit et dîner à l’hôtel      
      `
    },
    {
      jour: "15 au 17",
      circuit: "NOSY BE",
      description: `Transfert très tôt le matin pour Nosy Be.
      4 jours et 3 nuits en demi-pension
      Journées libres
      Nosy Be est surnommée « l’île aux parfums », pour sa culture de Ylang-Ylang, fleurs à la senteur inoubliable, nécessaire à la production des parfums et pour sa culture de vanille, orchidée à l’origine sauvage, connue comme l’une des meilleures au monde… Allez découvrir les cultures de Ylang-Ylang et de Vanille qui méritent véritablement le détour. 
      Le marché d’Hell-Ville est le lieu de la vie quotidienne. Vous y trouverez l’ambiance malgache, des fruits, des épices, de la vannerie, les odeurs et couleurs resteront imprégnées dans votre mémoire… 
      Un petit archipel au Nord de l’île est un lieu à découvrir, « les Mitsios » sont un groupement d’îles, une seule, la grande Mitsio, est habitée, ces îles isolées du monde sont un véritable paradis au milieu de l’océan, vous pourrez y voir des formations volcaniques telles que des orgues basaltiques, des Fous à Pieds bleus (des oiseaux marins dont les pieds sont incroyablement colorés) et les fonds sous-marins regorgent de surprises dans cette eau turquoise transparente aux coraux multicolores. 
      Nuitées et dîners  à l’hôtel;      
      `
    },
    {
      jour: "18",
      circuit: "NOSY BE - TANA",
      description: `Vol pour Tana. Découverte de la capitale : visite de la ville haute et du marché de la digue.
      Transfert à l’aéroport  pour le vol retour
      Fin de la prestation      
      `
    },
  ],
  "english": [
    {
      jour: "Day 1",
      circuit: "TANA - TULEAR - IFATY",
      description: `Meet and greet at the airport and then Flight to Tuléar. Once arrived we’ll take the car on the coast road to Ifaty, you’ll get a glimpse of the typical Vezo villages on the way and you will have free lunch on the beach.
      Night and diner on the lagoon.
      ` 
    },
    {
      jour: "Day 2",
      circuit: "IFATY",
      description: `This lagoon of Ranobe is a world famous diving site and one of the most beautiful lagoon on the planet. It offers on more than 40km of coral reef some of the most sought after locations to observe underwater wildlife. Its crystalline blue water and its extremely rich fauna and flora truly make it an ecological jewel. There are two channels, with really characteristic floors that will guarantee fascination to the diver inside you.
      Free lunch.
      The mixing flows of warm and cold water come sustain the great quantities of plankton and krill that nourish more than 400 species of fish and 46 types of coral reef. A glimpse on a marine map will reveal another secret, way deeper. There are canyons that run along the barrier, offering exceptional and preserved sites.
      Night and diner at the hotel
      `
    },
    {
      jour: "Day 3",
      circuit: "IFATY - ISALO",
      description: `Breakfast at the hotel. Transfer to Tulear and free lunch there.
      After a good meal, let’s head to the city of Ranohira, and the national park of Isalo. On the way, a look at some familial tombs of the Antandroy and the Mahafaly tribes and the sapphire cities that popped out of nowhere in the desert, where the thirst for blue stones is just too strong. 
      We’ll admire the sunset at the Isalo Window and then head to the hotel, to eat and rest. 
      ` 
    },
    {
      jour: "Day 4",
      circuit: "RANOHIRA ISALO NATIONAL PARK - ANDRINGITRA",
      description: `Pretty early in the morning, in order to avoid the hottest time of the day, we’ll go visit the Makis Canyons, where three different species of lemurs live. We’ll get a good look at the panorama on the park and its incredible stone formations. All the neighboring mountain range share this feature and, after a small walk, we’ll go swim in a beautiful natural pool, inside an incredible tiny oasis in the deserted plateau.
      Night and diner at the hotel
      `
    },
    {
      jour: "Day 5",
      circuit: "ANDRINGITRA",
      description: `Today, it’s the Anamaza canyons that we head for. It starts slowly as we cross a savanna-looking plateau and head down deep in a steep valley. The way down is well fitted out for the safety of less adventurous visitors. In the middle of the canyon runs the Namaza, a little stream protected by a comfortable forest that harbors a really laid back population of lemurs. There are not shy and we’ll see many of them while going up the water towards the beautiful waterfall of the Nymphs and its fresh waters. The difference of landscape and sensations between here and the plateau above is striking and really specific to this place.
      From there, you’ll take the car and go to the Tsaranoro valley. Free lunch.
      Night and diner at the hotel.
      ` 
    },
    {
      jour: "Day 6",
      circuit: "AMBALAVAO – ANDRINGITRA 4 hours hike and 400 m elevation gain",
      description: `"PEAK CAMELEON EXCURSION": picnic included
      500m+ of difference in height for 4 to 5 hours of walking roundtrip.
      We leave early the camp and start by crossing the sacred forest of Tsaranoro, graveyard of the locals of the valley. Many lemurs chill out here, have sunbaths on the flat rocks. We have to climb a little towards the foot of the cliff and cross a water stream and then walk alongside the water to reach the plateau of Tsaranoro. A little break and we go meet with the Chameleon, the Langera summit. It’s a little steep and care is needed to reach the top, but when we get there, you won’t regret a thing. The 360 panorama is just breath taking. You will have all lunch (or just a snack depending on the hour) to appreciate it. We head back to the village of Morarano then, and to the camp. It’s a hot time of the day and you might appreciate a bath in the river.
      Night and Diner at the Lodge.
      ` 
    },
    {
      jour: "Day 7",
      circuit: "ANDRINGITRA - FIANARANTSOA",
      description: `Breakfast.
      Time to head for the capital of the Betsileo people, Fianarantsoa. We go through Ambalavoa and discover the zebu market:  a great weekly event on Wednesdays only, where everything sellable is buyable.  More than 2000 heads a week, the second biggest market of this type on the Island. A little walk there, people still trade here, without money, exchanging with rice, meat, sugar and vegetables
      Visit of the Anjah sustainable park, a reserve of more than 300 lemurs. Free lunch there.
      We’ll also take a look of the crafting of Antemoro paper, and the weaving of wild silk. We’ll get to Fianarantsoa in the afternoon and visit the photograph Pierrot Men shop, and the old city, full of churches and religious center of the island.
      Night at the hotel
      `      
    },
    {
      jour: "Day 8",
      circuit: "FIANARANTSOA - AMBOSITRA - ANTSIRABE",
      description: `Today, we go to Ambositra, the capital of craftsmanship in Madagascar. Woodcarving among other things is the specialty here.
      We’ll visit the shops and workshops, and you’ll learn for instance how to carve a zebu horn.
      Night and diner at the hotel after visiting a Zafimaniry village.
      `
    },
    {
      jour: "Day 9",
      circuit: "TSARANORO VALLEY or rest day at the camp <br>Possible excursion in the day picnic provided.",
      description: `Antsirabe is the water city of the Vakinakaratra region. Embroidery and all types of craft are done here. Aboard a local pousse pousse, you’ll hit these streets constructed and developed by norvegian missionaries. This city is ranked first in agriculture and the second in industry in the whole country. The beautiful middle class houses downtown are witnesses of this frivolous era.
      Night and diner at the hotel.
      `
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