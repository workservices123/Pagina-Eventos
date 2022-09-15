const btnMode = document.getElementById('btnMode')

// HEAD
const header = document.getElementById('header')
const barras = document.getElementById('barras')
const menu = document.querySelector('.cont-menu')
const textoMenu = document.querySelectorAll('.textoMenu')
const logoHead = document.getElementById('logoHead')
const btnHead = document.getElementById('btnHead')
const btnHead2 = document.getElementById('btnHead2')
const user = document.getElementById('user')

// MAIN
const main = document.getElementById('main')
const footer = document.getElementById('footer')

//CARTA

//Face
const tituloP = document.querySelector('.tituloP')
const texto = document.querySelector('.texto')
const tituloP2 = document.querySelector('.tituloP2')
//Back
const tituloBack = document.querySelector('.tituloBack')
const divp = document.querySelector('.divp')

const T1 = document.getElementById('container-titulos1')
const T2 = document.getElementById('container-titulos2')
const T3 = document.getElementById('container-titulos3')
const T4 = document.getElementById('container-titulos4')

// FOOTER
const icons = document.getElementById('icons')


//--------------------------------------------------------------------------------------


btnMode.addEventListener('click',cambioColor)

function cambioColor(){

// Black Mode On
if(btnMode.textContent === "Activar"){

    btnMode.textContent = "Desactivar"
    btnMode.style.width = '40%'

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
    // textoMenu.style.color = 'white'
    
    main.style.background = '#1F1F1D'
    main.style.bordertop = '1px solid white'
    main.style.borderBottom = '1px solid white'
    main.style.transition = 'all 1000ms ease'

    // tituloP.style.color = 'white'
    // texto.style.color = 'white'
    // tituloP2.style.color = 'white'

    // tituloBack.style.color = 'white'
    // divp.style.color = 'white'

    footer.style.background = '#1F1F1D'
    footer.style.bordertop = '1px solid white'
    footer.style.transition = 'all 1000ms ease'

    T1.style.borderBottom = '2px solid white'
    T2.style.borderBottom = '2px solid white'
    T3.style.borderBottom = '2px solid white'
    T4.style.borderBottom = '2px solid white'
    // icons.style.color = 'white'
}

// Black Mode Off
else if(btnMode.textContent === "Desactivar"){

    btnMode.textContent = "Activar"
    btnMode.style.width = '30%'

    header.style.background = '#407aff'
    header.style.borderBottom = '1px solid white'
    header.style.transition = 'all 1000ms ease'
    // barras.style.color = 'black'
    // logoHead.style.color = 'black'
    // btnHead.style.color = 'black'
    // btnHead.style.border = '2px solid black'
    // btnHead2.style.color = 'black'
    // btnHead2.style.border = '2px solid black'
    // user.style.color = "black"
    menu.style.background = '#407aff'
    menu.style.transition = 'all 1000ms ease'
    // textoMenu.style.color = 'black'

    main.style.background = '#c5d7ff'
    main.style.bordertop = '1px solid white'
    main.style.borderBottom = '1px solid white'
    main.style.transition = 'all 1000ms ease'

    // tituloP.style.color = 'black'
    // texto.style.color = 'black'
    // tituloP2.style.color = 'black'

    // tituloBack.style.color = 'black'
    // divp.style.color = 'black'

    footer.style.background = '#407aff'
    footer.style.bordertop = '1px solid white'
    footer.style.transition = 'all 1000ms ease'

    T1.style.borderBottom = '2px solid #407aff'
    T2.style.borderBottom = '2px solid #407aff'
    T3.style.borderBottom = '2px solid #407aff'
    T4.style.borderBottom = '2px solid #407aff'
    // icons.style.color = 'black'
    }

}
