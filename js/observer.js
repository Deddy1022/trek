const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown-menu');
const copyright = document.querySelector('.trek--copyright');
const date =  new Date();
copyright.textContent += date.getFullYear();
console.log(date.getFullYear())
hamburger.onclick = function() {
  dropdown.classList.toggle('open');
console.log(hamburger)
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenEl =document.querySelectorAll(".hidden");
hiddenEl.forEach(element => observer.observe(element));