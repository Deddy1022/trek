const envies = document.querySelectorAll('.envies');
const hebergement = document.querySelectorAll('.hebergement');
const partie = document.querySelectorAll('.partie');
const repas = document.querySelectorAll('.repas');
let text, part = [], baba = [];
hebergement.forEach(checkbox => {
  if(checkbox.checked) {
    text = checkbox.value;
  }
})

partie.forEach(checkbox => {
  if(checkbox.checked) {
    part.push(checkbox.value);
  }
})

repas.forEach(checkbox => {
  if(checkbox.checked) {
    baba.push(checkbox.value);
  }
})

const arr = [];
const choix = envies.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
      arr.push(checkbox.value);
    }
  })
})
console.log(choix);

document.querySelector('.buttonMailer').addEventListener('click', (e) => {
  e.preventDefault();
  (function() {
    emailjs.init("jBUulsh71upgL36ry")
  })()

  let params = {
    senderName: document.querySelector('#nom').value,
    nationalite: document.querySelector('#nation').value,
    to: "contact@sudmadatrek-voyages.com",
    replyTo: document.querySelector('#mail').value,
    message: document.querySelector('#description').value,
    subject: 'Devis personnalisé',
    numero: document.querySelector('#numero').value,
    date: document.querySelector('#appel').value,
    heure: document.querySelector('#heure').value,
    envie: arr.join(', '),
    hebergement: text,
    repas: baba.join(', '), 
    parties: part.join(', '),
    nombres: document.querySelector('#adult').value + " Adults, " + document.querySelector('#dix')?.value + " Enfants moins de 10 ans",
    arrivee: document.querySelector('#dateArrive').value,
    // jours: document.querySelector('#nbrJours').value,
    budget: new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(document.querySelector('#budget').value),
  }

  let serviceID = "service_x2ntdux";
  let templateID = "template_2pijqim";
  emailjs.send(serviceID, templateID, params).then(res => {
    console.log(serviceID, templateID, params);
    alert('Email Sent Successfully!');
  })
  .catch()
})