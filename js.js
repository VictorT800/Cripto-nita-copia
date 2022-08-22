
window.addEventListener("scroll", () =>{

  const titulo = document.querySelector("h3");
  const tituloAparece = titulo.getBoundingClientRect();
  const tituloH1 = document.querySelector("h1");
  const ancho = innerWidth;
  console.log (ancho);

  //console.log (tituloAparece);

  if (tituloAparece.top <= -115) {
    tituloH1.classList.add("aparecer");

    console.log (tituloH1);
  }else {
    tituloH1.classList.remove("aparecer");
  };

})


/*
// Código para que título H esté siempre activo en ancho inferior a 780px

const titulo = document.querySelector("h3");
const tituloAparece = titulo.getBoundingClientRect();
const tituloH1 = document.querySelector("h1");
const ancho = innerWidth;
//console.log (ancho);

if (ancho >780) {
  window.addEventListener("scroll", () =>{

  const titulo = document.querySelector("h3");
  const tituloAparece = titulo.getBoundingClientRect();
  const tituloH1 = document.querySelector("h1");
  const ancho = innerWidth;
  
    if (tituloAparece.top <= -115) {
      tituloH1.classList.add("aparecer");
  
      console.log (tituloH1);
    }else {
      tituloH1.classList.remove("aparecer");
    };
  
  })
}else {
  tituloH1.classList.add("aparecer");
}
*/


// Selección del párrafo del Copyright e introducción automática del año:
const fecha = new Date();

let year = fecha.getFullYear();

//console.log (year);

const copy = document.querySelector(".copy");
//console.log (copy);
copy.textContent=(` ${year}`);



//  Apartado banner Clookies:
const botonAceptarCookies = document.querySelector(".boton-galletas");
const avisoCookies = document.querySelector(".aviso-cookies");
const fondoAvisoCookies = document.querySelector(".fondo-aviso-cookies");

if(!localStorage.getItem("cookies-aceptadas")) {
  avisoCookies.classList.add("activo");
  fondoAvisoCookies.classList.add("activo");
}

//avisoCookies.classList.add("activo");
//fondoAvisoCookies.classList.add("activo");

botonAceptarCookies.addEventListener('click', () => {
  avisoCookies.classList.remove("activo");
  fondoAvisoCookies.classList.remove("activo");

  localStorage.setItem("cookies-aceptadas", true);
})

// Activación del menúy hamburguesa:
const botonNav = document.querySelector(".boton-nav");
const navMenu = document.querySelector(".nav-menu");

botonNav.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-visible");
})

// Cerrar menú hamburguesa cuando se ha seleccionado un item
const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function(){
    navMenu.classList.remove("nav-menu-visible");
  })
})



