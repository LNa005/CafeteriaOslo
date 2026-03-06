//Enlace botón hamburguesa
let botonMenu = "#enlaceMenu";

//Boton del menu a desplegar
let menuPorDesplegar = "#menu";

//clase para desplegar el menu lentamente (sin punto)
let despliegaMenuSwitch = "despliega-menu";

function nav(){
    let boton = document.querySelector(botonMenu);
    boton.addEventListener("click", despliegaMenu, false);
}


function despliegaMenu(e){
    e.preventDefault();
    var despliega = document.querySelector(menuPorDesplegar);
    despliega.classList.toggle(despliegaMenuSwitch);
}
//Clase para saber que el js está activo
document.querySelector("html").classList.add("js");

//Activar la función para el botón
nav();