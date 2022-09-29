const userName = document.getElementById("userName");
const pass = document.getElementById("password");
const frmLogin = document.getElementById("frm-register");

frmLogin.addEventListener('submit', loginUser);

function loginUser(event) {
    // El event previene los eventos precargados
    event.preventDefault();
    const getLocal = localStorage.getItem('user');
    const validateUser = JSON.parse(getLocal);
    // Valida que los campos no esten vacios
    if (userName.value === "" || password.value === "") {
        alert ("Tienes que llenar todos los campos");
    }
    // Valida que el usuario si exista
    else if (!validateUser.find(user => user.user === userName.value)) {
        alert ('El usuario no existe');
    }
    // Valida que la contraseña coincida
    else if (
        validateUser.find(user => user.user === userName.value).pass !== pass.value) {
            alert('La contraseña no coincide');
        }
    else {
        alert ('usuario logueado con éxito');
        window.location.href = "/indexCarrito.html";
    }
    
}

// dark-mode

const body = document.getElementById('body')
const cajaLogin = document.querySelector('.login-box')

let negro = localStorage.getItem('dark-mode')

window.addEventListener('load',()=>{
    if(negro === "Activado"){
        body.style.background = '#1F1F1D'
        cajaLogin.style.background = '#1F1F1D'
        cajaLogin.style.border = '1px solid white'
    }else if(negro === "Desactivado"){
        body.style.background = '#fff'
        cajaLogin.style.background = '#c5d7ff'
        cajaLogin.style.border = 'none'
    }
})