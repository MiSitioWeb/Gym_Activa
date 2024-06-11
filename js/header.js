let miHeader =  `

<img src="./img/logo.png" alt="logo" class="logo">
<button class="abrir-menu" id="abrir"><i class="bi bi-menu-up"></i></button>
<nav class="nav" id="nav">
    <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
    <ul class="  nav-list">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="#nuestro">Nuestro Gym</a></li>
        <li><a href="#servicio">Servicios</a></li>
        <li><a href="tienda.html">Tienda</a></li>
        <li><a href="#contacto">Contactos</a></li>
    </ul>
</nav>

`

document.querySelector("header").innerHTML=miHeader;


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible"); 
})