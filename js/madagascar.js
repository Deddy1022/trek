const timelineTarget = document.querySelector('#timelineTarget');
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown-menu');

hamburger.onclick = function() {
  dropdown.classList.toggle('open');
}
const schedule = [
  {
    jour: 1,
    circuit: "ANTANANARIVO – ANTSIRABE",
    description: `Départ tôt pour Antsirabe. Cap vers le sud de Madagascar. En route, découverte du monde rural des hautes terres : paysages, villages entourés de rizières, architecture, mode de vie...
    Halte à la ville d’Ambatolampy connue pour la fabrication de marmites en aluminium : visite d’un atelier familial sur place. 
    Arrivée à Antsirabe, ville thermale, développée par les missionnaires norvégiens. Elle est la première ville agricole ainsi que la deuxième ville industrielle de Madagascar, en témoignent les superbes maisons bourgeoises. Déjeuner libre.
    Arrivée sur Antsirabe, départ pour la découverte des lacs Tritriva et Andraikiba.
    Nuit et dîner à l´hôtel.
    `
  },
  {
    jour: 2,
    circuit: "ANTSIRABE – PAYS ZAFIMANIRY  - FIANARANTSOA",
    description: `Départ  très tôt pour le pays Zafimaniry. 6 heures de route à travers montagnes et vallées à moitié dénudées : conséquence de la technique du « tavy », aussi appelée culture sur brûlis et pratiquée depuis plusieurs générations de Zafimaniry. Traversée de villages typiques. Déjeuner à Ambositra puis  pour la capitale Betsileo. Traversée des paysages typiques des hautes terres, entre rizières en terrasses et maisons de terre cuite. Déjeuner Libre.
    Visite de la plantation de Thé l’après-midi.Mme Fideline nous accueillera et nous guidera à travers les différentes machines pour nous expliquer les différentes étapes d’usinage du thé. Après avoir étudié le processus qui transforme les feuilles en thé et la mise en sac pour l’exportation et le conditionnement, nous dégusterons les différentes qualités de thé et nous nous baladerons à travers l’immense plantation et le magnifique paysage qui l’entoure.
    Nuit et dîner à l’hôtel
    `
  },
  {
    jour: 3,
    circuit: "FIANARANTSOA - AMBALAVAO – ITAOLANA 4 heures de marche et environ 400m+ et 350m- de dénivelé cumulé",
    description: `Départ pour rejoindre la commune d’Ambohimahamasina à 45km à l’Est d’Ambalavao. A 3h de voiture sur la RN7 jusqu’à Ambalavao et 45km sur la piste jusqu’à destination. 
    Du chef-lieu de la Commune d’Ambohimahamasina, nous entamerons une randonnée d’une heure en passant par le village d’Andranomangitsy et en logeant au pied de la montagne  sacrée d’Angavoa. 
    Le chemin donne enfin une vue sur le magnifique village d’Andalandranovao situé au pied de rizières en terrasse où nos premiers hôtes nous attendent pour nous servir le premier déjeuner à base du riz. 
    Nous resterons avec eux le temps de partager le repas puis continuerons vers l’est, vers le village de Vohimarina afin d’approcher la montagne d’Itaolana. 
    Depuis le fond de vallée bordé de rizières, le sommet que nous allons gravir la journée du lendemain se profile face à nous dans toute sa splendeur, couverte de sa parure de forêt primaire sacrée. 
    Cette première petite balade vous donnera un bon avant-goût du séjour que nous allons passer ensemble. 
    La nuit tombée, un accueil chaleureux chez une famille vous attend au village d’Itaolana. 
    Vos hôtes sont heureux d’avoir quelques invités avec qui partager le gîte et le couvert.`
  },
  {
    jour: 4,
    circuit: "ITAOLANA – AMBALAHAZO 6 heures de marche et 591m+, 716m- de dénivelé cumulé",
    description: `La deuxième journée, vous réaliserez l’ascension des deux sommets de la montagne d’Itaolana, une des trois montagnes sacrées environnantes, qui culmine à 1489m d’altitude. 
    Nous évoluerons pendant 3 heures, tout d’abord au milieu des cultures sur tavy où vous rencontrerez les deux premiers postes des gardes du royaume. 
    Le guide réalisera le saotra (demande aux ancêtres) pour le bon déroulement de la randonnée, puis nous pénètrerons le cœur de la forêt primaire. Il faut ensuite passer par le troisième poste de garde pour atteindre le premier sommet et la stèle du Roi. 
    L’accès au deuxième sommet se situe à 30 minutes du premier et nous y poursuivrons la marche sur le chemin qui serpente au sein de la forêt humide. 
    La ligne de crêtes offre une vue splendide : d’un côté la forêt humide de l’Est du pays Tanala, et de l’autre le territoire de la Commune d’Ambohimahamasina. A l’horizon trône le massif rocailleux de l’Andringitra. 
    Nous entamerons enfin la descente à travers la forêt pendant 2 heures, pour déboucher sur les villages, les rizières, les forêts d’eucalyptus des vallées habitées. Arrivée au village d’Ambalahazo chez notre hébergeur. 
    A dix minutes de là se trouve un lac où une association des femmes du village vous présenterons les activités artisanales développées ces dernières années.`
  },
  {
    jour: 5,
    circuit: "AMBALAHAZO – AMBOHIMAHAMASINA – AMBALAVAO 5 heures de marche et 376m+, 292m- de dénivelé cumulé",
    description: `Après le petit déjeuner à la fraîcheur de l’aube, nous commencerons par aller visiter une forge artisanale afin de découvrir l’art de façonner les outils agricoles. Ici, le forgeron vous initiera à quelques gestes avec le marteau et le soufflet en main. 
    Après cette leçon,  nous retournerons au gîte pour le déjeuner, puis nous irons visiter les tisseuses et découvrir comment se travaille la soie sauvage dans cette région de Madagascar. 
    Pour terminer le séjour, retour à Ambohimahamasina le chef-lieu de commune, puis direction Ambalavao en voiture.
    Nuit et dîner à l’hôtel.    
    `
  },
  {
    jour: 6,
    circuit: "AMBALAVAO – ANDRINGITRA 4 heures de marche et 400 m de dénivelé",
    description: `Départ le matin de bonne heure en direction du massif de l’Andringitra. Visite d’un atelier de fabrication artisanale de papier Antemoro. 
    A Ambalavao, vous attaquerez la piste qui conduit à l’entrée du parc national sur environ 45 km. 
    Superbes paysages que l’état de la piste donnera tout le loisir de contempler. A Namoly, 
    vous entrerez dans le parc et y commencerez la première journée de randonnée dans ce parc pour aller vers le bain royal et rejoindre le camping à Andriampotsy sur une durée d’environ 4 heures de marche et 400 m de dénivelé.
    Votre premier bivouac s’effectuera au lieu de campement d’Andriampotsy, au pied d’immenses falaises granitiques, à une altitude de 2050 m.    
    `
  },
  {
    jour: 7,
    circuit: "ANDRINGITRA 7 à 8 heures de marche et 600m+ 900m- de dénivelé",
    description: `Réveil matinal avec les premiers rayons du soleil et départ pour attaquer l’ascension du pic Boby. 
    La crête sur laquelle se situe le sommet est très exposée aux influences climatiques de l’Est avec une forte humidité qui peut rapidement couvrir les sommets et gâcher ainsi votre belle montée vers ce pic prestigieux de Madagascar. 
    Après seulement 2 h 30 de marche, vous atteindrez le pic d’où vous pourrez profiter d’un panorama d’exception sur l’ensemble de la région. 
    Par très beau temps, on peut même apercevoir le massif de l’Isalo plus au Sud. 
    Redescente puis continuation sur le circuit « extra-terrestre ». 
    Vous comprendrez très vite pourquoi les locaux l’appellent ainsi. 
    Les paysages lunaires sont totalement surréalistes autour de pentes escarpées que vous n’oublierez pas. 
    Avant de rentrer, nous descendrons par la forêt de palmiers endémiques à ce versant, les « ravenea glauca ». 
    Le camping d’Iantaranomby, au bord de la rivière vous permettra de vous rafraîchir après cette journée chargée en émotions. 
    `
  },
  {
    jour: 8,
    circuit: "ANDRINGITRA –TSARANORO 4 heures de marche et 700m- de   dénivelé",
    description: `Départ après le petit déjeuner pour la descente vers la vallée de Tsaranoro. 
    Possibilité de voir des Pachypodium d’enchyflorum, différentes espèces d’aloès et lézards. 
    Une fois un pied du massif, le chemin continue et traverse plusieurs villages Barabory où les cultures Betsileo et Bara se mélangent et coexistent. 
    A partir du village de Morarano, vous entamerez la traversée de cette magnifique vallée du Tsaranoro ;
    Nuit et dîner en Lodge    
    `
  },
  {
    jour: 9,
    circuit: "VALLEE DE TSARANORO   ou journée repos au camp <br>Excursion possible dans la journée pique nique fourni.",
    description: [{
      "Circuit Hara Avaratra": `
      Ballade courte d’une demi-journée, avec un assez fort dénivelé sur une petite distance. Départ du camp à travers les rizières, puis montée au sommet de la colline d’une heure environ. 
      Nous redescendons en bifurquant par une petite forêt où vivent des lémuriens catta. 
      Il faut encore compter une heure de marche en descente pour revenir au camp, avec une belle vue sur les rizières en terrasses et sur les villages alentours.
      `,
      "Circuit Forêt sacrée et Village": `Durée de 4h. Ce circuit débute par une piste aménagée, empruntée par la population locale qui traverse des champs de manioc et des rizières. Vous passerez par le village d’Andonaka et pourrez visiter l’école verte de Tsaranoro. Ensuite, vous rejoignez la forêt sacrée par un petit sentier. Vous êtes maintenant sur le territoire des lémuriens à queue annelée (Lemur Catta). La forêt sacrée est aussi un lieu où vous trouverez beaucoup de tombeaux Bara et Betsileo. Une piscine naturelle vient s’ajouter à l’enchantement de cette forêt. Vous continuerez ensuite à travers rizières en terrasses. Le village de Soavahiny (« où les étrangers sont les bienvenus ») n’est plus loin. Enfin, avant de retourner au Tsara Camp, vous pouvez vous arrêter au dispensaire, la visite y est très instructive et les besoins en médicaments importants.`,
      "Circuit mont Caméléon": `C’est une randonnée d’une journée. Depuis le camp, il y a 4h de marche pour atteindre le haut du Caméléon. Sur la dernière partie de la montée, il y a un passage difficile: il ne faut pas avoir le vertige! A l’arrivée, la vue est epoustouflante sur la vallée du Tsaranoro. Le déjeuner pique-nique sera pris au sommet, pour vous donner le loisir de contempler ce panorama inimitable. Pour redescendre, il faut compter environ 2h. En chemin, vous pourrez découvrir plusieurs espèces de plantes endémiques, comme l’euphorbia, le pachypodium resolatum, l’aloes, le kalanchoe`,
      "Circuit Tsaranoro": "C’est une randonnée d’une journée. Vous partez tôt dans la matinée. Depuis le camp, il y a 4h à 4h30 de marche pour atteindre derrière le haut du Tsaranoro (le Mont Tsaranoro même n’est accessible qu’en escaladant une paroi titanesque). Au milieu de la colline, vous trouverez les tombeaux Bara insérés dans la colline même. Sur la dernière partie de la montée, il y a un passage difficile. A l’arrivée, vous aurez une vue superbe sur les montagnes du Sud Malgache. Le déjeuner pique-nique sera pris au sommet, derrière le Tsaranoro. Pour redescendre, il faut compter environ 3 heures.",
      "Le parapente dans la vallée": "Un point de vue exceptionnel sur la vallée! Celle-ci offre 5 points de sauts en parapente, en fonction du vent. Les baptêmes sont possibles. Dans un souci d’efficacité merci de nous prévenir au moins 48 heures à l’avance si vous comptez sauter en parapente.",
    }]
  },
  {
    jour: 10,
    circuit: "VALLEE DE TSARANORO – ISALO",
    description: `Départ pour l’Isalo. La route du Sud qui mène à Ranohira prend alors des airs de solitude avec des monolithes granitiques et une végétation plus éparse. Passé la ville d’Ihosy, le fameux plateau d’Ihorombe s’étend à l’infini pour finalement aboutir face au somptueux massif de l’Isalo. Déjeuner Libre.
    Dans l’après-midi, installation à l’hôtel. Nuit et dîner a l’hôtel.    
    `
  },
  {
    jour: 11,
    circuit: "CANYON – PISCINE NATURELLE 6h de marche ,500m de dénivelé",
    description: `Transfert pour Ranohira Basse
    Une petite marche d’approche est nécessaire pour atteindre la base de ces falaises immenses où ont subsisté quelques reliques d’une forêt abritant quelques lémuriens dont le lémur catta, reconnaissable à sa longue queue ornée d’anneaux blanc et noir, et le sifaka tout blanc, sauteur infatigable. Avec de la chance et du silence, il est possible de les surprendre au détour du chemin qui sinue entre les arbres et les blocs rocheux. Les canyons ouvrent leurs portes et dévoilent leurs splendeurs aux curieux qui osent s’aventurer dans leurs entrailles. Les immenses parois écrasent par leur grandeur et révèlent de véritables trésors cachés dans un décor insolite.
    Retour au soleil, et montée vers les crêtes de l’Isalo d’où l’on peut profiter d’un superbe panorama vers le nord. Une fois ces fantastiques murailles franchies, l’originalité des formes dues à une érosion plurimillénaire ouvre son cœur. Tout au long du circuit, l’étonnement succède aux surprises, tellement les formes, les couleurs et la végétation ont su développer d’exceptionnels paysages ! Après 4 heures de marche dans ce désert minéral sous un soleil de plomb, voilà la récompense de cette dure journée : la piscine naturelle et ses eaux accueillantes. Un bain bien mérité et un coucher du soleil apaisant concluent cette fin de journée. Repas au lieu de campement et nuit en bivouac.    
    `
  },
  {
    jour: 12,
    circuit: "PISCINE NATURELLE – NAMAZA- IFATY",
    description: `À 4 heures de marche et 200m de dénivelé et 4 heures de route.
    Petit-déjeuner dans la fraîcheur du matin (les nuits sont un peu fraîches !), sous les premiers rayons du soleil. La marche débute facilement avec la traversée d’un plateau aux allures de savane africaine. Ensuite commence la descente vers le fond d’un vallon escarpé sur un sentier bien aménagé avec ses escaliers pour la sécurité des « autres » touristes moins aventureux. Et au fond coule la Namaza, au bord de laquelle une agréable forêt protectrice du soleil abrite des lémuriens peu farouches. En remontant le cours d’eau sur environ 30 minutes, arrivée à la somptueuse cascade des Nymphes et ses eaux fraîches accueillantes, dans un décor sombre où le soleil ne perce jamais les eaux limpides. 
    Transfert  pour Tuléar. Passage à Ilakaka, la ville du saphir et Transfert à Mangily.
    Un petit village balnéaire du sud de l’île, face à un des plus grands lagons du monde. 
    3 Nuits à l’hôtel en bord de la mer en demi-pension. 
    `
  },
  {
    jour: "13 au 15",
    circuit: "IFATY",
    description: `Le lagon de Ranobe ou d’Ifaty est indéniablement un des plus beaux lagons de la planète et un site de plongée mondialement reconnu, il offre sur plus de 40kms des sites de plongée exceptionnels qui figurent parmi les plus prisés de la Grande île. Avec ses eaux limpides, ce lagon constitue un véritable joyau écologique en raison de sa faune et de flore extrêmement riches. Il comporte deux grandes passes qui garantissent chacune une fascination à tous les plongeurs qui y viennent pour contempler ses fonds marins très uniques en leur genre.
    Les courants chauds et froids émergents viennent soutenir et alimenter de grandes quantités de plancton microscopique et le krill, principale source de nourriture qui prend en charge une vaste gamme d’espèces – jusqu’à 46 types de coraux et plus de 400 espèces de poissons, seuls. Un coup d’œil sur une carte marine révèle un autre secret profond: des canyons serpentant le long de la barrière de corail, offrant des sites de plongée exceptionnels et des habitats coralliens sains.    
    `
  },
  // {
  //   jour: 14,
  //   circuit: "AKANIN’NY NOFY – TAMATAVE - MAHAMBO",
  //   description: `Transfert en bateau vers Tamatave. Accueil à l’arrivée au port fluvial. Déjeuner libre. Et  transfert sur Mahambo. Après midi libre sur la plage.
  //   Nuit à l’hôtel la pirogue au Bord de la mer
  //   `
  // },
  // {
  //   jour: "15 au Jour 19",
  //   circuit: "SAINTE MARIE",
  //   description: `Transfert pour Sainte Marie, accueil et transfert au Villa  au bord de la mer 
  //   Séjour de 5 jours et 4 nuits
    
  //   SAINTE MARIE ET LES BALEINES Journées libres à la découverte de l'île jardin, à la végétation luxuriante. Une merveilleuse île authentique sous les tropiques, à proximité de la côte est de Madagascar. Une vaste cocoteraie qui s'ouvre sur une plage de sable blanc léchée par les eaux calmes de l'Océan Indien.
    
  //   L'île Ste Marie est l'endroit balnéaire le plus réputé pour l'observation des baleines à bosse à Madagascar.
  //   Balade en bateau pendant la grande migration des baleines (de juillet à septembre).
  //   Il est également possible de pratiquer "le safari baleine vu du ciel". Merci de nous consulter pour avoir plus d'informations.
  //   Safari baleine offert par l’agence Sudmadatrek
  //   `
  // },
  // {
  //   jour: 20,
  //   circuit: "SAINTE MARIE – TANA",
  //   description: `Transfert à l’aéroport et vol pour Tana.
  //   Visite de la ville haute et du palais de la Reine.
  //   Visite du marché de la digue.
  //   Transfert à l’aéroport et vol retour.
  //   `
  // },
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