document.addEventListener("DOMContentLoaded", () => {
  //Obtener hero
  const imagenHero = document.querySelector(".hero");

  //Inicializar variables
  let i = 0;
  let tiempo = 0;

  //Arreglo con imagenes de fondo
  const imagenes = ["hotel1.jpg", "hotel2.jpg", "hotel3.jpg"];

  setInterval(() => {
    imagenHero.style.backgroundPositionY = "-" + tiempo + "px";

    if (tiempo > 40) {
      tiempo = 0;

      imagenHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";

      if (i === imagenes.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }
    tiempo++;
  }, 100);

  //Boton flotante
  const btnFlotante = document.querySelector(".btn-flotante");
  // console.log(btnFlotante);

  btnFlotante.addEventListener("click", e => {
    e.preventDefault();

    const footer = document.querySelector("#footer");
    if (footer.classList.contains("activo")) {
      //Si lo contiene, ejecuta este codigo
      footer.classList.remove("activo");
      btnFlotante.classList.remove("activo");
      btnFlotante.innerText = "Idioma y Moneda";
    } else {
      //Si no lo contiene, ejecuta esto
      footer.classList.add("activo");
      btnFlotante.classList.add("activo");
      btnFlotante.innerText = "X Cerrar";
    }
  });
});
