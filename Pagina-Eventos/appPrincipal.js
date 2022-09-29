const btnMode = document.getElementById('btnMode')

// HEAD
const header = document.getElementById('header')
const barras = document.getElementById('barras')
const menu = document.querySelector('.cont-menu')
const logoHead = document.getElementById('logoHead')
const btnHead = document.getElementById('btnHead')
const btnHead2 = document.getElementById('btnHead2')
const user = document.getElementById('user')

const capaMenu = document.querySelector('.capa')
const btnX = document.querySelector('.btnX')

// MAIN
const main = document.getElementById('main')
const footer = document.getElementById('footer')

const T1 = document.getElementById('container-titulos1')
const T2 = document.getElementById('container-titulos2')
const T3 = document.getElementById('container-titulos3')
const T4 = document.getElementById('container-titulos4')

//Modal cerrar sesion
const modalSesion = document.getElementById('modalSesion')
const btnUser = document.getElementById('buttonUser')
const btnModal = document.getElementById('buttonModal')
const capaSesion = document.getElementById('capaSesion')

const botonCerrar = document.getElementById('buttonModalCerrar')
//--------------------------------------------------------------------------------------

btnMode.addEventListener('click',cambioColor)

let Mode = ""

let negro = localStorage.getItem('dark-mode')

window.addEventListener('load',()=>{

    if(negro === "Activado"){
        btnMode.textContent = "Desactivar"
        btnMode.style.width = '40%'
        on()
    }else if(negro === "Desactivado"){
        off()
        btnMode.textContent = "Activar"
        btnMode.style.width = '30%'
    }

    if(btnMode.textContent === "Desactivar"){
        console.log("SI FUNCIONA LA RESTAURACION DEL LOCAL");
        Mode = "Activado"
        console.log(Mode);
        localStorage.setItem("dark-mode",Mode)
        
        header.style.transition = 'none'
        main.style.transition = 'none'
        footer.style.transition = 'none'
    }
})

function cambioColor(){

if(btnMode.textContent === "Activar"){
    Mode = "Activado"
    console.log(Mode);

    btnMode.textContent = "Desactivar"
    btnMode.style.width = '40%'
}

else if(btnMode.textContent === "Desactivar"){
    Mode = "Desactivado"
    console.log(Mode)

    btnMode.textContent = "Activar"
    btnMode.style.width = '30%'
}

// Black Mode On
if(Mode === "Activado"){
    on()
}

// Black Mode Off
else if(Mode === "Desactivado"){
    off()
}}

function on() {

    modalSesion.style.background = '#1F1F1D'
    
    header.style.background = '#1F1F1D'
    header.style.borderBottom = '1px solid white'
    header.style.transition = 'all 1000ms ease'
    barras.style.color = 'white'
    logoHead.style.color = 'White'
    btnHead.style.color = 'white'
    btnHead.style.border = '2px solid white'
    btnHead2.style.color = 'white'
    btnHead2.style.border = '2px solid white'
    user.style.color = 'white'
    menu.style.background = '#1F1F1D'
    menu.style.transition = 'all 1000ms ease'
    
    main.style.background = '#1F1F1D'
    main.style.bordertop = '1px solid white'
    main.style.borderBottom = '1px solid white'
    main.style.transition = 'all 1000ms ease'

    footer.style.background = '#1F1F1D'
    footer.style.bordertop = '1px solid white'
    footer.style.transition = 'all 1000ms ease'

    T1.style.borderBottom = '2px solid white'
    T2.style.borderBottom = '2px solid white'
    T3.style.borderBottom = '2px solid white'
    T4.style.borderBottom = '2px solid white'

    localStorage.setItem("dark-mode",Mode)
}

function off(){

    modalSesion.style.background = '#407aff'

    header.style.background = '#407aff'
    header.style.borderBottom = '1px solid white'
    header.style.transition = 'all 1000ms ease'

    menu.style.background = '#407aff'
    menu.style.transition = 'all 1000ms ease'

    main.style.background = '#c5d7ff'
    main.style.bordertop = '1px solid white'
    main.style.borderBottom = '1px solid white'
    main.style.transition = 'all 1000ms ease'

    footer.style.background = '#407aff'
    footer.style.bordertop = '1px solid white'
    footer.style.transition = 'all 1000ms ease'

    T1.style.borderBottom = '2px solid #407aff'
    T2.style.borderBottom = '2px solid #407aff'
    T3.style.borderBottom = '2px solid #407aff'
    T4.style.borderBottom = '2px solid #407aff'

    localStorage.setItem("dark-mode",Mode)
}

// Opciones de Menu

// window.onscroll = () =>{
//     let ubicacion = window.pageYOffset
//     if(ubicacion>400){
//         menu.style.display = "none"
//     }else{
//         menu.style.display = "flex"
//     }
//     console.log(ubicacion);
// }

barras.addEventListener('click',()=>{
    menu.style.position = 'fixed'
    capaMenu.style.display = 'flex'
})

btnX.addEventListener('click',()=>{
    capaMenu.style.display = 'none'
})

btnUser.addEventListener('click',()=>{
    capaSesion.style.display = 'flex'
})

btnModal.addEventListener('click',()=>{
    capaSesion.style.display = 'none'
})


// boton de jorge

       // Import the functions you need from the SDKs you need
       import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
       import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
       import { getDatabase, set, ref , update} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
       // TODO: Add SDKs for Firebase products that you want to use
       // https://firebase.google.com/docs/web/setup#available-libraries
       const firebaseConfig = {
         apiKey: "AIzaSyC5b9YZ525VgxChtH0WBgdmuI9jpF4t8v0",
         authDomain: "login-eventos-5e0c0.firebaseapp.com",
         databaseURL: "https://login-eventos-5e0c0-default-rtdb.firebaseio.com",
         projectId: "login-eventos-5e0c0",
         storageBucket: "login-eventos-5e0c0.appspot.com",
         messagingSenderId: "713108752407",
         appId: "1:713108752407:web:27d3a2a04dcb183fb73452"
       };
     
       // Initialize Firebase
       const app = initializeApp(firebaseConfig);
       const auth = getAuth();
        const database = getDatabase(app);

botonCerrar.addEventListener('click',()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cerraste sesion correctamente',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
          .then(()=>{
            window.location.href = "indexPrincipal.html";
          })
})