lang();
function lang() {
  if( window.localStorage )
  {
    if( !localStorage.getItem('langue') )
    {
      window.location.reload();
      charge()
    }
  }
}
function charge() {
  if (!localStorage.getItem("langue")) {
    localStorage.setItem("langue", "français");
    change.forEach(element => element.textContent = "english");
  }
}


const mois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const annee = new Date().getFullYear();
const selectMois = document.querySelector('.mois');
const selectAnnee = document.querySelector('.annee');
let html = ''
for(let an = 1990; an <= annee; an++) {
  html = `
    <option value="${an}">${an}</option>
  `
  selectAnnee.insertAdjacentHTML('afterbegin', html);
}
for(let m of mois) {
  html = `
    <option value="${m}">${m}</option>  
  `

  selectMois.insertAdjacentHTML('afterbegin', html);
}