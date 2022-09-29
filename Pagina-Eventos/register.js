const frmLogin = document.getElementById("frm-register");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const userRegistered = [];
let id = 0;

frmLogin.addEventListener("submit", registerUser);

// El event previene los eventos precargados
function registerUser(event){

    // Por aqui se va a registrar el usuario
    event.preventDefault();
    // Esto agrega automaticamente un ID
    id++;
    // Esto crea el usuario objeto
    const user = {
        id: id,
        nameFull: fullName.value,
        user: userName.value,
        pass: password.value,
        confPassword: confirmPassword.value
    };
    // Validar que los campos no esten vacios
    if (
        fullName.value === "" ||
        userName.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
        ) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Por favor llene todos los campos',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
        }
        // Rectifica que las contraseñas coincidan
    else if (password.value !== confirmPassword.value) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Las contraseñas no coinciden',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
    }
        // revisa que el usuario no exista
    else if (userRegistered.find(user => user.user === userName.value)) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'El usuario ya existe',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
    }

    else {
        // Agregar usuario
        userRegistered.push(user);
        // Guarda el array en el localStorage
        localStorage.setItem("user", JSON.stringify(userRegistered));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Te has registrado correctamente',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        // Despues de agregar todo al array limpia los campos del registro
        fullName.value = "";
        userName.value = "";
        password.value = "";
        confirmPassword.value = "";

        window.location.href = "indexLogin.html";
    }
}