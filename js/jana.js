const lineTarget = document.querySelector('#lineTarget');
const schedule = [
  {
    jour: "Day 1",
    circuit: "ANTANANARIVO - ANTSIRABE",
    description: `Meet and Great directly at the international airport of Ivato, and head straight south. Throughout the plains of the highlands, you’ll discover the first amazing scenery of your trip:  the rural villages surrounded by rice fields and the population of farmers whose lifestyle has not changed since the dawn of time
    We’ll stop to visit the city of Ambatolampy; well known for its aluminum craftsmanship.
    Free lunch before Antsirabe, the thermal city constructed and developed by Norwegian missionaries. This city is ranked first in agriculture and the second in industry in the whole country. The beautiful middle class houses downtown are witnesses of this frivolous era. 
    Overnight at the hotel Lovasoa 4C    
    ` 
  },
  {
    jour: "Day 2",
    circuit: "ANTSIRABE (Breakfast)",
    description: `Discovery of the region of the Vakinakaratra. 
    On bikes, or with the car: It’s an 18-kilometer ride to reach the lakes (7 km to Andraikiba and 11 for Tritriva)
    We’ll take the RN34, west of Antsirabe and then, at roughly 7 km, take a left. The lake is on our right, there are villages of fishermen on its side, and people here fish the carp, the tilapia and the black bass. To reach the second sacred lake, the Tritriva it’s another 10 kilometers on a red, dusty and difficult track, but you will cross some typical sceneries of the highlands, with its red clay bricks. It’s a really fertile region, because of the volcanic soil, but it was ravaged by the infamous practice of slash and burn. Once at the village of Belazao, we take a right and get to the steep-sided lake. Its more than 100 meter deep, and its colours, from green to blue make the scenery quite magical. The guardian of the lake will welcome you and tell you some tales, related to the history of the lake for the locals, for example the history of the Malagasy Romeo and Juliet.
    Night at the hotel    
    `
  },
  {
    jour: "Day 3",
    circuit: "ANTSIRABE – RANOMAFANA (Breakfast)",
    description: `After visit the highlights around Antsirabe town including precious stone factory , natural source of the spring water at the thermal bath and Andrakiba lake. We then make our way to Ranoamfana National Park. After 89 km south of Antsirabe, you will pass by the centre of Malagasy hand sculptured wooden craft work called Ambositra town. There are many shops here where you can browse for souvenirs and find very good marquetery artisan with retailer price. Then continue up to the rain forest at Ranoamfana National Park. In total, the ride from Antsirabe to Ranoamfana will take about 5 hours. When you arrive at Ranoamfana national park, you can have a rest by your own or take a short walk to see around the parks and village. Night walk (nocturnal visits) can be organised here with your personal guide. Night at the Gaspard Hotel
    ` 
  },
  {
    jour: "Day 4",
    circuit: "RANOMAFANA NATIONAL PARK – FIANARANTSOA (Breakfast)",
    description: `Ranomafana national park is one of the most diverse of the whole island. Everything here is endemic. When you arrive, our team on site will welcome you and take you to the different forests we can find here.
    The pandanus forest, for instance is the sanctuary of the rare “Queen of the orchids”, the Eulophiella. The rest of the day will be devoted to visiting the waterfall and the Tanala (people of the forest) villages around. We’ll see many lemurs, plants and birds endemic of this rainforest.
    1 day to discover the rain forest of Ranomafana.
    Ranomafana (which means “hot water” in Malagasy) is doubtless one the most spectacular National Parks of Madagascar. Due to the good access and suitable location near the RN7, great biodiversity (12 lemur species are found here) and developed infrastructures, it has become one of the most visited places of the island. 
    Established in 1991, it expands over a mountainous terrain of 415 km² totally covered by dense moist primary and secondary forest area at altitudes between 800m and 1.200m. 
    Several species of lemurs can be found there such as the red-fronted and red-bellied lemur, also the rare and endangered species such as the greater bamboo lemur.
    Botanical information: Angraecum SP, sesquipedale, Jumellea, Aerangis, Aeranthes, Bulbophyllum, Cynorkis fastigiata, tripelaloides, Eulophia macra, Oeonia volucris. 
    Transfer to Fianarantsoa.
    Overnight at the 3 Maki
    `
  },
  {
    jour: "Day 5",
    circuit: "FIANARANTSOA - AMBALAVAO – ANDRINGITRA NATIONAL PARK (FullBoard)",
    description: `4 hours walking and 400 m of difference in height. 
    Today, you will discover the Andringintra mountain range. On our way, the Antemoro paper craft shop in Ambalavao is worth a detour. We hit the track that leads to the entrance of the on roughly 45km. A beautiful scenery that the terrible state of the road will give you all the time to admire. As soon as we get to Namoly, we enter the park and start our first day by going to the royal bath and the camping site of Andriamposty. Around 4 hour a walk and 400 meters of difference in height.
    Diner and night right under the foot of the granite cliff, at 2050 meters of altitude.    
    ` 
  },
  {
    jour: "Day 6",
    circuit: "ANDRINGITRA (FullBoard)",
    description: `7 to 8 hours of walk and 600m+ 900m- of difference in height.
    Early departure to climb the PEAK Bobby. We need to catch the morning lights to appreciate the view. The summit is very exposed to the climatic influences and the humidity from the east and this can bring a lot of fog around and spoil the trek a little.
    After only 2 hours and a half of climbing, we’ll discover the amazing panorama on the whole area. If the weather is on your side, you might even catch a glimpse of the Isalo mountain range, down south. After that, the circuit goes down to the “extra-terrestrial foot hills”. They were called this way because of their intriguing deserted and surrealist landscapes. The steep slopes around make it seem like taken out of a lunar scenery.
    Before heading back to the camp, we will cross a forest of palm trees endemic to this very side of the mountain, the “ravenea glauca”. The camping site, near the freshening waters of the river, will be most welcome after this big day    
    ` 
  },
  {
    jour: "Day 7",
    circuit: "ANDRINGITRA –TSARANORO (FB)",
    description: `4 hours a walk and 700m- of difference in height
    After a good breakfast, we leave for the Tsaranoro valley, home of many types of lizzards, aloes, and Pachypodium d’enchyflorum. Once on the foothills, the track crosses several Barabory villages. Here, we can witness a cultural mix, the Betsileo and the Bara
    Starting from the village of Morarano, we’ll begin the crossing of the wonderful valley of Tsaranoro.
    Night at the  Tsarasoa Lodge.    
    `      
  },
  {
    jour: "Day 8 to 9",
    circuit: "TSARANORO Valley  or Resting day at the camp (Breakfast)",
    description: [
      "There are three excursions possible for this day, picnic is included.",
      {
        "Circuit Hara Aravatra": `A small (half a day) climb on a little distance. We start form the camp throughout the rice fields, then up the hill during an hour. On our way down, we take a detour by a little, intricate forest where several families of Lemur Catta have settled. Another hour to go before heading back. You’ll be rewarded with a beautiful view of the surrounding villages`,
        "Circuit Sacred Forest and Village: 4 hour long": 
        `This circuit starts on an easy ground, taken by the locals to cross the cultures of manioc and rice. We’ll cross the village of Andonaka and visit the green school of Tsaranoro. After the village, a small track we reach the sacred forest inhabited by Lemur Catta, who wander and sun bath on the big flat rocks. The forest is also filled with tombs of ancestors for the Betsileo and the Bara people. We’ll visit some and reach a natural pool that brings a magical aspect to the forest.
        After a little break, we head to the Soavahiny village, literally “where the strangers are welcome”, not far from the forest. On our way back to the camp, you’ll see the free clinic, the only way for everyone around to get medicines in the whole area. The visit is really interesting and you may want to support the program by giving away some of your extra pills and medicines.`,
        "Circuit Tsaranoro ": `We leave early the camp and start by crossing the sacred forest of Tsaranoro, graveyard of the locals of the valley. Many lemurs chill out here, have sunbaths on the flat rocks. We have to climb a little towards the foot of the cliff and cross a water stream and then walk alongside the water to reach the plateau of Tsaranoro. A little break and we go meet with the Chameleon, the Langera summit. It’s a little steep and care is needed to reach the top, but when we get there, you won’t regret a thing. The 360 panorama is just breath taking. You will have all lunch (or just a snack depending on the hour) to appreciate it. We head back to the village of Morarano then, and to the camp. It’s a hot time of the day and a big effort back, so you might appreciate a little bath in the river.`,
        "Paragliding not included": `There is also the opportunity to do paragliding in these mountains. There are 5 spots, and incredible thrills are guaranteed, even if you’ve never done it. It is important though to tell us in advance, at least 48 hours before so that we can prepare it all for you in an efficient way.`
      }
    ]
  },
  {
    jour: "Day 10",
    circuit: "VALLEE DE TSARANORO – ISALO (Breakfast)",
    description: `Time to leave the Tsaranoro Valley, it’s a 3 hour and a half ride to the city of Ranohira, and its famous national park; Isalo.
    As we head South on the road the landscapes drastically change. Pretty fast, the panorama flattens and immense tall grass fields surround us. This is the plateau of Ihorombe, land of the zebu farmers and of the golden horizon. Only one road goes through, the RN7, and people walk huge distances to meet in different villages in these savannah-looking plains.
    Finally, we get to Ranohira, and the Isalo, a deserted mountain barrier.
    Free lunch.
    Night and the hotel Chez Alice    
    `
  },
  {
    jour: "Day 11",
    circuit: "CANYON – NATURAL POOL (FullBoard)",
    description: `6 hours of walking and 500m of difference in height.  Transfer to the lower Ranohira.
    We need to walk a little to reach the foot of this huge cliffs, where the remnants of an old forest have survived, hosting a couple families of Lemur Catta, recognizable at  their black and white tail, and the pure white Sifaka.
    With luck, and silence, you might meet a couple of them after a bend of the track that runs between dry trees and rock. But the canyons eventually open their gates and reveals their treasures to the curious explorers who dare enter the narrow path.
    Back in the sun, and up the crest of the cliff where you will admire a beautiful panorama of the North. Once inside these walls, you’ll be struck by the weird shapes, consequence of thousands of years of erosion. The colors, vegetation and profiles are exceptional and some see animals and patterns on the rock.
    After 4 hours of walking in this mineral desert, under a hot sun, you’ll be rewarded with water. A small oasis lies in the middle of nowhere, for those who can find it. A good bath and the sunset will appease your day and conclude this first part of the visit.
    A good meal and night at the camping site.     
    `
  },
  {
    jour: "Day 12",
    circuit: "NATURAL POOL – NAMAZA- RANOHIRA (HalfBoard)",
    description: `4 hours of walking and 200 meters of difference in height
    Today, it’s the Anamaza canyons that are heading for. It starts slowly, early in the morning to avoid the hottest time of the day, as we cross the same savanna-looking plateau and head down deep in a steep valley. The way down is well fitted out for the safety of less adventurous visitors. In the middle of the canyon runs the Namaza, a little stream protected by a comfortable forest that harbors a really laid back population of lemurs. There are not shy and we’ll see many of them while going up the water towards the beautiful waterfall of the Nymphs and its fresh waters. The difference of landscape and sensations between here and the plateau above is striking and really specific to this place.
    Overnight Chez Alice.     
    `
  },
  {
    jour: "Day 13",
    circuit: "RANOHIRA – IFATY (Breakfast)",
    description: `Transfert to Ifaty.
    On the way, a look at some familial tombs of the Antandroy and the Mahafaly tribes and the sapphire cities that popped out of nowhere in the desert, where the thirst for blue stones is just too strong. 
    After that, Mangily, a tiny village on the coast, south of the island, facing one of the most beautiful lagoon of the planet.
    3 Nights at the hôtel on the seashore.    
    `
  },
  {
    jour: "Day 14 to 15",
    circuit: "IFATY  (Breakfast)",
    description: `This lagoon of Ranobe is a world famous diving site and one of the most beautiful lagoon on the planet. It offers on more than 40km of coral reef some of the most sought after locations to observe underwater wildlife. Its crystalline blue water and its extremely rich fauna and flora truly make it an ecological jewel. There are two channels, with really characteristic floors that will guarantee fascination to the diver inside you.
    Free lunch.
    The mixing flows of warm and cold water come sustain the great quantities of plankton and krill that nourish more than 400 species of fish and 46 types of coral reef. A glimpse on a marine map will reveal another secret, way deeper. There are canyons that run along the barrier, offering exceptional and preserved sites.
    Night and diner at the hotel<br>
    -A Walk around:
    Visiting the baobab forest aboard a zebu cart  is always really appreciated by visitors. The Vezo villages and the beautiful reserve of Reniala around are also a must-see. 
    All these activities are of course included in the price.
    You’ll have all the time to linger in the sand and have sunbaths on the paradisiacal beach, even a massage or beach sports, buying souvenirs. Diner and Night at the hotel.
    `
  },
  {
    jour: "Day 16",
    circuit: "IFATY – TANA (BreakFast)",
    description: `Transfer to Tuléar to take the flight to Tana. Transfert to the Niaouli Hotel.    
    `
  },
  {
    jour: "Day 17",
    circuit: "TANA – FLIGHT BACK HOME (BreakFast)",
    description: `There, if you have time before your connection, maybe visit the famous « marché de la digue »
    `
  },
];

getSchedule(schedule);

function getSchedule(arr) {
  lineTarget.innerHTML = "";
  arr.forEach(data => {
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