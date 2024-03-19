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
      circuit: "ANTANANARIVO – ANTSIRABE",
      description: `Départ tôt pour Antsirabe. Cap vers le sud de Madagascar. En route, découverte du monde rural des hautes terres : paysages, villages entourés de rizières, architecture, mode de vie...
      Halte à la ville d’Ambatolampy connue pour la fabrication de marmites en aluminium : visite d’un atelier familial sur place. 
      Arrivée à Antsirabe, ville thermale, développée par les missionnaires norvégiens. Elle est la première ville agricole ainsi que la deuxième ville industrielle de Madagascar, en témoignent les superbes maisons bourgeoises. Déjeuner libre.
      Arrivée sur Antsirabe, départ pour la découverte des lacs Tritriva et Andraikiba.
      Nuit et dîner à l´hôtel.
      `
    },
    {
      jour: "Jour 2",
      circuit: "ANTSIRABE – PAYS ZAFIMANIRY  - FIANARANTSOA",
      description: `Départ  très tôt pour le pays Zafimaniry. 6 heures de route à travers montagnes et vallées à moitié dénudées : conséquence de la technique du « tavy », aussi appelée culture sur brûlis et pratiquée depuis plusieurs générations de Zafimaniry. Traversée de villages typiques. Déjeuner à Ambositra puis  pour la capitale Betsileo. Traversée des paysages typiques des hautes terres, entre rizières en terrasses et maisons de terre cuite. Déjeuner Libre.
      Visite de la plantation de Thé l’après-midi.Mme Fideline nous accueillera et nous guidera à travers les différentes machines pour nous expliquer les différentes étapes d’usinage du thé. Après avoir étudié le processus qui transforme les feuilles en thé et la mise en sac pour l’exportation et le conditionnement, nous dégusterons les différentes qualités de thé et nous nous baladerons à travers l’immense plantation et le magnifique paysage qui l’entoure.
      Nuit et dîner à l’hôtel
      `
    },
    {
      jour: "Jour 3",
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
      jour: "Jour 4",
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
      jour: "Jour 5",
      circuit: "AMBALAHAZO – AMBOHIMAHAMASINA – AMBALAVAO 5 heures de marche et 376m+, 292m- de dénivelé cumulé",
      description: `Après le petit déjeuner à la fraîcheur de l’aube, nous commencerons par aller visiter une forge artisanale afin de découvrir l’art de façonner les outils agricoles. Ici, le forgeron vous initiera à quelques gestes avec le marteau et le soufflet en main. 
      Après cette leçon,  nous retournerons au gîte pour le déjeuner, puis nous irons visiter les tisseuses et découvrir comment se travaille la soie sauvage dans cette région de Madagascar. 
      Pour terminer le séjour, retour à Ambohimahamasina le chef-lieu de commune, puis direction Ambalavao en voiture.
      Nuit et dîner à l’hôtel.    
      `
    },
    {
      jour: "Jour 6",
      circuit: "AMBALAVAO – ANDRINGITRA 4 heures de marche et 400 m de dénivelé",
      description: `Départ le matin de bonne heure en direction du massif de l’Andringitra. Visite d’un atelier de fabrication artisanale de papier Antemoro. 
      A Ambalavao, vous attaquerez la piste qui conduit à l’entrée du parc national sur environ 45 km. 
      Superbes paysages que l’état de la piste donnera tout le loisir de contempler. A Namoly, 
      vous entrerez dans le parc et y commencerez la première journée de randonnée dans ce parc pour aller vers le bain royal et rejoindre le camping à Andriampotsy sur une durée d’environ 4 heures de marche et 400 m de dénivelé.
      Votre premier bivouac s’effectuera au lieu de campement d’Andriampotsy, au pied d’immenses falaises granitiques, à une altitude de 2050 m.    
      `
    },
    {
      jour: "Jour 7",
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
      jour: "Jour 8",
      circuit: "ANDRINGITRA –TSARANORO 4 heures de marche et 700m- de   dénivelé",
      description: `Départ après le petit déjeuner pour la descente vers la vallée de Tsaranoro. 
      Possibilité de voir des Pachypodium d’enchyflorum, différentes espèces d’aloès et lézards. 
      Une fois un pied du massif, le chemin continue et traverse plusieurs villages Barabory où les cultures Betsileo et Bara se mélangent et coexistent. 
      A partir du village de Morarano, vous entamerez la traversée de cette magnifique vallée du Tsaranoro ;
      Nuit et dîner en Lodge    
      `
    },
    {
      jour: "Jour 9",
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
      jour: "Jour 10",
      circuit: "VALLEE DE TSARANORO – ISALO",
      description: `Départ pour l’Isalo. La route du Sud qui mène à Ranohira prend alors des airs de solitude avec des monolithes granitiques et une végétation plus éparse. Passé la ville d’Ihosy, le fameux plateau d’Ihorombe s’étend à l’infini pour finalement aboutir face au somptueux massif de l’Isalo. Déjeuner Libre.
      Dans l’après-midi, installation à l’hôtel. Nuit et dîner a l’hôtel.    
      `
    },
    {
      jour: "Jour 11",
      circuit: "CANYON – PISCINE NATURELLE 6h de marche ,500m de dénivelé",
      description: `Transfert pour Ranohira Basse
      Une petite marche d’approche est nécessaire pour atteindre la base de ces falaises immenses où ont subsisté quelques reliques d’une forêt abritant quelques lémuriens dont le lémur catta, reconnaissable à sa longue queue ornée d’anneaux blanc et noir, et le sifaka tout blanc, sauteur infatigable. Avec de la chance et du silence, il est possible de les surprendre au détour du chemin qui sinue entre les arbres et les blocs rocheux. Les canyons ouvrent leurs portes et dévoilent leurs splendeurs aux curieux qui osent s’aventurer dans leurs entrailles. Les immenses parois écrasent par leur grandeur et révèlent de véritables trésors cachés dans un décor insolite.
      Retour au soleil, et montée vers les crêtes de l’Isalo d’où l’on peut profiter d’un superbe panorama vers le nord. Une fois ces fantastiques murailles franchies, l’originalité des formes dues à une érosion plurimillénaire ouvre son cœur. Tout au long du circuit, l’étonnement succède aux surprises, tellement les formes, les couleurs et la végétation ont su développer d’exceptionnels paysages ! Après 4 heures de marche dans ce désert minéral sous un soleil de plomb, voilà la récompense de cette dure journée : la piscine naturelle et ses eaux accueillantes. Un bain bien mérité et un coucher du soleil apaisant concluent cette fin de journée. Repas au lieu de campement et nuit en bivouac.    
      `
    },
    {
      jour: "Jour 12",
      circuit: "PISCINE NATURELLE – NAMAZA- IFATY",
      description: `À 4 heures de marche et 200m de dénivelé et 4 heures de route.
      Petit-déjeuner dans la fraîcheur du matin (les nuits sont un peu fraîches !), sous les premiers rayons du soleil. La marche débute facilement avec la traversée d’un plateau aux allures de savane africaine. Ensuite commence la descente vers le fond d’un vallon escarpé sur un sentier bien aménagé avec ses escaliers pour la sécurité des « autres » touristes moins aventureux. Et au fond coule la Namaza, au bord de laquelle une agréable forêt protectrice du soleil abrite des lémuriens peu farouches. En remontant le cours d’eau sur environ 30 minutes, arrivée à la somptueuse cascade des Nymphes et ses eaux fraîches accueillantes, dans un décor sombre où le soleil ne perce jamais les eaux limpides. 
      Transfert  pour Tuléar. Passage à Ilakaka, la ville du saphir et Transfert à Mangily.
      Un petit village balnéaire du sud de l’île, face à un des plus grands lagons du monde. 
      3 Nuits à l’hôtel en bord de la mer en demi-pension. 
      `
    },
    {
      jour: "Jour 13 au 15",
      circuit: "IFATY",
      description: `
      Le lagon de Ranobe ou d’Ifaty est indéniablement un des plus beaux lagons de la planète et un site de plongée mondialement reconnu, il offre sur plus de 40kms des sites de plongée exceptionnels qui figurent parmi les plus prisés de la Grande île. Avec ses eaux limpides, ce lagon constitue un véritable joyau écologique en raison de sa faune et de flore extrêmement riches. Il comporte deux grandes passes qui garantissent chacune une fascination à tous les plongeurs qui y viennent pour contempler ses fonds marins très uniques en leur genre.
      Les courants chauds et froids émergents viennent soutenir et alimenter de grandes quantités de plancton microscopique et le krill, principale source de nourriture qui prend en charge une vaste gamme d’espèces – jusqu’à 46 types de coraux et plus de 400 espèces de poissons, seuls. Un coup d’œil sur une carte marine révèle un autre secret profond: des canyons serpentant le long de la barrière de corail, offrant des sites de plongée exceptionnels et des habitats coralliens sains.

      <strong>Exemple de site de plongée :</strong>

      <li>Massif des roses, Jardin de corail (à l’intérieur du lagon)</li>
      Où l’on peut voir des poissons pierres, poissons lions, poissons scorpions, perroquets, raies pastenagues et torpilles.
      <li>Grotte Juliette, Akio, Cathedrale (dans les passes)</li>
      Où débute une rencontre avec des poissons de verre, loches, mérous puis dans les failles taillées dans la roche, un labyrinthe pour les raies, barracudas et carpes rouges.
      <li>Bevato, Tortuga, Snapper Point (a l’extérieur du lagon)</li>
      On y rencontre les murènes javanaises, les raies à tâches noires, vivaneaux bossus, les raies mantas et des requins

      <br>Balade à Faire autour:<br>

      Visite de la forêt des baobabs en charrette à Zébus, des villages de pêcheurs Vezo et de la belle réserve Reniala. Toutes ces activités sont bien entendu inclues dans le tarif.
      Vous pourrez également vous prélasser sur la plage paradiasiaque qui borde le site. 
      Nuit à l'hôtel
      `
    },
    {
      jour: "Jour 16",
      circuit: "IFATY – TANA – VOL RETOUR",
      description: `Transfert sur Tuléar et vol pour  Tana. Selon Horaire de vol possibilité de découvrir le marché de la digue.
      `
    },
  ],
  "english": [
    {
      jour: "Day 1",
      circuit: "ANTANANARIVO – ANTSIRABE",
      description: `Meet and greet  at the international airport of Ivato, and head straight south. Throughout the plains of the highlands, you’ll discover the first amazing scenery of your trip:  the rural villages surrounded by rice fields and the population of farmers whose lifestyle has not changed since the dawn of time
      We’ll stop to visit the city of Ambatolampy; well known for its aluminum craftsmanship.
      Free lunch before Antsirabe, the thermal city constructed and developed by Norwegian missionaries. This city is ranked first in agriculture and the second in industry in the whole country. The beautiful middle class houses downtown are witnesses of this frivolous era. 
      Then we keep on heading south to reach the lakes Tritriva and Andraikiba.
      Diner and night at the hotel    
      `
    },
    {
      jour: "Day 2",
      circuit: "ANTSIRABE – PAYS ZAFIMANIRY  - FIANARANTSOA",
      description: `We leave the hotel early in the morning. The Zafimaniry region is a 6 hour-long trip, and the road is tough on the end. The track runs through bare mountains and valleys: 
      the consequence of “Tavy”: the infamous “slash and burn” that has been practiced here for generations by the Zafimaniry but has destroy all the neighboring forests. We’ll visit a couple traditional villages and eat at a restaurant down in Ambositra, then reach Fianarantsoa, the capital of the Bestileo region.
      Visit of the Tea Plantation. We’ll walk through the tea plantations and the typical betsileo villages.  After a 
      little lesson on the process and the different machinery that come with it, we head towards the conditioning plant. A little degustation and wandering around and we head back to the hotel at Fianarantsoa.
      Night and diner.
      `
    },
    {
      jour: "Day 3",
      circuit: "FIANARANTSOA - AMBALAVAO – ITAOLANA 4 hours of walking and  400m+ et 350m- of height difference.",
      description: `To enter this region filled with history, we leave Ambalavao and head south, to the rural community of Ambohimahamasina. It’s a 45km ride, but we will need more than three hours round trip to reach our objective. Starting from the center of the upper town, we head down, for an hour toward the village of ’Andranomangitsy located at the foot of the sacred mountain of Angavoa. The tracks then reaches the wonderful village of Andalandranovao in the middle of the rice fields. There, our hosts are expecting us for our first meal, rice based of course. We’ll have a little talk and then hit the track again, eastward to another village, Vohimarina, the Itaolana Mountain. From the bottom of the valley, the summit in all its magnificence covered with sacred primary rainforest.
      This first walk will give you a little taste of our little stay here. At night fall we’ll assign you to a local family who will welcome you with warmth. Your hosts are always happy to share a good (rice of course) meal and host vasaha (strangers)/
      `
    },
    {
      jour: "Day 4",
      circuit: "ITAOLANA – AMBALAHAZO 6 hours walking and  591m+, 716m- of difference in height.",
      description: `This second day, you’ll climb the two summits of the mountain of Itaolana, one of the three sacred mountains around Ambohimahamasina, that peaks at 1489m. It’s a three-hour adventure that starts in the middle of the Tavy where we will pass by two posts where guards are assigned to preserve the kingdom. From there, we have a pretty intense walk throughout the eucalyptus forest and the tall grass in order to reach the primary forest at the roots of the mountain.  The traditional guide is the guardian of the forest. This means his Saotra (gifts for the ancestors) are necessary to the good climbing.
      We pass by the third guard post before reaching the first summit and the King’s stele.
      The second peak is just half an hour away and we get there fast. The panorama is breath taking, on the whole territory of the Ambohimahamasina territory and the neighboring mountain ranges of the Tanala Land (people of the forest).
      We can also see our next stop at the horizon, the Andringitra rocky Mountains.
      After a well-deserved break, we finally head down to the inhabited valleys surrounded by eucalyptus.
      
      We sleep at Ambalazaho, a village with a lake ten minutes away. There, local women will present to you the traditional activities that have been developed these last years thanks to sustainable tourism and NGOs,  among other things.
      `
    },
    {
      jour: "Day 5",
      circuit: "AMBALAHAZO – AMBOHIMAHAMASINA – AMBALAVAO 5 hours of walking and 376m+, 292m- of difference in height.",
      description: `Right after a nutritious breakfast in the coolness of the morning. We’ll start by visiting an home-made forge and discovering how people make their tools here. You might learn some techniques!
      After that, the silk crafts shops. Here, a small number of women have been weaving silk for generations. It used to be wool made out of wild silk but this practice has been lost over time and now it is cotton that is used. However, some craft shops want to come back to this old technique, and they reopened a workshop in Ambalavao, this development is partly funded by the NGO CCD Namana.  .
      Unfortunately, it’s tiime to head back to the commune of Ambohimahamasina and get in the car. Before leaving, a last look at these unmovable mountains that surround us. Pretty satisfying when you’ve conquered them. The ride back is full of images that will last, we go back to Ambalavao for a whole new adventure.
      Nigh and diner at the hotel in Ambalavao    
      `
    },
    {
      jour: "Day 6",
      circuit: "AMBALAVAO – ANDRINGITRA 4 hours walking and 400 m of difference in height.",
      description: `Today, you will discover the Andringintra mountain range. On our way, the Antemoro paper craft shop in Ambalavao is worth a detour. We hit the track that leads to the entrance of the on roughly 45km. A beautiful scenery that the terrible state of the road will give you all the time to admire. As soon as we get to Namoly, we enter the park and start our first day by going to the royal bath and the camping site of Andriamposty. Around 4 hour a walk and 400 meters of difference in height.
  
      Diner and night right under the foot of the granite cliff, at  2050 meters of altitude.    
      `
    },
    {
      jour: "Day 7",
      circuit: "ANDRINGITRA 7 to 8 hours of walk and 600m+ 900m- of difference in height.",
      description: `Early departure to climb the Pic Bobby. We need to catch the morning lights to appreciate the view. The summit is very exposed to the climatic influences and the humidity from the east and this can bring a lot of fog around and spoil the trek a little.
  
      After only 2 hours and a half of climbing, we’ll discover the amazing panorama on the whole area. If the weather is on your side, you might even catch a glimpse of the Isalo mountain range, down south. Our stop in three days. 
      After that, the circuit goes down to the “extra-terrestrial foot hills”. They were called this way because of their intriguing deserted and surrealist landscapes. The steep slopes around make it seem like taken out of a lunar scenery.
      Before heading back to the camp, we will cross a forest of palm trees endemic to this very side of the mountain, the “ravenea glauca”. The camping site, near the freshening waters of the river, will be most welcome after this big day    
      `
    },
    {
      jour: "Day 8",
      circuit: "ANDRINGITRA –TSARANORO 4 hours a walk and 700m- of difference in height",
      description: `After a good breakfast, we leave for the Tsaranoro valley, home of many types of lizzards, aloes, and Pachypodium d’enchyflorum. Once on the foothills, the track crosses several Barabory villages. Here, we can witness a cultural mix, the Betsileo and the Bara
      Starting from the village of Morarano, we’ll begin the crossing of the wonderful valley of Tsaranoro.
      Night and night at the Lodge.    
      `
    },
    {
      jour: "Day 9",
      circuit: "TSARANORO Valley  or Resting day at the camp",
      description: [{
        "Circuit Hara Avaratra": `
        A small (half a day) climb on a little distance. We start form the camp throughout the rice fields, then up the hill during an hour. On our way down, we take a detour by a little, intricate forest where several families of Lemur Catta have settled. Another hour to go before heading back. You’ll be rewarded with a beautiful view of the surrounding villages
        `,
        "Circuit Sacred Forest and Village: 4 hour long": `This circuit starts on an easy ground, taken by the locals to cross the cultures of manioc and rice. We’ll cross the village of Andonaka and visit the green school of Tsaranoro. After the village, a small track we reach the sacred forest inhabited by Lemur Catta, who wander and sun bath on the big flat rocks. The forest is also filled with tombs of ancestors for the Betsileo and the Bara people. We’ll visit some and reach a natural pool that brings a magical aspect to the forest. After a little break, we head to the Soavahiny village, literally “where the strangers are welcome”, not far from the forest. On our way back to the camp, you’ll see the free clinic, the only way for everyone around to get medicines in the whole area. The visit is really interesting and you may want to support the program by giving away some of your extra pills and medicines.`,
        "Circuit Tsaranoro": "C’est une randonnée d’une journée. Vous partez tôt dans la matinée. Depuis le camp, il y a 4h à 4h30 de marche pour atteindre derrière le haut du Tsaranoro (le Mont Tsaranoro même n’est accessible qu’en escaladant une paroi titanesque). Au milieu de la colline, vous trouverez les tombeaux Bara insérés dans la colline même. Sur la dernière partie de la montée, il y a un passage difficile. A l’arrivée, vous aurez une vue superbe sur les montagnes du Sud Malgache. Le déjeuner pique-nique sera pris au sommet, derrière le Tsaranoro. Pour redescendre, il faut compter environ 3 heures.",
        "Paragliding": "There is also the opportunity to do paragliding in these mountains. There are 5 spots, and incredible thrills are guaranteed, even if you’ve never done it. It is important though to tell us in advance, at least 48 hours before so that we can prepare it all for you in an efficient way.",
      }]
    },
    {
      jour: "Day 10",
      circuit: "VALLEE DE TSARANORO – ISALO",
      description: `Time to leave the Tsaranoro Valley, it’s a 3 hour and a half ride to the city of Ranohira, and its famous national park; Isalo.
      As we head South on the road the landscapes drastically change. Pretty fast, the panorama flattens and immense tall grass fields surround us. This is the plateau of Ihorombe, land of the zebu farmers and of the golden horizon. Only one road goes through, the RN7, and people walk huge distances to meet in different villages in these savannah-looking plains.
      Finally, we get to Ranohira, and the Isalo, a deserted mountain barrier.
      Free lunch, setting up at the hotel, and diner.
      Night and the hotel.    
      `
    },
    {
      jour: "Day 11",
      circuit: "CANYON – NATURAL POOL:  6 hours of walking and 500m of difference in height.",
      description: `Transfer to the lower Ranohira.
      We need to walk a little to reach the foot of this huge cliffs, where the remnants of an old forest have survived, hosting a couple families of Lemur Catta, recognizable at  their black and white tail, and the pure white Sifaka.
      With luck, and silence, you might meet a couple of them after a bend of the track that runs between dry trees and rock. But the canyons eventually open their gates and reveals their treasures to the curious explorers who dare enter the narrow path.
      
      Back in the sun, and up the crest of the cliff where you will admire a beautiful panorama of the North. Once inside these walls, you’ll be struck by the weird shapes, consequence of thousands of years of erosion. The colors, vegetation and profiles are exceptional and some see animals and patterns on the rock.
      After 4 hours of walking in this mineral desert, under a hot sun, you’ll be rewarded with water. A small oasis lies in the middle of nowhere, for those who can find it. A good bath and the sunset will appease your day and conclude this first part of the visit.
       A good meal and night at the camping site.    
      `
    },
    {
      jour: "Day 12",
      circuit: "NATURAL POOL – NAMAZA- IFATY 4 hours of walking and 200 meters of difference in height",
      description: `Today, it’s the Anamaza canyons that are heading for. It starts slowly, early in the morning to avoid the hottest time of the day, as we cross the same savanna-looking plateau and head down deep in a steep valley. The way down is well fitted out for the safety of less adventurous visitors. In the middle of the canyon runs the Namaza, a little stream protected by a comfortable forest that harbors a really laid back population of lemurs. There are not shy and we’ll see many of them while going up the water towards the beautiful waterfall of the Nymphs and its fresh waters. The difference of landscape and sensations between here and the plateau above is striking and really specific to this place.
      After this scenery, time to hit the road, for the transfer to Tuléar. 
      On the way, a look at some familial tombs of the Antandroy and the Mahafaly tribes and the sapphire cities that popped out of nowhere in the desert, where the thirst for blue stones is just too strong. 
      After that, Mangily, a tiny village on the coast, south of the island, facing one of the most beautiful lagoon of the planet.
       3 Nights at the hotel, half pension on the seashore.    
      `
    },
    {
      jour: "Day 13 to 15",
      circuit: "IFATY",
      description: `This lagoon of Ranobe is a world famous diving site and one of the most beautiful lagoon on the planet. It offers on more than 40km of coral reef some of the most sought after locations to observe underwater wildlife. Its crystalline blue water and its extremely rich fauna and flora truly make it an ecological jewel. There are two channels, with really characteristic floors that will guarantee fascination to the diver inside you.
      Free lunch.
      The mixing flows of warm and cold water come sustain the great quantities of plankton and krill that nourish more than 400 species of fish and 46 types of coral reef. A glimpse on a marine map will reveal another secret, way deeper. There are canyons that run along the barrier, offering exceptional and preserved sites.
      
      Night and diner at the hotel<br>
      -Exemples of diving sites :
      <li>The Rose FlowerBed, Corral Reef Gardenl (inside the lagoon)</li>

      There are stone fish, lion fish, scorpion fish, parrots, stingrays and torpidos

      <li>Grotte Juliette, Akio, Cathedrale (inside the paths)</li>

      You will see glass fish and loaches and grouper inside the rifts. The paths have shaped a monumental maze for rays, barracudas and red carp. 

      <li>Bevato, Tortuga, Snapper Point (outside of the lagoon)</li>

      This site is famous for moray eels and black spotted rays. There are also red snappers, giant stingrays and sharks. <br>



      -A Walk around:<br>

      Visiting the baobab forest aboard a zebu cart  is always really appreciated by visitors. The Vezo villages and the beautiful reserve of Reniala around are also a must-see. 
      All these activities are of course included in the price.
      You’ll have all the time to linger in the sand and have sunbaths on the paradisiacal beach, even a massage or beach sports, buying souvenirs.

      Nigh at the hotel.
      `
    },
    {
      jour: "Day 16",
      circuit: "IFATY – TANA – FlIGHT BACK HOME",
      description: `Transfer to Tuléar to take the flight to Tana. There, if you have time before your connection, maybe visit the famous « marché de la digue »
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