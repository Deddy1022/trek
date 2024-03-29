let langue = localStorage.getItem("langue");
const grid = document.querySelector('.grid');
const gridEn = document.querySelector('#gridEn');
const flex = document.querySelector('#flex');
const flexEn = document.querySelector('#flexEn');
const counter = document.querySelector('.counter');
const counting = document.querySelector('.counted');

const change = document.querySelectorAll(".switch");
langue === "français"? change.forEach(element => {
  element.textContent = "Switch english";
  localStorage.setItem("style", "block");
  localStorage.setItem("styleEn", "none");
}): change.forEach(element => {
  element.textContent = "En français";
  localStorage.setItem("style", "none");
  localStorage.setItem("styleEn", "block");
}) ;

langue === "français"? document.querySelector('.btn--conditions').innerHTML += "<span><em>VEUILLEZ TELECHARGER LES TERMES DE CONTRACT ICI</em></span>":
document.querySelector('.btn--conditions').innerHTML += "<span><em>YOU CAN DOWNLOAD THE TERMS AND CONDITIONS</em></span>"
const data = {
  "fran\çais":
    [
      {
        titre: "Qualité de service",
        texte: "Spécialiste du voyage professionnel dédié à vous écouter attentivement afin de saisir vos exigences et vos désirs en matière de voyage.",
        image: "checkmark-circle"
      },
      {
        titre: "Réservation sécurisée",
        texte: "Une équipe dynamique est prête à vous assister en tout temps. N'hésitez pas à nous contacter par courrier électronique, 24 heures sur 24, 7 jours sur 7.",
        image: "lock-closed"
      },
      {
        titre: "Simplicité",
        texte: "Bénéficiez de tarifs négociés spécialement conçus pour s'ajuster à votre budget, ce qui vous donnera l'opportunité d'optimiser vos coûts de déplacement.",
        image: "flame"
      },
      {
        titre: "Fiabilité",
        texte: "En tant qu'agence locale fiable, notre approche repose sur la construction d'une relation de confiance avec nos clients, afin de mériter leur confiance.",
        image: "star-half"
      }
    ],
  "english":
    [
      {
        titre: "Quality of service",
        texte: "Professional travel specialist dedicated to listening carefully to grasp your requirements and desires regarding travel.",
        image: "checkmark-circle"
      },
      {
        titre: "Secure booking",
        texte: "A dynamic team is ready to assist you at all times. Feel free to contact us by email, 24 hours a day, 7 days a week.",
        image: "lock-closed"
      },
      {
        titre: "Simplicity",
        texte: "Benefit from specially negotiated rates designed to fit your budget, giving you the opportunity to optimize your travel costs.",
        image: "flame"
      },
      {
        titre: "Reliability",
        texte: "As a reliable local agency, our approach is based on building a relationship of trust with our clients, in order to earn their confidence.",
        image: "star-half"
      }
    ]
};

displayLangue(data, langue)

change.forEach(element => element.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(this);
  if(localStorage.getItem("langue") === "english") {
    localStorage.setItem("langue", "fran\çais");
    displayLangue(data, "fran\çais");
    this.textContent =  "english";
  } else {
    localStorage.setItem("langue", "english");
    displayLangue(data, "english");
    this.textContent = "fran\çais";
  }
  setTimeout(() => {
    location.reload();
  }, 100);
}));



function displayLangue(dat, lang) {
  grid.innerHTML = "";
  dat[lang].forEach(language => {
    grid.innerHTML += `
      <div class="entry">
        <div class="img">
          <img src="../ion_icons/${language.image}.svg"></img>
        </div>
        <h2>${language.titre}</h2>
        <p>
          ${language.texte}
        </p>
      </div>
    `;
  });
  charge();
}

const flexData = {
  "fran\çais":[
    {
      titre: "DE BAOBAB À L'ÎLE DES PIRATES",
      texte: "Découvrez la faune exceptionnelle de l'ouest de Madagascar : lémuriens, tortues, crocodiles et caméléons dans leur habitat naturel.",
      image: "bemaraha/bemaraha",
      lien:'../main/baobab.html'
    },
    {
      titre: "MADAGASCAR AU COEUR DES HOMMES",
      texte: "Bienvenue dans le joyau préservé de la nature qu'est Madagascar, un paradis unique avec une biodiversité exceptionnelle.",
      image: "madagascar/jana",
      lien:'../main/madagascar.html'
    },
    {
      titre: "DIAM-BAZAHA",
      texte: "Embarquez pour une aventure immersive au cœur des hautes terres Malgaches, mêlant trek et exploration des merveilles naturelles et humaines.",
      image: "madagascar/tsaranoro",
      lien:'../main/diam_bazaha.html'
    },
    {
      titre: "TERRE DE LEGENDE DE MADAGASCAR",
      texte: "Expédition pour les aventuriers intrépides explorant le massif isolé du Makay et le deuxième sommet de Madagascar, sans compétences techniques particulières requises.",
      image: "madagascar/ranohira",
      lien:'../main/terre.html'
    },
    {
      titre: "ESCAPADES EXOTIQUES",
      texte: `Le circuit "Escapades exotiques" invite à explorer à son rythme les réserves naturelles et l'univers des épices malgaches dans le nord du pays, idéal à partager en couple, en famille ou entre amis.`,
      image: "madagascar/ifaty",
      lien:'../main/escapade.html'
    },
    {
      titre: "TSIRIBIHINA ET TSINGY",
      texte: `Plongez dans une aventure hors du commun, découvrez la nature sauvage de l'ouest de Madagascar, explorez deux sites classés UNESCO, puis détendez-vous sur une plage paradisiaque.`,
      image: "bemaraha/tsingy_1",
      lien:'../main/tsingy.html'
    },
    {
      titre: "VOLEURS DE ZEBUS",
      texte: `Si la plupart du temps les voyageurs partent plutôt pour la descente de la tsiribihina et les tsingy, nous on vous offre une alternative qui sort des sentiers battus.`,
      image: "isalo/isalo",
      lien:'../main/voleur_zebu.html'
    },
    {
      titre: "MORA MORA VAZAHA",
      texte: `Explorer à pied, notamment à Madagascar, offre une immersion authentique. Prendre son temps (le Mora Mora) permet d'apprécier pleinement les paysages variés. Idéal pour les amoureux de la nature et de la montagne.`,
      image: "bemaraha/tsingy_2.",
      lien:'../main/voleur_zebu.html'
    },
  ],
  "english": [
    {
      titre: "DE BAOBAB AND PIRATES ISLAND",
      texte: "Discover western Madagascar's wildlife: lemurs, turtles, crocodiles, chameleons. An unforgettable adventure awaits.",
      image: "bemaraha/bemaraha",
      lien:'../main/baobab.html'
    },
    {
      titre: "MADAGASCAR AU COEUR DES HOMMES",
      texte: "Discover Madagascar's unique biodiversity, with over 90% endemic species, promising an unforgettable adventure in the heart of authentic wildlife.",
      image: "madagascar/jana",
      lien:'../main/madagascar.html'
    },
    {
      titre: "DIAM-BAZAHA",
      texte: " Embark on an immersive adventure in the Malagasy highlands, combining trekking and hiking for a captivating exploration of natural and human wonders.",
      image: "madagascar/tsaranoro",
      lien:'../main/diam_bazaha.html'
    },
    {
      titre: "TERRE DE LEGENDE DE MADAGASCAR",
      texte: "Discover Makay massif: expedition for intrepid adventurers, unique experiences without technical skills.",
      image: "madagascar/ranohira",
      lien:'../main/terre.html'
    },
    {
      titre: "TSIRIBIHINA AND TSINGY",
      texte: `Immerse in western Madagascar's wilderness: lemurs, turtles, crocodiles, chameleons. UNESCO sites, Indian Ocean beaches.`,
      image: "bemaraha/tsingy_1",
      lien:'../main/tsingy.html'
    },
    {
      titre: "EXOTICS ESCAPADES",
      texte: `Discover Madagascar's unique concept of time through the "Exotic Escapes" tour, ideal for couples, families, or friends.`,
      image: "madagascar/ifaty",
      lien:'../main/escapade.html'
    },
    {
      titre: "MORA MORA VAZAHA",
      texte: `Exploring on foot, especially in Madagascar, provides an authentic immersion. Taking one's time (the Mora Mora) allows for full appreciation of the diverse landscapes. Ideal for nature and mountain lovers.`,
      image: "bemaraha/tsingy_2.",
      lien:'../main/voleur_zebu.html'
    },
  ]
};
getFlex(flexData, langue)

function getFlex(table, data) {
  table[data].forEach(text => {
    flex.innerHTML += `
      <div class="flex-entry">
      <a href="${text.lien}">
        <div class="container">
          <div class="img">
            <img src="./images/${text.image}.jpg" alt="">
          </div>
          <h2>${text.titre}</h2>
        </div>
        <p>
          ${text.texte}
        </p>
      </a>
      </div>
    `;
  });
  langue === 'français'? counter.textContent = `Nos circuits`: counter.textContent = 'Our circuits';
}

const flexEntries = document.querySelectorAll('.flex-entry');

const itemsPerSlide = 3;
let currentSlide = 0;

function updateFlexDisplay() {
  const startIndex = currentSlide * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;

  flexEntries.forEach((entry, index) => {
    if (index >= startIndex && index < endIndex) {
      entry.style.display = 'flex';
    } else {
      entry.style.display = 'none';
    }
  });
}

function showNextSlide() {
  currentSlide = (currentSlide + 1) % Math.ceil(flexEntries.length / itemsPerSlide);
  updateFlexDisplay();
}

function showPrevSlide() {
  currentSlide = (currentSlide - 1 + Math.ceil(flexEntries.length / itemsPerSlide)) % Math.ceil(flexEntries.length / itemsPerSlide);
  updateFlexDisplay();
}

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
console.log(nextButton)
function handleScreenWidthChange() {
  if (window.innerWidth <= 800 && flexEntries.length > 3) {
      updateFlexDisplay();
      prevButton.style.visibility = 'visible';
      nextButton.style.visibility = 'visible';
  } else {
    flexEntries.forEach((entry) => {
      entry.style.display = 'flex';
    });
    prevButton.style.visibility = 'hidden';
    nextButton.style.visibility = 'hidden';
  }
}

window.addEventListener('resize', handleScreenWidthChange);
handleScreenWidthChange();

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// const next = document.querySelector('.nexter');
// const prev = document.querySelector('.previous');
// const flexEntrie = document.querySelectorAll('.entites');

// const itemsPerslide = 3;
// let currentslide = 0;

// function updateFlex() {
//   const startIndex = currentslide * itemsPerslide;
//   const endIndex = startIndex + itemsPerslide;

//   flexEntrie.forEach((entry, index) => {
//     if (index >= startIndex && index < endIndex) {
//       entry.style.display = 'flex';
//     } else {
//       entry.style.display = 'none';
//     }
//   });
// }

// function showNext() {
//   currentslide = (currentslide + 1) % Math.ceil(flexEntrie.length / itemsPerslide);
//   updateFlex();
// }

// function showPrev() {
//   currentslide = (currentslide - 1 + Math.ceil(flexEntrie.length / itemsPerslide)) % Math.ceil(flexEntrie.length / itemsPerslide);
//   updateFlex();
// }

// prev.addEventListener('click', showPrev);
// next.addEventListener('click', showNext);
// function handleScreenWidth() {
//   if (window.innerWidth <= 800 && flexEntries.length > 3) {
//     updateFlex();
//     prev.style.visibility = 'visible';
//     next.style.visibility = 'visible';
//   } else {
//     flexEntrie.forEach((entry) => {
//       entry.style.display = 'flex';
//     });
//     prev.style.visibility = 'hidden';
//     next.style.visibility = 'hidden';
//   }
// }

// window.addEventListener('resize', handleScreenWidth);
// handleScreenWidth();

//TERMS AND CONDITIONS
const contain = document.querySelector('.contain');
const terms = {
  "fran\çais": [
    {
      intro: `Ces termes et conditions s'appliqueront à vos vacances et aux arrangements que vous ferez. Veuillez les lire attentivement car vous serez lié par eux. 
      En effectuant une réservation, le client confirme que toutes les personnes nommées dans la réservation ont lu ces conditions, ont accepté d'être liées par elles et par tous les autres termes du contrat, et qu'il/elle a l'autorité pour accepter ces termes et conditions en leur nom.`,
      reservations: `Un dépôt de 30% est payable à la confirmation, comme indiqué sur notre contrat de voyage, que vous recevrez par e-mail avant de procéder au paiement. 
      Le solde doit être payé avant le début du voyage lorsque nous nous rencontrons à Antananarivo et nous préférons avoir le solde de 70% en euros ou en dollars américains liquides si possible, alors emportez des euros ou des dollars américains car nos banques ici ne fournissent aucune devise étrangère pour vous. 
      Si vous ne voulez pas transporter avec vous ce gros montant dû, vous pouvez faire le même processus de transfert que celui que vous avez fait pour le dépôt.`,
      medical: "Vous devrez peut-être prendre des précautions contre le paludisme, etc.",
      "dietary changes": "Veuillez informer au moment de la réservation si vous avez des exigences alimentaires spéciales, afin que nous puissions vous accueillir.",
      "payement method": `Visit Mada Tours accepte votre paiement par plusieurs moyens, y compris Visa ou MasterCard, par virement bancaire, via Moneybookers ou même Western Union. Si vous nous payez par Visa ou MasterCard, alors nos frais de transaction de 3,8 % seront appliqués par notre système. Si vous nous payez par virement bancaire, tous les frais bancaires sont à votre charge et le montant exact convenu doit être bien reçu sur notre compte bancaire.`,
      payement: `
      Un acompte non remboursable de 25 % du coût total de la visite est requis pour la confirmation des services. Le solde doit être payé 30 jours avant le début du service. Les réservations sont sujettes à annulation si le solde n'est pas payé 45 jours avant le début de la visite.
      <h4>Veuillez virer l'argent à l'adresse bancaire suivante:</h4>
      M C B - Madagascar Commercial Bank<br>
      Rue Solombavambahoaka Frantsay 77, Antsahavola, Antananarivo 101- Madagascar<br>
      Compte: MTTC <br>
      N° : IBAN MG46 00006 00001 02000993500 42 MCBLMGMGAXXX <br>
      Payement par carte VISA acceptable, avec 4% de frais bancaire.
      <h4>Coûts:</h4>
      Les coûts incluent toutes les dépenses liées aux véhicules et aux chauffeurs selon le programme. Les frais d'entrée aux parcs et réserves et aux guides forestiers locaux sont inclus, sauf indication contraire. Les coûts comprennent également l'hébergement avec toutes les taxes.
       Nous n’incluons pas le coût des vols intérieurs dans nos circuits car des réductions sont appliquées dans certains cas :
       * une réduction de 50% sur les vols intérieurs pour les voyageurs utilisant la compagnie aérienne Air Madagascar pour se rendre à Madagascar.
       * une réduction de 30% pour un membre d'une famille de 4 personnes.
      <h4>Hébèrgements:</h4>
      Ceci est basé sur deux personnes partageant une chambre double ou twin. Des chambres simples sont disponibles moyennant des frais supplémentaires, parfois les célibataires doivent payer la chambre double.
      <h4>Modification des tournées:</h4>
      Voyager à travers Madagascar n'est pas comparable à voyager aux États-Unis ou en Europe... les influences climatiques comme les cyclones, les inondations peuvent détruire les routes, les forêts, les ponts ou les paysages et cela rendra la réalisation du voyage impossible. Dans de tels cas, la société se réserve le droit de modifier les arrangements ou de garantir un itinéraire de voyage alternatif égal ou d'annuler l'itinéraire d'une visite programmée si les conditions l'exigent.
       La société se réserve également le droit de refuser d'accepter toute personne ou membre d'une visite à tout moment, auquel cas un montant approprié sera remboursé.
       Transport:
       Des voitures, minibus ou bus et bateaux seront mis à disposition en fonction du nombre de clients ou de l'itinéraire et de l'excursion effectués. Le droit est réservé de recourir aux services d'un sous-traitant si les circonstances l'exigent. Un guide anglophone peut être fourni car certains chauffeurs ne parlent pas anglais couramment et n'ont pas les connaissances d'un guide.
       <h4>Responsabilité :</h4>
       La société et ses agents agissent uniquement pour le passager dans toutes les questions liées à l'hébergement en hôtel/lodge, aux visites, au transport, etc. et ne sauraient être tenus responsables des blessures, retards, pertes ou dommages de quelque manière que ce soit. Les lois du pays régissent la responsabilité de l’entreprise envers les passagers transportés dans ses propres véhicules. Toutes les réclamations sont soumises à la compétence des tribunaux du pays dans lequel l'action survient. La société se réserve le droit de faire appel à des sous-traitants pour toutes les parties des prestations rendues. Il est fortement conseillé à tous les participants de souscrire une police d'assurance couvrant les accidents personnels, les frais médicaux et la perte de bagages.
      `
    }
  ],
  "english": [
    {
      intro: `These terms and conditions will apply to your holiday and the arrangements which you make. 
      Please read them carefully as you will be bound by them. 
      By making a booking, the client confirms that all of the people named in the booking made by him/her have read these conditions, and have agreed to be bound by them and all the other terms of the contract, and that he/she has the authority to accept these terms and conditions on their behalf. `,
      reservations: `A 30 % deposit is payable on confirmation, as stated on our tour contract form, which you will receive by email before you process the payment. 
      The balance must be paid before the tour starts when we meet in Antananarivo and we prefer to have the balance 70% in Euro or US dollars cash if possible, so take with you Euro or US dollars since our banks here do not provide any foreign currency for you . 
      If you do not want to carry with you this balance due big amount, you can do the same process of transfer like you did for the deposit.`,
      "travel insurance": `Your holiday package with us does NOT include travel insurance and it is your responsibility to ensure you have adequate insurance cover. 
      In accordance with normal industry practice, we will require you to have adequate travel insurance to provide accident and medical cover before your holiday departs. 
      Such insurance should ideally be valid from the date of booking, be valid throughout the holiday duration and financially cover any probable loss through cancellation, amendment, accident or health related problems. 
      You should ensure you are covered for all activities you are planning on your trip. `,
      medical: "you may need to take precautions for malaria etc................... ",
      "dietary changes": "Please advice at time of booking if you have any special dietary requirements, so we may accommodate you.",
      "payement method": `Visit Mada Tours accepts your payment by several ways including visa or master card or by bank transfer or via money bookers or even western union . 
      If you pay us by visa or master card then our fees for transaction is 3,8% will be applied by our system and if you pay us by bank transfer , all banks fees are at your charge and exact amount we agreed should well received at our bank account . 
      Write to Mr Benjamin for more details ...`,
      payement: `
      A non-refundable deposit of 25% of the total of the tour cost is required for confirmation of services. The balance needs to be paid 30 days before the service starts. Reservations are subject to cancellation if the balance is not paid 45 days before the tour starts.
      <h4>Please wire the money to the following Bank address:</h4>
      M C B - Madagascar Commercial Bank<br>
      Rue Solombavambahoaka Frantsay 77, Antsahavola, Antananarivo 101- Madagascar<br>
      Account: MTTC <br>
      N° : IBAN MG46 00006 00001 02000993500 42 MCBLMGMGAXXX <br>
      We also accept visa credit card payment locally, with 4% bank fees.
      <h4>Costs:</h4>
      Costs include all expenses with respect to vehicles and drivers according to the program. Entrance fees to parks and reserves and forest local guides are included unless otherwise noted. Costs also include the accommodation with its all taxes.
      We do not include domestic flights’ cost in our tours because discounts are applied in some cases:
      * a 50% discount on domestic flights for travelers using the Air Madagascar airline company to travel to Madagascar .
      * a 30% discount for a family member of 4.
      <h4>Accommodations:</h4>
      This is based on two people sharing a double or twin room. Single rooms are available at an additional cost , sometimes single must pay the double room.
      <h4>Alteration of tours:</h4>
      Traveling through Madagascar is not comparable with traveling in the United States or Europe ...climate influences like cyclones, flood may destroy roads, forests, bridges or landscapes and that will make the accomplishment of the tour impossible. In such cases, the company reserves the right to alter arrangements or guarantee an equal alternative travel route or cancel the itinerary of a scheduled tour should conditions necessitate. 
      The company also reserves the right to decline to accept any person or member of any tour at anytime, in which case an appropriate amount will be refunded.
      Transportation:
      Cars, minibuses or buses and boats will be provided according to the number of clients, or the route and excursion which is being taken. The right is reserved to employ the services of a subcontractor should circumstances necessitate. English speaking guide can be provided as some drivers cannot speak English fluently and do not have knowledge like a guide .
      <h4>Liability:</h4>
      The company and its agents act only for the passenger in all matters related to hotel/lodge accommodation, tours, transport etc. and shall not be liable for injury , delays, loss or damage in any manner. The laws of the country govern the company’s liability to passengers carried in its own vehicles. All claims are subject to jurisdiction of the courts of this country in which the action arises. The company reserves the right to employ subcontractors for all parts of the services rendered. All participants are highly advised to take out an insurance policy to cover personal accident, medical expenses and loss baggage.
      `
    }
  ]
}

function showContractModal(datas, lang) {

  datas[lang].forEach(data => {
    contain.innerHTML+= `<p>${data.intro}</p>`;
    for(const [key, value] of Object.entries(data)) {
      if(key !== 'intro') {
        contain.innerHTML += `
          <div>
            <h2>${key}</h2>
            <p>${value}</p>
          </div>
        `
      }
    }
  })
}

showContractModal(terms, langue);

const dismiss = document.querySelector(".dismiss");
const closed = document.querySelector('.closed');
const body = document.body;
const mainCondition = document.querySelector('.condition-modalMain');
const modalMain = document.querySelector('.bg-modalMain');
mainCondition.addEventListener('click', function() {
  console.log(this)
  modalMain.style.visibility = "visible";
  body.style.overflow = "hidden";
  document.querySelector('#modalCondition').classList.add('affiche');
});
closed.addEventListener('click', () => {
  console.log(this);
  modalMain.style.visibility = "hidden";
  body.style.overflow = "auto";
  document.querySelector('#modalCondition').classList.remove('affiche');
})

dismiss.addEventListener('click', function() {
  modalMain.style.visibility = "hidden";
  body.style.overflow = "auto";
  document.querySelector('#modalCondition').classList.remove('affiche');
})

langue === "français"?
document.querySelector('.texte').innerHTML = `<h3>Dans cette aventure, chaque instant sera empreint de merveilles, vous invitant à découvrir des paysages à couper le souffle et des rencontres inoubliables. 
Préparez-vous à être émerveillé par la diversité culturelle et la chaleur des habitants, qui vous accueilleront à bras ouverts. 
Chaque nouvelle expérience sera une étincelle de joie dans votre voyage, vous offrant des souvenirs précieux à chérir pour toujours. 
Laissez-vous transporter par l'excitation de l'inconnu et la promesse d'aventures uniques qui vous attendent au détour de chaque chemin. 
En explorant ces contrées fascinantes, vous découvrirez votre propre force et votre capacité à embrasser le monde avec émerveillement et gratitude.</h3>`:
document.querySelector('.texte').innerHTML = `<h3>In this adventure, every moment will be imbued with wonders, inviting you to discover breathtaking landscapes and unforgettable encounters. 
Prepare to be amazed by the cultural diversity and warmth of the locals, who will welcome you with open arms. 
Each new experience will be a spark of joy in your journey, giving you precious memories to cherish forever. 
Let yourself be transported by the excitement of the unknown and the promise of unique adventures that await you around every bend. 
As you explore these fascinating lands, you will discover your own strength and your ability to embrace the world with wonder and gratitude.</h3>`;