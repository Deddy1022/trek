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
  "français": [
    {
      jour: "Jour 1",
      circuit: "ANTANANARIVO – ANTSIRABE, 170km soit 3H 30 de route",
      description: `Cap vers le sud de Madagascar, paysage des hautes terres, des villages entourés de rizières. 
      Découverte du monde rural des Hautes Terres (architecture, mode de vie).  Antsirabe, ville thermale, développé par les missionnaires Norvégiens. 
      Elle est la première ville agricole et aussi la deuxième ville industrielle et de Mada avec ses maisons bourgeoises environnantes superbes. Déjeuner libre.
      Nuit à l’hôtel.    
      `
    },
    {
      jour: "Jour 2",
      circuit: "ANTSIRABE - FIANARANTSOA 240 km soit 5 heures et 30 minute de route",
      description: `Visite de la ville d’eau en pousse pousse : taillerie de pierres précieuses, travailleurs de corne de Zébu et atelier de broderie.
      Puis départ pour Fianarantsoa. Passage dans la ville d’Ambositra, visite des ateliers : sculptures en bois et de la marqueterie. Déjeuner libre.
      Fin d’après midi, arrivée sur Fianarantsoa.
      Nuit à l’hôtel.    
      `
    },
    {
      jour: "Jour 3",
      circuit: "FIANARANTSOA - AMBALAVAO  - ANDRINGITRA 4 heures de piste et  3 heures de marche avec faible dénivelé",
      description: `Avant de partir en direction du massif de l’Andringitra, vous pourrez profiter de la visite du vignoble de Soavita et déguster leurs vins, visite d’un atelier de fabrication artisanale de soie sauvage et de papier Antemoro. Après on attaque la piste qui conduit à l’entrée du parc national sur environ 45 km. 
      Superbes paysages que vous aurez le temps de contempler vu l’état de la piste. 
      Arrivée à Namoly, départ pour la première randonnée de 3 heures de marche à travers des villages Betsileo puis la forêt d’Imaitso. 
      Cette forêt abrite un grand nombre de végétation dont la plupart d’entre eux ont la vertu médicinale, votre guide fera le plaisir de vous dévoiler le secret de certains d’entre eux. Votre premier bivouac s’effectuera au lieu de campement d’Imaitso, à l’entrée de la forêt.`
    },
    {
      jour: "Jour 4",
      circuit: "IMAINTSO – AMPASIMPOTSY – ANDRIAMPOTSY  7 heures de marche, dénivelée 700m+",
      description: `Le chemin débute facilement à travers la forêt de l’est : début du corridor forestier qui relie le Parc National de l’Andringitra et le Parc National de Ranomafana. 
      Durant le parcours, vous avez le temps d’admirer la richesse végétative de cette forêt et avec un peu de chance, vous avez la possibilité de voir quelques lémuriens habitant de cette forêt tel que le fulvus ou rubriventer. 
      Au bout d’une heure de marche, vous attaquez une belle montée laquelle vers la fin un très beau panorama sur le paysage Tanala et la vallée de Namoly. 
      Le sentier continue à sillonner le plateau d’Ampasipotsy avec ses végétations alti-montagnes adaptés au microclimat local. 
      Déjeuner pique nique au milieu de ce plateau. 
      A quelques minutes de marche avant d’arriver au bivouac, une baignade bien méritée vous récompense la journée à la piscine naturelle d’Andreatelo. 
      L’eau est très claire mais attention  elle est bien fraîche. Continuation jusqu’au bivouac d’Andriampotsy à 2 050 m pour une bonne nuit de sommeil.`
    },
    {
      jour: "Jour 5",
      circuit: "ANDRIAMPOTSY – PIC BOBY – DIAVOLANA – IATARANOMBY 9 heures de marche et 600m+ 900m- de dénivelé",
      description: `Départ très tôt  pour attaquer l’ascension du pic Boby. La crête sur laquelle se situe le sommet est très exposée aux influences climatiques de l’Est avec une forte humidité qui peut rapidement couvrir les sommets et gâcher ainsi votre belle montée vers ce pic prestigieux de Madagascar. 
      Après seulement 2 h 30 de marche, vous atteindrez le pic d’où vous pourrez profiter d’un panorama d’exception sur l’ensemble de la région. 
      Par très beau temps, on peut même apercevoir le massif de l’Isalo plus au Sud. Redescente puis continuation sur le circuit « extra-terrestre ». 
      Vous comprendrez très vite pourquoi ce circuit s’appelle ainsi. Paysages lunaires surréalistes dans un cadre très montagne que vous n’oublierez pas. 
      Sur la descente après ce superbe paysage vous traversez la forêt de palmier endémique de cette versant « ravenea glauca » jusqu’au camping d’Iantaranomby au bord d’une rivière dans lequel vous pouvez vous rafraîchir.
      `
    },
    {
      jour: "Jour 6",
      circuit: "ANDRINGITRA - CAMP CATTA (4 heures de marche et 700m- de dénivelé)",
      description: `Après le petit déjeuner ; descente vers la vallée de Tsaranoro. Possibilité de voir des Pachypodium d’enchyflorum, différentes espèces d’aloès et lézards. Une fois un pied du massif, le chemin continue à traverser plusieurs villages des Barabory ; les cultures Betsileo et Bara se mélange. A partir du village de Morarano, traverser de la magnifique vallée du Tsaranoro.  Nuit dans un bungalow.`,
    },
    {
      jour: "Jour 7",
      circuit: "CAMP CATTA",
      description: `
      Au choix et pique nique fourni:
      - <strong>EXCURSION MONT CAMELEON</strong> : 500m+ de dénivelé pour 4 à 5h de marche aller et retour.
      A la sortie du Camp, traversée de la forêt sacrée du Tsaranoro, cimetière des habitants de la vallée. Départ de bon matin, pour avoir de fortes chances de voir des lémuriens se réchauffant au soleil. Après une petite grimpette en direction du Tsaranoro, bifurcation pour traverser le torrent qui vient du plateau. Courte pause rafraîchissante et marche le long du torrent, jusqu'à déboucher sur le plateau. Bifurcation sur la gauche en direction du sommet de Langera dit "Le Caméléon". Après un dernier raidillon, la prudence est conseillée pour atteindre l'arête : vue superbe sur le alentour. Après le pique-nique, ou juste un en-cas en fonction de l'heure, redescente en direction du village de Morarano, puis du camp par le fond de vallée. La marche en fond de vallée est souvent chaude : arrêt possible le long de la rivière pour rafraîchissement. Nuit en Bungalow.
      - <strong>LE GRAND TSARANORO</strong> : C’est une randonnée d’une journée. Vous partez tôt dans la matinée. Depuis le camp, il y a 4h à 4h30 de marche pour atteindre derrière le haut du Tsaranoro (le Mont Tsaranoro même n’est accessible qu’en escalade). Au milieu de la colline, vous trouverez les tombeaux Bara insérés dans la colline même. Sur la dernière partie de la montée, il y a un passage difficile. A l’arrivée, vous aurez une vue superbe sur les montagnes du Sud Malgache. Le déjeuner pique-nique sera pris au sommet, derrière le Tsaranoro. Pour redescendre, il faut compter environ 3 heures. Nuit en Bungalow.
      `
    },
    {
      jour: "Jour 8",
      circuit: "CAMP CATTA - RANOHIRA (5 heures de route et de piste)",
      description: `La route du Sud qui mène à Ranohira prend alors des airs de solitude avec des 
      monolithes granitiques et une végétation plus éparse. Passé la ville d’Ihosy, le fameux plateau d’Ihorombe s’étend à l’infini pour finalement parvenir face au somptueux massif de l’Isalo. Déjeuner libre.
      Nuit à l’hôtel.    
      `
    },
    {
      jour: "Jour 9",
      circuit: "RANOHIRA - BERONONO (MAKAY) 10 à 11 heures de piste",
      description: `
      Départ en 4x4 pour le massif du  Makay. Traversée de savane sur piste le long de la chaîne de l’Isalo. L’état de la piste est assez dégradé, 
      ce qui rend l’accès long et difficile. Traversé en bac pour rejoindre le village de Beronono. Pique nique en route.
      Nuit en bivouac.\n
      <h3>MASSIF DU MAKAY</h3>\n
      Le Makay est un massif de 7.500 km2 situé au sud-ouest de Madagascar. Il fait partie de la commune de Beroroha, où la civilisation s’arrête et la nature commence à s’imposer. Le massif du Makay est formé de centaines de canyons inextricables, 
      il protège une biodiversité unique depuis des millions d’années. Ce massif est considéré comme le dernier paradis des aventuriers et des randonneurs qui veulent sortir des sentiers traditionnels. Ce massif n’est pas encore classé « Parc National » mais il renferme de nombreuses espèces endémiques. Grâce à son isolement, ce massif est protégé par l’impact nocif de l’homme. Ce sanctuaire de la nature protège de nombreuses espèces : lémuriens, crocodiles, nombreux oiseaux, insectes.
      Ici nous sommes dans un autre environnement hors du temps. Le massif du Makay reste le dernier paradis pour les randonneurs de Madagascar. Préserver et mystérieux. Durant notre progression nous serons amenés à découvrir la nature intacte de la grande île.
      `
    },
    {
      jour: "Jour 10 au 14",
      circuit: "MASSIF DU MAKAY   Trek de 6 à 9heures par jour",
      description: `
      Ce sont 5 jours complets de randonnées qui nous attendent dans le Makay. Pour commencer à rêver, le Makay est sans nul doute, l’une des œuvres de la nature la plus monumentale qui existe sur l’île. Peu de gens, même à Madagascar en connaisse l’existence. Ce massif de grès jaunes présente des parties en hauteurs encore couvertes par une forêt ou une végétation arbustive typique des milieux secs de l’ouest malgache. Au fin fond de chaque canyon ou vallée, « une vie » s’y est développée : des lémuriens, reptiles, serpent, crocodiles. Un endroit entièrement vierge de toute observation humaine ce qui a permis à la nature d’en être le maitre absolu.
      Au cours des randonnées, nous alternons entre les crêtes de ce massif, dont les différentes couleurs forment un arc en ciel naturel et éternel, les canyons aux crevasses ensablées, les points de vue, les forêts denses, les lacs sacrés, les piscines naturelles, les grottes avec des peintures rupestres…. 
      Chaque instant sera à apprécier. Ici, nous rencontrerons certainement les « Bara », l’ethnie semi-nomade qui occupe les plateaux inférieurs du sud de l'île. L’occasion de vivre et de comprendre leur vie et leur quotidien qui est si éloigné de toute forme de civilisation. Ils nous feront découvrir leur technique de distillation du rhum local à base de Tamarin et de canne a sucre !!
      Après l’effort de chaque journée, le réconfort... l’équipe locale se fera un plaisir de vous préparer de bon repas simples mais savoureux, bien copieux et complets. Le campement sera installé proche d’un point d’eau, une petite rivière…
      Ici, on nous demandera de ne laisser derrière nous que l’unique emprunte de nos pieds. 
      Nuit en bivouacs.
      `
    },
    {
      jour: "Jour 15",
      circuit: "MAKAY - RANOHIRA 9heures de piste",
      description: `Départ en 4x4 après le petit déjeuner pour Ranohira. Pique nique en route. Nuit a l’hôtel.
      `
    },
    {
      jour: "Jour 16",
      circuit: "RANOHIRA – TULEAR - IFATY  5heures pour 240 km de route",
      description: `Départ en voiture pour une traversée du Sud profond en passant dans le village des saphirs et en route pour LES BAOBABS. Après transfert sur Ifaty. Nuit au bord du canal de Mozambique inclut. Déjeuner libre.
      Nuit au bord de la mer
      `
    },
    {
      jour: "Jour 16 et 17",
      circuit: "IFATY",
      description: `Le village d’Ifaty offre de belles plages bordées par des villages de pêcheurs Vezo. Autrefois nomades, les Vezo semblent petit à petit s’y sédentariser. A croire qu’ils ont trouvé à Ifaty un lieu paisible et agréable à vivre, un petit coin de paradis!
      Mais Ifaty doit avant tout sa réputation à la beauté de ses fonds marins. Le lagon de Ranobe est un site exceptionnel pour la pêche et la découverte sous-marine. Classée parmi les plus grandes de l'île, cette barrière de corail regorge de spots de plongée dans lesquels foisonnent une multitude d'espèces marines ; certains vont même jusqu’à dire qu’Ifaty compte parmi les plus beaux sites de plongée au monde.
      Amateurs de plongée, de pêche traditionnels ou pêches aux gros  ou de farniente, vous trouverez votre bonheur ici. 
      Nuit à l’hôtel
      `
    },
    {
      jour: "Jour 18",
      circuit: "IFATY – TANA",
      description: `Transfert à l’aéroport, vol pour Tana. Visite de la capitale et du marché de la digue. Transfert à l’aéroport        et vol retour.
      Fin de nos prestations.    
      `
    },
  ],
  "english" : [
    {
      jour: "Day 1",
      circuit: "ANTANANARIVO – ANTSIRABE, 170km, around 3H30 on the road",
      description: `Meet and greet directly at the international airport of Ivato, and head straight south. Throughout the plains of the highlands, you’ll discover the first amazing scenery of your trip:  the rural villages surrounded by rice fields and the population of farmers whose lifestyle has not changed since the dawn of time
      We’ll stop to visit the city of Ambatolampy; well known for its aluminum craftsmanship.
      Free lunch before Antsirabe, the thermal city constructed and developed by Norwegian missionaries. This city is ranked first in agriculture and the second in industry in the whole country. The beautiful middle class houses downtown are witnesses of this frivolous era. 
      Then we keep on heading south to reach the lakes Tritriva and Andraikiba.
      Diner and night at the hotel
      `
    },
    {
      jour: "Day 2",
      circuit: "ANTSIRABE - FIANARANTSOA 240 kms : 5 hour and a half on the road.",
      description: `We will start by visiting the city on a pousse pousse, the jewelers and craftsmen are many here, they work with wood and leather, but also with zebus’ horns and clay.
      We then head to Fianarantsoa. On our way, we’ll stop by the little city of Ambositra. At 1200 meters of altitude, it’s a commercial crossroad of the Zafimaniry tribes and the rest of Madagascar. It’s the capital of craftsmanship, people come from every corner of the country to sell their work. We’ll have a walk in the city and visit the craft shop of a wood sculptor. Free lunch.
      The road then goes through the Betsileo land, the main ethnic group in the province of Fianarantsoa .The typical red clay houses and the intricate shapes of the rice fields are good testimonies of the tremendous work started centuries ago in this region that is particularly hard to cultivate. 
      Night at the hotel in Fianarantsoa      
      `
    },
    {
      jour: "Day 3",
      circuit: "FIANARANTSOA - AMBALAVAO  - ANDRINGITRA 4 hours on a track and three hours walking with a small difference in height.",
      description: `Before heading to the Andringitra, you’ll get a glimpse of the local wine making. Visiting the Soavita vineyard, you’ll try the different wines and, in Ambalavao take a look of the crafting of Antemoro paper.  This savoir faire was brought by Arabs during the fifteenth century and is based on the bark of the blackberry tree. We will also stop by a weaving craft shop where wild silk is traditionally used.
      After that, a tough but beautiful track will lead us through the Gate of the South and to the Andringintra Park. The gigantic massif is sited right in front of us and its ridge blocks our horizon. The valley of Namoly lies here, where two big waterfalls have made their ways throughout the ages.  Once at Namoly, we start the first hike, three hours of time through the Betsileo villages and surrounding forests. Many plants are medicinal here and our guide will explain all the secrets of this natural pharmacy. Our first camping site is at Imaitso, at the entrance of the inner forest  
      `
    },
    {
      jour: "Day 4",
      circuit: "IMAINTSO – AMPASIMPOTSY – ANDRIAMPOTSY  7 heures de marche, dénivelée 700m+",
      description: `The track is easy at first, it links the Andringitra to the National Park of Ranomafana. While walking, you will have plenty of time to appreciate the flourishing flora, and might even, with luck, see a couple wild rubriventer lemurs, feeding on the fulvus trees. After an hour, we must start ascending to reach a viewpoint on the Tanala (people of the forest) land. After the plateau of Ampasipotsy, with the altimountain microclimate and its characteristic vegetation.
      Picnic lunch on the plateau, just before reaching the camping site, where you will find a natural pool, the Andreatelo, to dive in. The water is crystal clear but a little cold of course. There, at Andriampotsy, at 2050m of altitude, we’ll set up the tents and recover for the next day!
      `
    },
    {
      jour: "Day 5",
      circuit: "ANDRIAMPOTSY – PIC BOBY – DIAVOLANA – IATARANOMBY 9 hours walking and 600m+ 900m- of difference in height.",
      description: `Departure after breakfast for the ascent of the Bobby peak, we'll leave before the sun comes up. The ridge on which is located the Summit is very exposed to climatic influences of the East with a high humidity that can quickly cover the summits and thus ruin your beautiful climb to this prestigious peak of Madagascar. 2 h 30 walk, on refitted stairs and through a humid basin filled with moss, lichen and Phylipias , to reach the peak from where you can enjoy a panorama of exception on the whole of the region, the Andringintra, the Isalo down south, Tsaranoro, the Gate of The South. In Nice weather, you can even see the Indian Ocean. The Peak Bobby is also called Imarivolanitra, which means “really close to the sky”. The name Peak Bobby was given after the first member of a group of alpinists geologists, their dog named Bobby, reached the top.
      Descent then continuation towards the camp and then on the path that leads to the circuit 'DIAVOLANA', literally 'EXTRA terrestrial '. A huge plateau of rocky surreal lunar landscape. The granite shapes and crazy formations are really characteristic and worthy of a science fiction movie set. View of the Valley of the Tsaranoro. On the steep descent afterwards, the 'ravenea glauca' is the endemic Palm species endemic to this very side of the mountain. We keep on descending to the campsite of Iantaranomby River ‘literally “where the Zebus drink” where you can cool off. Beautiful sunset at night on the banks of a charming river.       
      `
    },
    {
      jour: "Day 6",
      circuit: "ANDRINGITRA - CAMP CATTA (4 hours and 700m-of difference in height)",
      description: `Length: 4h walking Difficulty: Easy
      Difference in Height: 250 meters
      After breakfast; descent to the Valley of the Tsaranoro, the Andringintra behind us. You’ll cross great pastures for zebus where many Pachypodium enchyflorum, and different species of Aloe, and numerous lizards can be found. Once at the foot of the massif, the path continues through several villages of the Barabory; where the Bara and Betsileo cultures mix. We cross the Sahanambo River to reach Morarano. We then need to follow the valley on an easy road for a little while to join the hotel on the foot of the Chameleon. 
      If you are interested, you can visit the only dispensary of the region, between Soavahiny and Andonaka and the school of Tsaranoro. The access to medical care is very difficult here, as is the education and if you are willing to, you can support the actions of the dispensary
      `,
    },
    {
      jour: "Day 7",
      circuit: "CAMP CATTA",
      description: `
      Possible activities : picnic lunch is provided<br>
      - <strong>Circuit Chameleon</strong> : Starting from the camp, it is a 4h walk to reach to top of the famous chameleon. On the last part of the walk, there is a steep bit, where caution is necessary. It is definitely worth it though, because the panorama you get from up there is absolutely breath taking. We recommend doing this early in the morning to avoid the hottest time of the day.<br>
      - <strong>Circuit TSARANORO</strong> : Leaving early, it’s a 4 to 5 hour walk to reach the top of Tsaranoro. We have to conquer it from the other side, because the front can only be climbed. On the way up, halfway through the foothills, you’ll discover Bara tombs inside the rock itself. There’s a tough part on the end of the ascension, but you will be rewarded with a breathtaking panorama on the southern mountain ranges that surround us entirely.<br>
      - <strong>Paragliding</strong> : Nothing more thrilling than paragliding to discover all this valley from the sky. On a comfortable seat, with only the sound of the wind, it is an astounding opportunity as there are five spots to start from on the valley, always depending on the conditions of course. You can do it for the first time with no problem, but, in order to make that possible, please advise us at least 48h before if you want to fly.
      `
    },
    {
      jour: "Day 8",
      circuit: "CAMP CATTA - RANOHIRA (5 hours on road and tracks)",
      description: `Time to leave the Tsaranoro Valley, it’s a 3 and a half hour ride to the city of Ranohira, and its famous national park; Isalo.
      As we head South on the road the landscapes drastically change. Pretty fast, the panorama flattens and immense tall grass fields surround us. This is the plateau of Ihorombe, land of the zebu farmers and of the golden horizon. Only one road goes through, the RN7, and people walk huge distances to meet in different villages in these savannah-looking plains.
      Finally, we get to Ranohira, and the Isalo, a deserted mountain barrier.
      Free lunch, setting up at the hotel, and diner.
      Night and the hotel.      
      `
    },
    {
      jour: "Day 9",
      circuit: "RANOHIRA - BERONONO (MAKAY) 10 to 11 hours on track",
      description: `
      This is where we enter the Makay. It’s a whole day on a really tough track, starting from the Makay. We will also have to use a rudimentary ferry to cross the river and reach the village of Beronono.
      Picnic lunch on the road and night camping.
      <h3>MAKAY</h3>
      The Great Makay is the biggest mountain range of the south west of Madagascar. It is 7.500km² wide and is considered as one of the very latest sanctuaries preserved from the human hand. There are hundreds of inextricable canyons that harbor a unique biodiversity, endemic of course. For anyone willing to explore and discover trek routes, the Makay is a paradise. From crocodiles to lemurs, exquisite insects to curious birds, that you will be among the first to observe, this trek might be our most exclusive circuit.
      The Makay defines the province of the city of Beroroha that we will visit on our way. Here, civilization stops and nature takes over, beyond time. 
      `
    },
    {
      jour: "Day 10 au 16",
      circuit: "MAKAY   Trekking 6 to 9 hours a day",
      description: `
      It’s a 7 day journey that is waiting for us. In this monumental masterpiece that Nature has shaped for millennials you’ll discover the great elevated sandstone formations characteristic to this part of the island. Between these rockhills, streams of water have allowed life to thrive. Nature is the only master at work here. 
      Throughout the trek, we’ll walk on top of dry mountain crests and deep in colorful crevasses and primary forests. On our way to the Sacred lakes, and the natural pools, some rupestrian cave paintings, beautiful panoramas on the Bara land. This ethnic group is semi nomad, and lives on the inferior plateau that surrounds the Makay. We’ll try to understand their customs and everyday life, on this ever isolated land. The distillation technique (rhum made out of Tamarin), the music, and the beliefs of the people here are rich and give a great occasion to discover something totally different and vibrate to their timeless pace. 
      Every evening, on our camping sites, the team will prepare simple but delicious meals that will help you recover for the next day and enjoy the starry nights.
      Here, we’ll ask you to only leave your footprint behind and respect this sanctuary.
      Nights and diner on camping sites 
      `
    },
    {
      jour: "Day 17",
      circuit: "MAKAY - RANOHIRA 10 to 11 hours on the track",
      description: `After the breakfast, we hit the road southward.
      Picnic lunch on the road. Night at Ranohira.      
      `
    },
    {
      jour: "Day 18",
      circuit: "RANOHIRA – TULEAR - IFATY 5 hours for 240 km on the RN7",
      description: `Time to cross the great and profound South of Madagascar. 
      On the way, a look at some familial tombs of the Antandroy and the Mahafaly tribes and the sapphire cities that popped out of nowhere in the desert, where the thirst for blue stones is just too strong. 
      After Tuléar, Mangily. A tiny village on the coast, facing one of the most beautiful lagoon of the planet. The population here is mainly Vézo, a people of nomad fishermen and you will also get to see some Baobabs. 
      End of our service.      
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
    // french.style.display = "none";
    localStorage.setItem("style", "none");
    // english.style.display = "block";
    localStorage.setItem("styleEn", "block");
    localStorage.setItem("langue", "english");
    getSchedule(schedule, "english");
    this.textContent = "fran\çais";
    setTimeout(() => {
      location.reload();
    }, 300);
  } else {
    localStorage.setItem("langue", "fran\çais");
    // french.style.display = "none";
    localStorage.setItem("style", "block");
    // english.style.display = "block";
    localStorage.setItem("styleEn", "none");
    getSchedule(schedule, "français");
    this.textContent =  "english";
    setTimeout(() => {
      location.reload();
    }, 300);
  }
}))

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