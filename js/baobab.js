const timelineTarget = document.querySelector('#timelineTarget');
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown-menu');

hamburger.onclick = function() {
  dropdown.classList.toggle('open');
}
const schedule = [
  {
    jour: 1,
    circuit: "PARIS – TANA",
    description: "Accueil à l’aéroport international d’Ivato par votre guide et transfert à l’hôtel Chalet des Roses."
  },
  {
    jour: 2,
    circuit: "TANA – ANTSIRABE",
    description: "Petit déjeuner et Cap vers le sud de Madagascar. En route, découverte du monde rural des hautes terres : paysages, villages entourés de rizières, architecture, mode de vie.... Déjeuner libre. Arrivée à Antsirabe, ville thermale, développée par les missionnaires norvégiens. Elle est la première ville agricole ainsi que la deuxième ville industrielle de Madagascar. Peuvent en témoigner les superbes maisons bourgeoises du centre. Nuit à l’hôtel Résidence Camélia"
  },
  {
    jour: 3,
    circuit: "ANTSIRABE – MIANDRIVAZO",
    description: `Découverte des lacs (Andraikiba et Tritriva) Puis Cap à l’Ouest, les terres fertiles du Vakinankaratra cèdent petit à petit la place à l’aridité du Bongolava. Déjeuner dans une gargote locale.
    Miandrivazo, sur les bords de la Mahajilo, un affluent de la Tsiribihina, sera notre port d’embarquement. C’est sur cette rivière, notamment réputée pour ses températures les plus hautes de Madagascar, que nous embarquerons.
    Nuit à l’hôtel Princesse Tsiribihina`
  },
  {
    jour: 4,
    circuit: "MIANDRIVAZO – DESCENTE",
    description: `Embarquement dans le chaland. Et va pour un périple qui fera défiler sous nos yeux l’Ouest malgache dans son austère beauté. 
    Nous nous arrêterons autant que nécessaire pour se dégourdir les jambes dans une nature luxuriante, et pour découvrir des espèces d’oiseaux endémiques tels les canards siffleurs, aigrettes, hérons et caméléons. 
    Arrêt repas à la mi-journée pour lequel le cuisinier vous mijotera quelque chose à base – certainement – de viande de zébu, de poisson, de poulet, et de légumes. Rien que du frais ! 
    Reprise de la navigation jusqu’au soir et préparatifs du bivouac sur un banc de sable. Nuit en bivouacs`
  },
  {
    jour: 5,
    circuit: "DESCENTE EN CHALAND",
    description: `Traversée des gorges de Bemaraha. Arrêt à côté d'une 
    belle cascade et une belle piscine naturelle. Baignade rafraîchissante et pique-nique sur place.
    Possibilité de voire des lémuriens et des tortues d'eaux douche. 
    Nuit en bivouacs
    `
  },
  {
    jour: 6,
    circuit: "DESCENTE EN CHALAND – BELO SUR TSIRIBIHINA – BEKOPAKA",
    description: `Découverte des lacs (Andraikiba et Tritriva) Puis Cap à l’Ouest, les terres fertiles du Vakinankaratra cèdent petit à petit la place à l’aridité du Bongolava. Déjeuner dans une gargote locale.
    Miandrivazo, sur les bords de la Mahajilo, un affluent de la Tsiribihina, sera notre port d’embarquement. C’est sur cette rivière, notamment réputée pour ses températures les plus hautes de Madagascar, que nous embarquerons.
    Nuit à l’hôtel Princesse Tsiribihina`
  },
  {
    jour: 7,
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
    jour: 8,
    circuit: "BEKOPAKA – MORONDAVA",
    description: `Départ de l’hôtel, retour à MORONDAVA. Déjeuner dans un restaurant à BELO sur TSIRIBIHINA. Déjeuner Libre.
    Sur le retour, découverte des  Baobabs Amoureux. Vous verrez également le Baobab Sacré. Il s'agit d'un lieu de culte où l'on vient honorer les ancêtres en déposant des conques, des bouteilles et des étoffes rouge et noir dans les anfractuosités de son tronc. 
    En fin d’après-midi, nous atteindrons la fameuse Allée des Baobabs sous un superbe coucher de soleil. Véritable boulevard d’Adansonia Grandidieri, site classé en Aire protégée "Monument Naturel " lors du premier Festival Jama du mois de juillet 2007, ce site est la pièce maitresse de notre périple. 
    Nuit à l’hôtel Chez Maggie
    `
  },
  {
    jour: 9,
    circuit: "MORONDAVA – TANA",
    description: `Transfert pour l’aéroport et vol pour Tana.
    Accueil et assistance à l’aéroport et transfert à l’hôtel Chalet des Roses.
    `
  },
  {
    jour: 10,
    circuit: "TANA – ANDASIBE",
    description: `Petit déjeuners et départ pour l’est de la grande île. Nous quittons Tananarive en direction d’Andasibe en prenant la route qui relie la capitale à Tamatave. Tananarive est séparée de la partie est de l’île par les falaises abruptes couvertes d’exubérantes forêts de l’Angavo. Déjeuner Libre.
    Arrêt à Marozevo pour une visite du Madagascar Exotic Park. Cette ferme, unique sur l’île, permet d’observer un grand nombre de caméléons. Elle abrite également de nombreuses espèces de papillons et d’insectes. Passage à Moramanga, haut lieu de l’insurrection de 1947. Arrivée à Andasibe dans l’après-midi. 
    Possibilité de faire une visite nocturne du parc pour voir les lémuriens nocturnes. Nuit et dîner à l’hôtel Vakona Lodge.
    `
  },
  {
    jour: 11,
    circuit: "ANDASIBE",
    description: `Visite du parc d’Andasibe le matin et de sa forêt humide, refuge des lémuriens, dont le plus rare, l’Indri indri, le plus gros de tous les lémuriens. 
    C’est le cri de ce dernier qui vous réveillera le matin, pour le moins saisissant ! Plusieurs espèces nocturnes peuplent le parc dont la minuscule Microcèbes et les caméléons, 
    grenouilles sont partout présents dans cette flore riche de pandanus, d’eucalyptus, de ravenalas et de palissandres. Tout au long de la visite, de nombreux lacs recouverts de nénuphars nous révèlent leur charme et leurs mystères. 
    Visite en canoë de la réserve Vakona et de ses îlots aux lémuriens. Nuit à l’hôtel.
    `
  },
  {
    jour: 12,
    circuit: "ANDASIBE- AKANIN’NY NOFY",
    description: `Départ après le petit déjeuner pour rejoindre le canal du Pangalana. Passage au marché aux fruits de brickaville.
    Arrivée à Manambato vers midi. Déjeuner libre et transfert en bateau pour Akanin’ny Nofy.
    Nuit au lodge Palmarium
    `
  },
  {
    jour: 13,
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
    jour: 14,
    circuit: "AKANIN’NY NOFY – TAMATAVE - MAHAMBO",
    description: `Transfert en bateau vers Tamatave. Accueil à l’arrivée au port fluvial. Déjeuner libre. Et  transfert sur Mahambo. Après midi libre sur la plage.
    Nuit à l’hôtel la pirogue au Bord de la mer
    `
  },
  {
    jour: "15 au Jour 19",
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
    jour: 20,
    circuit: "SAINTE MARIE – TANA",
    description: `Transfert à l’aéroport et vol pour Tana.
    Visite de la ville haute et du palais de la Reine.
    Visite du marché de la digue.
    Transfert à l’aéroport et vol retour.
    `
  },
];

schedule.forEach(data => 
  timelineTarget.innerHTML += `<li class="event" data-date="Jour ${data.jour}">
    <h4 class="mb-3">${data.circuit}</h4>
    <p>
      ${data.description} 
    </p>
  </li>`
)

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
