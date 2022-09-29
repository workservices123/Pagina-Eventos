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
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Tienes que ingresar todos los campos',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
    }
    // Valida que el usuario si exista
    else if (!validateUser.find(user => user.user === userName.value)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El usuario no existe',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
    }
    // Valida que la contraseña coincida
    else if (
        validateUser.find(user => user.user === userName.value).pass !== pass.value) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'La contraseña no coincide',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
        }
    else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Haz sido logueado',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        window.location.href = "index.html";
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