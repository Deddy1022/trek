const outPut = `
  <div class="icon-links">
    <a href="https://www.facebook.com/voyagedirectmadagascar" target="_blank"><i style="font-size: 30px" class="fa-brands fa-facebook logo"></i></a>
    <a target="_blank" href="https://www.instagram.com/sudmadatrekvoyages/"><i style="font-size: 30px" class="fa-brands fa-instagram logo"></i></a>
    <a target="_blank" href="https://twitter.com/sudmadatrek"><i  style="font-size: 30px" class="fa-brands fa-twitter logo"></i></a>
    <a target="_blank" href="https://wa.me/+261346011695"><i  style="font-size: 30px; color: green" class="fa-brands fa-whatsapp logo"></i></a>
    <a href="mailto:contact@sudmadatrek-voyage.com"><i  style="font-size: 30px" class="fa fa-envelope logo"></i></a>
  </div>
  <div class="about--trek">
    <div class="name">
      <span>SUD</span>MADATREK
    </div>
    <div class="grid-about">
      <div>
        <p>Lot D02/3601 ampasambazaha 301 Fianarantsoa, Madagascar</p>
      </div>
      <div>
        <a style="text-decoration: none; color: black" href="tel:+261346011695"><p>+261 34 60 116 95</p></a>
      </div>
    </div>
  </div>
`;

document.querySelector('.trek--footer').insertAdjacentHTML("beforeend", outPut);