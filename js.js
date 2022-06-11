window.addEventListener("scroll", () =>{

  const titulo = document.querySelector("h3");
  const tituloAparece = titulo.getBoundingClientRect();
  const tituloH1 = document.querySelector("h1");

  //console.log (tituloAparece);

  if (tituloAparece.top <= -115) {
    tituloH1.classList.add("aparecer");

    console.log (tituloH1);
  }else {
    tituloH1.classList.remove("aparecer");
  };

})
