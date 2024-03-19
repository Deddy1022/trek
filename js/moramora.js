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
      description: `Début de votre voyage à  Madagascar en allant vers le sud. Découverte du monde rural des Hautes Terres Centrales avec ses rizières en terrasse et leurs propres techniques de culture, et les maisons traditionnelles en pisé rouge... 
      Halte dans le petit bourg d’Ambatolampy situé au pied du massif de l'Ankaratra. Déjeuner Libre. 
      Son artisanat d'ustensiles de cuisine et ses mimosas fleuris en juillet participent à sa renommée à travers le pays. 
      Vous poursuivez ensuite votre circuit à Madagascar vers Antsirabe : la ville thermale dont vous visiterez les rues à la mode locale : en pousse-pousse  ou à pied.
      Nuit et dîner à l’hôtel       
      `
    },
    {
      jour: "Jour 2",
      circuit: "ANTSIRABE",
      description: `Découverte de la région des Vakinakaratra. \n
      -	En VTT : Il faut compter pas moins de 18 kilomètres pour atteindre les lacs (7km pour Andraikiba + 11km pour Tritriva). Emprunter la RN34 en direction de l’ouest d’Antsirabe, puis, à 7km, bifurquer à gauche pour atteindre le 1er lac Andraikiba. Au bout de 500m, le lac apparaît sur la droite, ainsi que ses  villages de pêcheurs qui vivent de poissons d’eau douce, tels que le tilapia, la carpe ou le black bass. Pour atteindre le 2ème lac, le Lac Tritriva, considéré sacré par les malgaches, il faut encore continuer 10 kms sur une piste de terre rouge un peu accidentée et traverser des paysages typiques des hautes terres avec ses maisons en briques. La région est très fertile car la terre est volcanique. Arrivé au village de Belazao, prendre une petite montée à droite à la sortie du village qui mène au lac sacré, encaissé entre les falaises. La profondeur de ce lac dépasse les cent mètres, et ses couleurs, d’un bleu-vert profond offrent réellement une vue enchanteresse. Le gardien de ce lac sacré sera présent et pourra vous narrer la légende des Roméo et Juliette malgaches. Déjeuner pique-nique.
      
      Nuit et dîner à l’hôtel      
      `
    },
    {
      jour: "Jour 3",
      circuit: "ANTSIRABE - RANOMAFANA",
      description: `Reprise de la route vers Ranomafana et arrêt à Ambositra. Cette petite cité, à plus de 1200 mètres d’altitude, est le carrefour commercial des tribus Zafimaniry. Les artisans descendent des villages environnants et parfois parcourent de très grandes distances pour venir y vendre leur précieux artisanat de bois. 
      Promenade dans la ville et visite d'un atelier de sculpteur. 
      Déjeuner libre.
      Pour reprendre la route de Ranomafana il faut traverser le pays Betsileo, l’ethnie principale de la province de Fianarantsoa. 
      Leur maisons en terre cuite sont très caractéristiques et les rizières en terrasse de la région témoignent du travail titanesque entrepris il y a déjà plusieurs siècles dans cette région particulièrement difficile à cultiver.
      Nuit et dîner à l’hôtel
      `
    },
    {
      jour: "Jour 4",
      circuit: "RANOMAFANA - FIANARANTSOA",
      description: `En avant pour une des étapes les plus originales de ce circuit à Madagascar : une journée entière consacrée à la visite du Parc National de Ranomafana. En 1986, suite à la découverte d’une espèce de lémurien inconnue, le Hapalémur Aureus, qui se nourrit exclusivement de pousses de bambou (accessoirement chargées en cyanure, affaire encore non élucidée !), la création du parc fut décidée. Cette forêt tropicale humide a aussi la particularité d’abriter de nombreuses espèces de plantes endémiques ainsi que des animaux tel que le fosa, la civette malgache, qui est un grand prédateur de lémuriens et de poules ! Les aventuriers en quête de nouvelles découvertes ne seront pas déçus de cette étape du voyage à Madagascar. 
      Visite de la réserve dans la journée avant de partir pour la capitale Betsileo, Fianarantsoa. Déjeuner libre.
      Nuit et dîner  à l’hôtel
      `
    },
    {
      jour: "Jour 5",
      circuit: "FIANARANTSOA - ANDRINGITRA",
      description: `Durée : 4h de marche Difficulté : Peu Difficile Dénivelée : 350 mètres
      Départ pour le Parc National de l’Andringitra.
      A Ambalavao, visite de la fabrique artisanale du papier Antemoro. Le procédé, qui transforme en papier végétal de l’écorce du mûrier Avoha a été introduit à Madagascar au XVème siècle par les Arabes et les Malgaches utilisent encore l’exacte même technique  dans ce petit atelier d'Ambalavao.  Nous partons ensuite pour la réserve d’Anja, un parc équitable fondé par l’association de quatre petits villages (situés à +/- 10 km d'Ambalavao) où l’on peut y observer des lémuriens et des caméléons. Vous serez séduit par ce projet qui aide directement au développement de ces villages isolés et à l’amélioration du niveau de vie de la population locale (sans compter les projets de reboisement et de préservation de la biodiversité entrepris).
      Après cela, une piste parfois difficile mais aux paysages splendides, à travers la fameuse Porte du Sud, nous mène jusqu’au cœur du parc  de l’Andringitra. Cet énorme massif se dresse devant nous et barre l’horizon de ses crêtes granitiques. C’est l’entrée de  la vallée de Namoly, dominée par les falaises, dans lesquelles deux grandes cascades se sont frayé un chemin au fil des millénaires. Descendez la rivière Zomandao et traversez là pour rejoindre une petite clairière. C’est le lieu de votre premier bivouac, Belambo, qui signifie littéralement « beaucoup de sangliers »  en Malgache.
      `
    },
    {
      jour: "Jour 6",
      circuit: "ANDRINGITRA NATIONAL PARC",
      description: `Durée : 6h de marche \nDifficulté : Peu difficile Dénivelée : 750 mètres\n
      Description :\n
      Pour mieux découvrir le parc, nous commençons par une petite boucle matinale dans la forêt pour accéder au pied des cascades de la rivière Zomandao. L’eau est ici une grande richesse et vous êtes dans une forêt tropicale humide, typique du climat pluvial de l’Est et bien différente de la forêt tropicale sèche de la vallée du camp. A travers une abondante végétation où se côtoient plantes médicinales Malgaches, Orchidées, Fougères, Phylipias  et  Calenchoees, vous parvenez au bord de la rivière. On y trouve une grotte et ses vestiges : l’ancienne habitation d’une famille de gardiens de zébus qui y vivaient avant que la forêt soit protégée. Après un point de vue sur le cirque et ses cascades, vous replongez dans la végétation qui se parsème  peu à peu de grands arbres de la famille des  Dombeyas  et des  Agoryas, autour desquels s’entremêlent de longues et lourdes lianes. Vous passerez également à côté des canaux à l’origine de l’irrigation des rizières de la vallée de  Namoly.  Le sentier débouche ainsi au pied de l’impressionnante chute  Andrianbavy dite « la Cascade de la Reine ». A la saison sèche, il est possible de traverser le torrent pour approcher un peu plus loin le bas de la seconde chute celle d’Andriandahy  ou « Cascade du Roi ». A l’origine, ces noms résultent de la venue de la reine et du roi d’Ambalavao au pied de ces cascades de 250 et 300 mètres de haut, à la recherche de l’eau pure qui leur permit plus tard, sous les conseils d’un guérisseur d’enfanter huit enfants.
      Après cette promenade, nous rebrousserons chemin pour grimper tranquillement sur le plateau qui surplombe le cirque. A la fin de la montée, une superbe vue s’ouvre devant vous sur de grandes falaises granitiques, les supports du célèbre Pic Boby. Sur cette immense prairie d’altitude ne poussent plus que différentes variétés de  Phylipias  ainsi que de belles Orchidées. Vous commencez alors sa traversée vers le Sud, en passant par les magnifiques piscines d’Andranolava. Lieu idéal pour vous détendre, les moins frileux pourront également s’y baigner.
      Pour rejoindre l’emplacement du campement, vous continuerez à marcher en direction des falaises, en la charmante compagnie des oiseaux qui y ont élu domicile, pour la plupart endémiques. Vous traverserez une dernière fois la rivière à un endroit dénommé Andrianbola  ou Cascade du Prince, puis vous parvenez à un petit torrent. Vous remontez enfin ce dernier pour arriver au lieu de votre deuxième bivouac, Andriampotsy ou « cascade blanche », où vous dormirez littéralement au pied des falaises d’Andringitra.
      `
    },
    {
      jour: "Jour 7",
      circuit: "ANDRINGITRA NATIONAL PARC",
      description: `Durée : 8h de marche\n
      Difficulté : Difficile\n
      Dénivelé : 858 mètres\n
      Description :\n
      Voici enfin venu le temps de gravir le point culminant du massif d’Andringitra. Un chemin aménagé, de 3000 marches d’escalier, permet de franchir les falaises et d’accéder au fameux pic. Il commence par traverser plusieurs torrents et vous remarquez en sa bordure quelques Aloés, Fougères Arborescentes, de jolies Hibiscus ainsi que la très rare  Drosera, une petite plante carnivore des milieux humides. Vous pourrez aussi observer les  cannelures des roches, dues à l’érosion millénaire de l’eau. Vous débouchez alors sur un col, d’où vous pouvez enfin découvrir l’objet de votre randonnée. De là, le sentier descend dans une cuvette très humide, où prolifère mousses, lichens  et certains Phylipias  Après sa traversée, un raidillon final sur les dalles vous permet d’atteindre le sommet du Pic Bobby. Vous êtes à 2658 mètres d’altitude, sur le deuxième sommet le plus haut de Madagascar. Son nom qui peut paraître curieux de prime abord, est en fait celui du premier membre du groupe d’alpinistes/géologues à avoir atteint le sommet : leur chien Bobby. Mais il est également appelé Imarivolanitra, c’est-à-dire « proche du ciel » en Malgache.  Si vous avez la chance de ne pas être dans les nuages, une vue panoramique époustouflante, sur toute la région environnante s’offrira à vous : le parc et le massif de l’Isalo au Sud, le massif du Tsaranoro et la montagne du Bonnet de l’Evêque  à l’Ouest, la Porte du Sud et le cirque d’Ambalavao au Nord, et il est même quelquefois possible de distinguer la côte,  à l’Est. Vous verrez bien sûr, le massif d’Andringitra, et notamment sur le Pic Bory de l’autre côté de la vallée.
      Après ce moment proprement inoubliable, vous descendrez par le même chemin et repasserez par le campement pour traverser le plateau, cette fois en direction du Nord Ouest. Le sentier vous conduira peu à peu vers un petit col où vous parviendrez sur un petit plateau herbeux. A quelques kilomètres : le Plateau des Extraterrestres ou  Plateau des Lumières. Dans l’ambiance lunaire de cette étendue granitique parsemée de petites piscines naturelles, vous pourrez admirer les empilements de pierres en équilibre caractéristiques. On y retrouve la végétation de versant Ouest : Palmiers,  Pattes de Poule  et  Calencoees.  Le chemin vous emmène au Nord du plateau, d’où vous redécouvrirez le massif du Tsaranoro et la vallée Sahanambo.
      La redescente du massif d’Andringitra, dans une forêt de Fougères et de Palmiers Sauvages, permet d’atteindre le troisième et dernier site de bivouac, nommé Iataranomby, « le lieu où viennent boire les zébus ». Ce campement est situé dans un coin d’une prairie en bordure d’une jolie petite rivière, très pittoresque      
      `
    },
    {
      jour: "Jour 8",
      circuit: "ANDRINGITRA NATIONAL PARC - VALLEE DE TSARANORO",
      description: `Durée : 4h de marche\n Difficulté : Peu difficile \nDénivelée : 250 mètres
      Description :8n
      Vous quittez le campement en laissant le massif et le Parc National d’Andringitra dans votre dos. Vous parcourez alors les grandes prairies qui servent de pâturage aux zébus, et qui surplombant tranquillement la partie Sud de la vallée Sahanambo.
      Un sentier un peu plus raide redescend ensuite dans la vallée du camp. En arrivant au village de Mananishoa. Vous traversez alors la rivière Sahanambo pour rejoindre Morarano, où un marché se tient une fois par semaine. A partir de ce village, vous empruntez la piste carrossable qui vous reconduit au camp en contournant le Caméléon.
      Si le cœur et l’énergie y sont, ne manquez pas de passer visiter l’unique dispensaire de la vallée entre Soavahiny et Andonaka, ainsi que l’Ecole du Tsaranoro. L’accès à la santé est encore très compromis ici, tout comme l’éducation. Vous pouvez décider de soutenir le dispensaire avant de rejoindre le campement. Nuit en Bivouac      
      `
    },
    {
      jour: "Jour 9",
      circuit: "VALLEE DE TSARANORO   ou journée repos au camp <br>Excursion possible dans la journée pique nique fourni.",
      description: [{
        "Circuit mont Caméléon": `Depuis le camp, il y a 4h de marche pour atteindre le haut du Caméléon. Sur la dernière partie de la montée, il y a un passage difficile: il ne faut pas avoir le vertige! A l’arrivée, vous aurez une vue saisissante sur la vallée du Tsaranoro.`,
        "Circuit Tsaranoro": "Vous partez tôt dans la matinée. Depuis le camp, il y a 4h à 4h30 de marche pour atteindre derrière le haut du Tsaranoro (le Mont Tsaranoro même n’est accessible qu’en escalade). Au milieu de la colline, vous trouverez les tombeaux Bara insérés dans la colline même. Sur la dernière partie de la montée, il y a un passage difficile. A l’arrivée, vous aurez une vue superbe sur les montagnes du Sud Malgache. ",
        "Le parapente dans la vallée": "Un point de vue exceptionnel sur la vallée! Il  offre 5 points de sauts en parapente, en fonction du vent. Les baptêmes sont possibles. Dans un souci d’efficacité merci de nous prévenir au moins 48 heures à l’avance si vous comptez sauter en parapente",
      }]
    },
    {
      jour: "Jour 10",
      circuit: "VALLEE DE TSARANORO – RANOHIRA",
      description: `Départ pour l’Isalo. La route du Sud qui mène à Ranohira prend alors des airs de solitude avec des monolithes granitiques et une végétation plus éparse. Passé la ville d’Ihosy, le fameux plateau d’Ihorombe s’étend à l’infini pour finalement aboutir face au somptueux massif de l’Isalo. Déjeuner Libre.
      Dans l’après-midi, installation à l’hôtel. Nuit et dîner a l’hôtel.    
      `
    },
    {
      jour: "Jour 11",
      circuit: "RANOHIRA PARC NATIONAL ISALO",
      description: `Durée : 7h de marche \nDifficulté : difficile \nDénivelée : 400 mètres\n
      Le parc National de l’Isalo, c’est une superficie de 81.540 ha est constituée exclusivement de grès. Au fil des siècles, celui-ci a été sculpté par la pluie et l’érosion. Déserts de pierre, piscines naturelles, canyons à couper le souffle, et grottes profondes sont monnaie courante de ces structures naturelles. La majeure partie du parc offre un spectacle exceptionnel. On trouve notamment à l’Isalo quelques espèces d'oiseaux et de reptiles. 
      Circuit combiné de 2 sites à la journée (Canyon de Maki &Piscine naturelle). 
      A travers le paysage unique  du Parc, vous découvrirez également de nombreuses espèces d’oiseaux rares, papillons et lézards. 
      Baignades à la piscine naturelle et ses eaux accueillantes. Nuit et dîner à l’hôtel 
      `
    },
    {
      jour: "Jour 12",
      circuit: "RANOHIRA - MANGILY",
      description: `Transfert sur Mangily. Découverte de la ville du saphir et des baobabs du Sud de l’île. Déjeuner Libre.
      3 Nuits en demi-pension au bord de la mer       
      `
    },
    {
      jour: "Jour 13 au 14",
      circuit: "MANGILY",
      description: `
      Le lagon de Ranobe ou d’Ifaty est u, des plus beaux lagons de la planète et un site de plongée mondialement connu, il offre sur plus de 40km des sites de plongée exceptionnels qui figurent parmi les plus prisés de la Grande île. Avec ses eaux limpides et ses plages paradisiaques, il constitue sans conteste un véritable joyau écologique en raison de sa faune et de sa flore extrêmement riches. Il comporte nottament deux grandes passes qui garantissent chacune une fascination à tous les plongeurs qui y viennent pour contempler ses fonds marins caractéristiques.
      Les courants chauds et froids émergents viennent aussi soutenir et alimenter de grandes quantités de plancton microscopique et le krill, principale source de nourriture qui prend en charge une vaste gamme d’espèces – jusqu’à 46 types de coraux et plus de 400 espèces de poissons, seuls. Un coup d’œil sur une carte marine révèle un autre secret profond: des canyons serpentant le long de la barrière de corail, offrant des sites de plongée exceptionnels et des habitats coralliens sains.
      `
    },
    {
      jour: "Jour 16",
      circuit: "MANGILY – TANA – PARIS",
      description: `Transfert à l’aéroport et vol pour Tana. Visite de la capitale et vol retour le soir.`
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
      circuit: "ANTSIRABE",
      description: `Discovery of the region of the Vakinakaratra. \n
      -	On bikes : It’s a 18 kilometer ride to reach the lakes (7 km to Andraikiba and 11 for Tritriva)
      We’ll take the RN34, west of Antsirabe and then, at roughly 7 km, take a left. The lake is on our right, there are villages of fishermen on its side, people here fish the carp, the tilapia and the black bass. To reach the second sacred lake, the Tritriva it’s another 10 kilometers on a red, dusty and difficult track, but you will cross some typical sceneries of the highlands, with its red clay bricks. It’s a really fertile region, because of the volcanic soil, but it was ravaged by the infamous practice of slash and burn. Once at the village of Belazao, we take a right and get to the steep-sided lake. Its more than 100 meter deep, and its colours, from green to blue makes the scenery quite magical. The guardian of the lake will welcome you and tell you some tales, related to the history of the lake for the locals, for example the history of the Malagasy Romeo and Juliet.
      Picnic Lunch
      Night and diner at the hotel     
      `
    },
    {
      jour: "Day 3",
      circuit: "ANTSIRABE - RANOMAFANA",
      description: `On our way to Ranomafana, we’ll stop by the little city of Ambositra. At 1200 meters of altitude, it’s a commercial crossroad of the Zafimaniry tribes and the rest of Madagascar. It’s the capital of craftsmanship, people come from every corner of the country to sell their work. We’ll have a walk in the city and visit the craft shop of a wood sculptor. Free lunch.
      To reach Ranomafana, the road goes through the Betsileo land, the main ethnic group in the province of Fianarantsoa .The typical red clay houses and the intricate shapes of the rice fields are good testimonies of the tremendous work started centuries ago in this region that is particularly hard to cultivate.
      Night and diner at the hotel      
      `
    },
    {
      jour: "Day 4",
      circuit: "RANOMAFANA - FIANARANTSOA",
      description: `This is one of the most original step of this journey, the National Parc of Ranomafana. It is one of the most diverse of the whole island. Everything here is endemic. When you arrive, our team on site will welcome you and take you to the different forests we can find here. The pandanus forest, for instance is the sanctuary of the rare “Queen of the orchids”, the Eulophiella. The rest of the day will be devoted to visiting the park. We’ll see many lemurs, plants and birds endemic of this rainforest. The flora too is incredible here. The extreme majority of plants are endemic of course, and most of them can be used as diverse medicines. The guide will help you understand this open pharmacy and its secrets.
      It’s in 1986, right after the discovery of the Hapalémur Aureus, an unknown species of lemur, that only eats bamboo stems (filled with cyanide (we still don’t know how this is possible) that the park was created. This day might very well be one of the most striking of your journey in Madagascar. At the end of the visit, time to hit the road again, to Fianarantsoa, it’s only an hour and a half away from Ranomafan. Fianarantsoa is the capital of the Betsileo, you’ll eat and sleep at the hotel.      
      `
    },
    {
      jour: "Day 5",
      circuit: "FIANARANTSOA - ANDRINGITRA",
      description: `Lenght : 4 hours walking\n
      Difficulty : Easy\n
      Difference in Height : 350 meters.\n
      In the morning, we head to the Natural Park of Andringitra.
      We’ll pass through Ambalavao, and take a look of the crafting of Antemoro paper (a savoir faire brought by Arabs during the fifteenth century based on blackberry bark), and the weaving of wild silk.
      We then go visit the Anjah sustainable park, a reserve of more than 300 lemurs and a couple species of chameleons. The site was created and is managed by four local villages in a sustainable way, while reforesting and bringing medical centers and schools on site. This project is really relevant in making tourism a good way out of poverty for those who need it the most, while protecting and capitalizing on the environment.
      After that, a tough but beautiful track will lead us through the Gate of the South and to the Andringintra Park. The gigantic massif is sited right in front of us and its ridge blocks our horizon. The valley of Namoly lies here, where two big waterfalls have made their ways throughout the ages.  After descending the Zomandao River, we’ll reach a little clearing, Belambo, our camping site for the night. This names means literally “Many boars” in Malagasy.
      `
    },
    {
      jour: "Day 6",
      circuit: "ANDRINGITRA NATIONAL PARC",
      description: `Lenght: 6h walking\n
      Difficulty : Facile \n
      Difference in Height: 750 meters\n
      Description :\n
      Arrival at Antanifotsy, starting for the first hike of 3 to 4 hour walk through Betsileo villages. This forest is home to a large number of vegetation which most of them have medicinal virtue (Orchids,Ferns, Phylipias or Calenchoees) , and the water here is great chance for the local population, who never suffers from draught.  Your guide will be happy to unveil the secrets of the forest and the history of the two waterfalls of the Zomandao river. The villagers of this valley have created a net of canals here, in order to bring water and irrigate the rice fields. 
      The track first leads to the Andrianbavy, the Queen Waterfall that is 250 meter high. During the dry season it is possible to cross the stream to reach the King Waterfall, Andriandahy (300 meters). This names come from the tale of a royal couple who came here on the advice of a healer, to finally be fertile and have children. They ended up with 8 descendants.
      We then start ascending slowly to the plateau, where you’ll have an amazing view on the great granitic cliffs of the Andringitra, surrounding the peak Bobby. The nature is really different here, in these highland meadows. We head south, to the natural pool of Andranolava where the most courageous can have a refreshing bath. 
      Night on the second bivouac camp of Andriampotsy (“the white waterfall”) at 2 050 m altitude, where beautiful birds have settled.
      `
    },
    {
      jour: "Day 7",
      circuit: "ANDRINGITRA NATIONAL PARC",
      description: `Length: 8h of walking\n
      Difficulty: Difficult\n
      Difference in height: 858 meters\n
      Description :\n
      Departure after breakfast for the ascent of the Bobby peak, we'll leave before the sun comes up. The ridge on which is located the Summit is very exposed to climatic influences of the East with a high humidity that can quickly cover the summits and thus ruin your beautiful climb to this prestigious peak of Madagascar. 2 h 30 walk, on refitted stairs and through a humid basin filled with moss, lichen and Phylipias , to reach the peak from where you can enjoy a panorama of exception on the whole of the region, the Andringintra, the Isalo down south, Tsaranoro, the Gate of The South. In Nice weather, you can even see the Indian Ocean. The Peak Bobby is also called Imarivolanitra, which means “really close to the sky”. The name Peak Bobby was given after the first member of a group of alpinists geologists, their dog named Bobby, reached the top.
      Descent then continuation towards the camp and then on the path that leads to the circuit 'DIAVOLANA', literally 'EXTRA terrestrial '. A huge plateau of rocky surreal lunar landscape. The granite shapes and crazy formations are really characteristic and worthy of a science fiction movie set. View of the Valley of the Tsaranoro. On the steep descent afterwards, the 'ravenea glauca' is the endemic Palm species endemic to this very side of the mountain. We keep on descending to the campsite of Iantaranomby River ‘literally “where the Zebus drink” where you can cool off. Beautiful sunset at night on the banks of a charming river. 
      Night in bivouacs to Antaranomby.      
      `
    },
    {
      jour: "Day 8",
      circuit: "ANDRINGITRA NATIONAL PARC - TSARANORO VALLEY",
      description: `Length: 4h walking \n
      Difficulty: Easy\n
      Difference in Height: 250 meters\n      
      Description :\n
      After breakfast; descent to the Valley of the Tsaranoro, the Andringintra behind us. You’ll cross great pastures for zebus where many Pachypodium enchyflorum, and different species of Aloe, and numerous lizards can be found . Once at the foot of the massif, the path continues through several villages of the Barabory; where the Bara and Betsileo cultures mix. We cross the Sahanambo River to reach Morarano. We then need to follow the valley on an easy road for a little while to join the hotel on the foot of the Chameleon. 
      If you are interested, you can visit the only dispensary of the region, between Soavahiny and Andonaka and the school of Tsaranoro. The access to medical care is very difficult here, as is the education and if you are willing to, you can support the actions of the dispensary.      
      `
    },
    {
      jour: "Day 9",
      circuit: "TSARANORO VALLEY",
      description: [{
        "Circuit mont Caméléon": `Starting from the camp, it is a 4h walk to reach to top of the famous chameleon. On the last part of the walk, there is a steep bit, where caution is necessary. It is definitely worth it though, because the panorama you get from up there is absolutely breath taking. We recommend doing this early in the morning to avoid the hottest time of the day.`,
        "Circuit Tsaranoro": "Leaving early, it’s a 4 to 5 hour walk to reach the top of Tsaranoro. We have to conquer it from the other side, because the front can only be climbed. On the way up, halfway through the foothills, you’ll discover Bara tombs inside the rock itself. There’s a tough part on the end of the ascension, but you will be rewarded with a breathtaking panorama on the southern mountain ranges that surround us entirely.",
        "Paradigling": "Nothing more thrilling than paragliding to discover all this valley from the sky. On a comfortable seat, with only the sound of the wind, it is an astounding opportunity as there are five spots to start from on the valley, always depending on the conditions of course. You can do it for the first time with no problem, but, in order to make that possible, please advise us at least 48h before if you want to fly.",
      }]
    },
    {
      jour: "Day 10",
      circuit: "VALLEE DE TSARANORO – RANOHIRA",
      description: `Time to leave the Tsaranoro Valley, it’s a 3 and a half hour ride to the city of Ranohira, and its famous national park; Isalo.
      As we head South on the road the landscapes drastically change. Pretty fast, the panorama flattens and immense tall grass fields surround us. This is the plateau of Ihorombe, land of the zebu farmers and of the golden horizon. Only one road goes through, the RN7, and people walk huge distances to meet in different villages in these savannah-looking plains.
      Finally, we get to Ranohira, and the Isalo, a deserted mountain barrier.
      Free lunch, setting up at the hotel, and diner.
      Night and the hotel.         
      `
    },
    {
      jour: "Day 11",
      circuit: "RANOHIRA PARC NATIONAL ISALO",
      description: `Length: 7h walking\n
      Difficulty: difficult\n
      Difference in height: 400 meters\n
      The National park of the Isalo, is about 81.540 ha wide and only constituted of sandstone. Throughout the centuries, it has been sculpted by erosion and weather. The result is really characteristic, stone deserts and natural formation, breathtaking canyons and natural pools, deep caverns and flourishing vegetation where we don’t expect it. 
      The major part of the park is really famous and hosts many endemic species. Rare birds and butterflies, lizards and a big population of laid back lemurs that sunbath on the rocks. There are not shy and you’ll get to see many of them while going up the water towards the beautiful waterfall of the Nymphs and its fresh waters. The difference of landscape and sensations between here and the plateau above is striking and really specific to this place.
      There are different circuits to go for, the Maki Canyon, and the refreshing Natural Pools.
      Night and diner at the hotel

      `
    },
    {
      jour: "Day 12",
      circuit: "RANOHIRA - MANGILY",
      description: `Time to hit the road, for the transfer to Tuléar. 
      On the way, a look at some familial tombs of the Antandroy and the Mahafaly tribes and the sapphire cities that popped out of nowhere in the desert, where the thirst for blue stones is just too strong. 
      After Tuléar, Mangily. A tiny village on the coast, facing one of the most beautiful lagoon of the planet. The population here is mainly Vézo, a people of nomad fishermen and you will also get to see some Baobabs there.
      3 Nights at the hotel, half pension on the seashore.           
      `
    },
    {
      jour: "Day 13 au 14",
      circuit: "MANGILY",
      description: `
      This lagoon of Ranobe is a world famous diving site and one of the most beautiful lagoon on the planet. It offers on more than 40km of coral reef some of the most sought after locations to observe underwater wildlife. Its crystalline blue water and its extremely rich fauna and flora truly make it an ecological jewel. There are two channels, with really characteristic floors that will guarantee fascination to the diver inside you.
      Free lunch.
      The mixing flows of warm and cold water come sustain the great quantities of plankton and krill that nourish more than 400 species of fish and 46 types of coral reef. A glimpse on a marine map will reveal another secret, way deeper. There are canyons that run along the barrier, offering exceptional and preserved sites.
      Visiting also the baobab forest aboard a zebu cart is always really appreciated by visitors. The Vezo villages and the beautiful reserve of Reniala around are also a must-see. 
      You’ll have all the time to linger in the sand and have sunbaths on the paradisiacal beach, even a massage or beach sports, buying souvenirs.
      Nigh at the hotel.

      `
    },
    {
      jour: "Day 15",
      circuit: "MANGILY – TANA – PARIS",
      description: `Transfer to Tuléar to take the flight to Tana. There, if you have time before your connection, maybe visit the famous « marché de la digue »`
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