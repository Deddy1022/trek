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
      circuit: "PARIS – TANA",
      description: "Accueil à l’aéroport international d’Ivato par votre guide et transfert à l’hôtel Chalet des Roses."
    },
    {
      jour: "Jour 2",
      circuit: "TANA – ANTSIRABE",
      description: "Petit déjeuner et Cap vers le sud de Madagascar. En route, découverte du monde rural des hautes terres : paysages, villages entourés de rizières, architecture, mode de vie.... Déjeuner libre. Arrivée à Antsirabe, ville thermale, développée par les missionnaires norvégiens. Elle est la première ville agricole ainsi que la deuxième ville industrielle de Madagascar. Peuvent en témoigner les superbes maisons bourgeoises du centre. Nuit à l’hôtel Résidence Camélia"
    },
    {
      jour: "Jour 3",
      circuit: "ANTSIRABE – MIANDRIVAZO",
      description: `Découverte des lacs (Andraikiba et Tritriva) Puis Cap à l’Ouest, les terres fertiles du Vakinankaratra cèdent petit à petit la place à l’aridité du Bongolava. Déjeuner dans une gargote locale.
      Miandrivazo, sur les bords de la Mahajilo, un affluent de la Tsiribihina, sera notre port d’embarquement. C’est sur cette rivière, notamment réputée pour ses températures les plus hautes de Madagascar, que nous embarquerons.
      Nuit à l’hôtel Princesse Tsiribihina`
    },
    {
      jour: "Jour 4",
      circuit: "MIANDRIVAZO – DESCENTE",
      description: `Embarquement dans le chaland. Et va pour un périple qui fera défiler sous nos yeux l’Ouest malgache dans son austère beauté. 
      Nous nous arrêterons autant que nécessaire pour se dégourdir les jambes dans une nature luxuriante, et pour découvrir des espèces d’oiseaux endémiques tels les canards siffleurs, aigrettes, hérons et caméléons. 
      Arrêt repas à la mi-journée pour lequel le cuisinier vous mijotera quelque chose à base – certainement – de viande de zébu, de poisson, de poulet, et de légumes. Rien que du frais ! 
      Reprise de la navigation jusqu’au soir et préparatifs du bivouac sur un banc de sable. Nuit en bivouacs`
    },
    {
      jour: "Jour 5",
      circuit: "DESCENTE EN CHALAND",
      description: `Traversée des gorges de Bemaraha. Arrêt à côté d'une 
      belle cascade et une belle piscine naturelle. Baignade rafraîchissante et pique-nique sur place.
      Possibilité de voire des lémuriens et des tortues d'eaux douche. 
      Nuit en bivouacs
      `
    },
    {
      jour: "Jour 6",
      circuit: "DESCENTE EN CHALAND – BELO SUR TSIRIBIHINA – BEKOPAKA",
      description: `Découverte des lacs (Andraikiba et Tritriva) Puis Cap à l’Ouest, les terres fertiles du Vakinankaratra cèdent petit à petit la place à l’aridité du Bongolava. Déjeuner dans une gargote locale.
      Miandrivazo, sur les bords de la Mahajilo, un affluent de la Tsiribihina, sera notre port d’embarquement. C’est sur cette rivière, notamment réputée pour ses températures les plus hautes de Madagascar, que nous embarquerons.
      Nuit à l’hôtel Princesse Tsiribihina`
    },
    {
      jour: "Jour 7",
      circuit: "TSINGY DE BEMARAHA",
      description: `Idéalement très tôt le matin, départ pour les Grands Tsingy. Vous rejoignez le site en 4*4 par une piste de 15km (environ 1h de voiture). 
      Ensuite, vous aurez le choix entre deux circuits: <br>
      - <b>Le circuit RANOTSARA</b>: Circuit de 3h dans les grands Tsingy. Déjeuner pique-nique. Nous recommandons la visite du site d’ANDAMOZAVAKA<br>
      - <b>Le circuit ANDAMOZAVAKA</b>: Circuit de 4h dans les grands Tsingy. C'est le circuit que nous recommandons. Bonne condition physique nécessaire.
      
      Sur les deux circuits, équipés de vos baudriers et d'une lampe frontale, vous aurez l'occasion de pénétrer au cœur des Tsingy de Bemahara. Les points forts de ce circuit sont les deux belvédères, où vous aurez une vue imprenable sur les Tsingy. Puis vous découvrirez la cathédrale naturelle. 
      Le site a été totalement aménagé dans le respect de l'environnement, pour que vous puissiez facilement traverser le site. A mi-chemin vous aurez l'opportunité de traverser un long pont suspendu dans le vide, des passerelles et des grottes jonchés de Stalagmites et de Stalactites. 
      Tout au long de votre marche, vous aurez surement l'occasion de rencontrer les lémuriens, et de découvrir une faune et une flore unique en son genre. 
      Nuit à l’hôtel 
      `
    },
    {
      jour: "Jour 8",
      circuit: "BEKOPAKA – MORONDAVA",
      description: `Départ de l’hôtel, retour à MORONDAVA. Déjeuner dans un restaurant à BELO sur TSIRIBIHINA. Déjeuner Libre.
      Sur le retour, découverte des  Baobabs Amoureux. Vous verrez également le Baobab Sacré. Il s'agit d'un lieu de culte où l'on vient honorer les ancêtres en déposant des conques, des bouteilles et des étoffes rouge et noir dans les anfractuosités de son tronc. 
      En fin d’après-midi, nous atteindrons la fameuse Allée des Baobabs sous un superbe coucher de soleil. Véritable boulevard d’Adansonia Grandidieri, site classé en Aire protégée "Monument Naturel " lors du premier Festival Jama du mois de juillet 2007, ce site est la pièce maitresse de notre périple. 
      Nuit à l’hôtel Chez Maggie
      `
    },
    {
      jour: "Jour 9",
      circuit: "MORONDAVA – TANA",
      description: `Transfert pour l’aéroport et vol pour Tana.
      Accueil et assistance à l’aéroport et transfert à l’hôtel Chalet des Roses.
      `
    },
    {
      jour: "Jour 10",
      circuit: "TANA – ANDASIBE",
      description: `Petit déjeuners et départ pour l’est de la grande île. Nous quittons Tananarive en direction d’Andasibe en prenant la route qui relie la capitale à Tamatave. Tananarive est séparée de la partie est de l’île par les falaises abruptes couvertes d’exubérantes forêts de l’Angavo. Déjeuner Libre.
      Arrêt à Marozevo pour une visite du Madagascar Exotic Park. Cette ferme, unique sur l’île, permet d’observer un grand nombre de caméléons. Elle abrite également de nombreuses espèces de papillons et d’insectes. Passage à Moramanga, haut lieu de l’insurrection de 1947. Arrivée à Andasibe dans l’après-midi. 
      Possibilité de faire une visite nocturne du parc pour voir les lémuriens nocturnes. Nuit et dîner à l’hôtel Vakona Lodge.
      `
    },
    {
      jour: "Jour 11",
      circuit: "ANDASIBE",
      description: `Visite du parc d’Andasibe le matin et de sa forêt humide, refuge des lémuriens, dont le plus rare, l’Indri indri, le plus gros de tous les lémuriens. 
      C’est le cri de ce dernier qui vous réveillera le matin, pour le moins saisissant ! Plusieurs espèces nocturnes peuplent le parc dont la minuscule Microcèbes et les caméléons, 
      grenouilles sont partout présents dans cette flore riche de pandanus, d’eucalyptus, de ravenalas et de palissandres. Tout au long de la visite, de nombreux lacs recouverts de nénuphars nous révèlent leur charme et leurs mystères. 
      Visite en canoë de la réserve Vakona et de ses îlots aux lémuriens. Nuit à l’hôtel.
      `
    },
    {
      jour: "Jour 12",
      circuit: "ANDASIBE- AKANIN’NY NOFY",
      description: `Départ après le petit déjeuner pour rejoindre le canal du Pangalana. Passage au marché aux fruits de brickaville.
      Arrivée à Manambato vers midi. Déjeuner libre et transfert en bateau pour Akanin’ny Nofy.
      Nuit au lodge Palmarium
      `
    },
    {
      jour: "Jour 13",
      circuit: "AKANIN’NY NOFY",
      description: `Akanin’ny Nofy est situé, sur une cinquantaine d’hectares, en lisière de l’un de nombreux lacs qui forment le canal des Pangalanes. Le lac sur lequel se trouve le fameux "Nid de Rêve" porte le nom d’Ampitabe. Il se trouve à 60 km au sud de Tamatave. Il est séparé de l’Océan Indien par une mince ligne de dunes côtières, de parfois quelques mètres seulement.
      L’attraction incontournable du lieu est la visite du « Palmarium », localisé sur une presqu’île de plus de 30 hectares sur Ampitabe. C’est une réserve privée composée de près de 100 000 palmiers endémiques à Madagascar. Les espèces les plus populaires et les plus rares sont le Dypsis, le Ravenea, l’Orania, mais également le Voanioala et le Lemurophoenix.
      Au Palmarium on dénombre dix espèces de lémuriens parmi les plus rares comme l’Indri Indri, le plus grand lémurien de la planète ; le Varécia variegata ; le Propithèque ou Sifaka, une espèce qui adore se tenir verticalement ; le très menacé Aye Aye, les microcèbes et le lémur coronatus spécifique du nord de l’île.
      Cette réserve très singulière est un véritable abri naturel de la faune et de la flore malgache avec ses extraordinaires espèces végétales composées d’orchidées, de plantes carnivores, en particulier le népenthès, et des arbres de voyageur (ou ravinala), symbole de Madagascar
      Le moyen le plus courant pour se rendre à Akanin’ny Nofy est la voie fluviale, soit en empruntant l’un des chalands qui sillonnent le canal des Pangalanes soit en louant une pirogue à moteur. Le départ se fait depuis la petite cité balnéaire de Manambato. Une visite au "Nid de Rêve" permet de faire une petite descente du Canal des Pangalanes, un canal dont la construction date du temps de Gallieni, le premier gouverneur de Madagascar en 1896.
      Nuit au lodge
      `
    },
    {
      jour: "Jour 14",
      circuit: "AKANIN’NY NOFY – TAMATAVE - MAHAMBO",
      description: `Transfert en bateau vers Tamatave. Accueil à l’arrivée au port fluvial. Déjeuner libre. Et  transfert sur Mahambo. Après midi libre sur la plage.
      Nuit à l’hôtel la pirogue au Bord de la mer
      `
    },
    {
      jour: "Jour 15 au 19",
      circuit: "SAINTE MARIE",
      description: `Transfert pour Sainte Marie, accueil et transfert au Villa  au bord de la mer 
      Séjour de 5 jours et 4 nuits
      
      SAINTE MARIE ET LES BALEINES Journées libres à la découverte de l'île jardin, à la végétation luxuriante. Une merveilleuse île authentique sous les tropiques, à proximité de la côte est de Madagascar. Une vaste cocoteraie qui s'ouvre sur une plage de sable blanc léchée par les eaux calmes de l'Océan Indien.
      
      L'île Ste Marie est l'endroit balnéaire le plus réputé pour l'observation des baleines à bosse à Madagascar.
      Balade en bateau pendant la grande migration des baleines (de juillet à septembre).
      Il est également possible de pratiquer "le safari baleine vu du ciel". Merci de nous consulter pour avoir plus d'informations.
      Safari baleine offert par l’agence Sudmadatrek
      `
    },
    {
      jour: "Jour 20",
      circuit: "SAINTE MARIE – TANA",
      description: `Transfert à l’aéroport et vol pour Tana.
      Visite de la ville haute et du palais de la Reine.
      Visite du marché de la digue.
      Transfert à l’aéroport et vol retour.
      `
    },
  ],
  "english": [
    {
      jour: "Day 1",
      circuit: "TANA – ANTSIRABE",
      description: `We come welcome you directly at the international airport of Ivato, and head straight south. Throughout the plains of the highlands, you’ll discover the first amazing scenery of your trip:  the rural villages surrounded by ricefields and the population of farmers whose lifestyle has never changed since the dawn of time
      Free lunch before Antsirabe, the thermal city constructed and developed by norvegian missionaries. This city is ranked first in agriculture and the second in industry in the whole country. The beautiful middle class houses downtown are witnesses of this frivolous era. 
      Diner and night at the hotel
      `
    },
    {
      jour: "Day 2",
      circuit: "ANTSIRABE – MIANDRIVAZO",
      description: `Discovery of the famous lakes of Andraikiba and Tritriva. Then, we go westward. The fertile lands of Vakinankaratra are soon to be replaced by the bareness of the dry Bongolava
      We’ll have lunch in a local hoteli (gargotte) for a good discovery of the inevitable Malagasy rice meal.
      Miandrivazo is a city on the banks of Mahajilo, a tributary of the Tsiribihina, this is where we will start our journey on water. This river is well known for its naturally heated flows.
      Night and diner at the hotel
      `
    },
    {
      jour: "Day 3",
      circuit: "MIANDRIVAZO – DESCENTE",
      description: `Boarding on the barge, we start a ride that will make the whole stern western Madagascar pass before our eyes. 
      As many breaks as we need to walk around in the luxurious wilderness and discover the local bird species like the whistling ducks, aigrettes, heron and chameleons. 
      A local lunch break, with only fresh food, fish, zebu, chicken and vegetables. 
      Back to navigation till sunset, we camp on the sandy riverside. Bivouac`
    },
    {
      jour: "Day 4",
      circuit: "BARGE DESCENT",
      description: `Crossing of the gorges of Bemahara, break near a beautiful waterfall with a natural pool. You’ll get to swim and lunch on site. You’ll get to see lemurs and turtles. 
      Lunch and night camping.      
      `
    },
    {
      jour: "Day 5",
      circuit: "BARGE DESCENT – BELO SUR TSIRIBIHINA – BEKOPAKA",
      description: `We leave at dawn to visit the villages settled on the shores. 
      There are many bats hooked on the cliffs and if you are lucky you can even sneak a peek of some crocodiles. 
      In the middle of the afternoon, we leave the river to head for the park of the Tsingy of Bemaraha, a road deserving a Camel Trophy`
    },
    {
      jour: "Day 6",
      circuit: "BEMARAHA TSINGY",
      description: `Ideally, we leave early for the Great Tsingy, the road is 15km long, about an hour with a 4x4.There are two circuits you can choose from,<br>
      - <b>Le circuit RANOTSARA</b>: 3 hours inside the great Tsingy. Lunch on the run. <br>
      - <b>Le circuit ANDAMOZAVAKA</b>: About 4 hours inside the Great Tsingy. We recommend this circuit but its intensity requires a good shape.<br>
      
      For both of these options, you’ll need gear, and a forehead lamp that we will provide. In the core of the Tsingy of Bemahaea, you’ll find two breath taking landscape sites before reaching the cathedral.
      The site was totally equipped respecting the environnement, for example with an amazing rope bridge suspended high above the Tsingys, tracks that lead to caverns, of stalagmites and stalactites. 
      Lemurs are likely to show up, as for the whole endemic fauna here.
      Diner and night at the hotel 
      `
    },
    {
      jour: "Day 7",
      circuit: "BEKOPAKA – MORONDAVA",
      description: `We head back to Morondava, and take a lunch break at the beautiful city of Belo sur Tsiribihina.
      On the trip back, you’ll discover the Lovers Baoba and the Sacred Baobab which the malagasy come honor from every side of Madagascar. There, people leave in the crevices conches, bottles, or red and black ribbons for their ancestors’ souls
      As the afternoon ends, we’ll reach the famous Baobabs alley, under a perfect sunset. This proper boulevard of Andansonia Grandidieri, protected as a “Natural Monument” during the first festival Jama in july 2007, remains the masterpiece of our journey. 
      Night and diner at the hotel      
      `
    },
    {
      jour: "Day 8",
      circuit: "MORONDAVA – TANA – ANDASIBE",
      description: `Transfert to the airport, back to Tana !
      Welcoming and assistance at the airport, before headind east. 
      The road is not bad between Antananarivo and the capital of Tamatave. 
      We need to cross the steep cliffs that separate the two regions, covered with the luxurious forest of the Angavo. 
      Free lunch.
      A little stop at the Madagascar Exotic Park. 
      This mill, unique on the whole island allow tourist to discover the biggest diversity of chameleons. 
      It is also a sanctuary for hundreds of species of butterflies and insects. 
      We then hit the road again, down to Mormanga, high hotspot of the insurrection of 1947 and Andasibe in the afternoon. 
      There are night tours available there, to catch a glimpse of the nocturnal species of lemurs. 
      Night and diner at the hotel.      
      `
    },
    {
      jour: "Day 9",
      circuit: "ANDASIBE",
      description: `The park of Andasibe, in the humidity of the morning, is by far one of the most exquisite of the island and is the home of the biggest lemur of them all. 
      Its strong call will wake you up for sure. 
      Many nocturnal species inhabit this place, for instance the tiny Microcèbes and the chameleons and frogs. 
      The flora is also worth your while, full of pandanus, eucalyptus, ravenalas (tree of the traveler) and palissandres. 
      Through this visit, many ponds, decorated with flower lilies will reveal themselves to you, in their mystery. 
      To end the day, the canoe tour of the reserve Vakona, with its Lemur tiny Islands 
      Night and diner at the hotel      
      `
    },
    {
      jour: "Day 10",
      circuit: "ANDASIBE- AKANIN’NY NOFY",
      description: `You’ll start the day, right after a good breakfast, by visiting the Pangalana canal, the fruit market at Brickaville and Manambato. That is where we’ll board on a boat, our course: Akanin’ny Nofy. Diner and night there, at the hotel.
      `
    },
    {
      jour: "Day 11",
      circuit: "AKANIN’NY NOFY",
      description: `Akanin’ny Nofy is located, on a 50 hectare wide area, surrounded by many lakes that form the canal of Pangalanes. One is pretty famous, the “Dream Nest” was named Ampitabe. It is roughly 60 km away from Tamatave and only a narrow (sometimes only a couple meters) strip of sandy dunes separates it from the Indian Ocean
      The main takeaway of this place is undoubtedly the “Palmarium”, on the 30 hectares peninsula of Ampitabe. A private reserve, furnished with 100 000 endemic palm trees. The rarest and most popular are the Dypsis, the Ravenea, the Orania but also the Voaniala and the Lemurophoenix. There are also ten species of lemurs inside the Palmarium. The Varécia Variegata, the biggest, the Propithèque (or the upright Sifaka), the practically extinct Aye Aye, the Microcèbes and finally the Lémur coronatus endemic to the north.
      This place is a singularity, a true sanctuary for the flora and fauna of Madagascar, there are orchids, carnivorous plants (nepenthes) and the symbol of Madagascar of course, the ravinala.
      The easier and most common way to reach Akanin’ny Nofy is with the river. Starting in Manambato, we’ll board on the barge on the canal constructed when Gallieni, the first governor of Madagascar in 1896. You can also go for motor pirogue for the descent if you want.
      Night and diner at the lodge      
      `
    },
    {
      jour: "Day 12",
      circuit: "AKANIN’NY NOFY – TAMATAVE - MAHAMBO",
      description: `Boat ride to Tamatave, there we have lunch and we head to Mahambo.
      Free afternoon on the beautiful beach followed by diner, and night at the hotel      
      `
    },
    {
      jour: "Day 13 to 15",
      circuit: "SAINTE MARIE",
      description: `Tranfert to Sainte Marie, we’ll have someone welcome us there, to the beautiful hotel on the sea shore
      That is where you will linger for 4 days and 3 nights, half pension included.
      
      SAINTE MARIE AND THE WHALES
       Free days, dedicated to the discovery of the Garden Island and its luxurious vegetation. It’s a exquisite tropical beach close to the eastern shore of Madagascar. A vast forest of coco trees on a white sand licked by the calm waves.
      
      The Island Sainte Marie is the most well-known site for whale watching in Madagascar. You can got on a boat tour during the great migration from July to September. There’s also the option of the safari “whales from the sky”, please contact us in advance for more information.      
      `
    },
    {
      jour: "Day 16",
      circuit: "SAINTE MARIE – TANA",
      description: `Transfer to the airport, fly to Tana followed by a visit of the upper city, the Queen Palace and the famous market. Transfer to the airport
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
