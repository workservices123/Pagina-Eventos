       // Import the functions you need from the SDKs you need
          import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
          import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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

       const boton = document.getElementById('btn-login')

       boton.addEventListener('click', login)

      function login(){
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...

            let lgDate = new Date()
            update(ref(database, 'users/' + user.uid), {
                last_login: lgDate
            })
            .then(() => {
            // Data saved successfully!
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Iniciaste sesion correctamente',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
              .then(()=>{
                window.location.href = "indexPrincipal.html";
              })
            })
            .catch((error)=>{
                Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Los datos son invalidos, vuelva a ingresarlos',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
              })
              })
        })
        .catch((error)=>{
            Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Los datos son invalidos, vuelva a ingresarlos',

            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })

        })
    }

// dark-mode

const body = document.getElementById('body')
const cajaLogin = document.querySelector('.login-box')

let negro = localStorage.getItem('dark-mode')

window.addEventListener('load',()=>{
    if(negro === "Activado"){
        body.style.background = '#1F1F1D'
        cajaLogin.style.background = '#9e9e9e'
        cajaLogin.style.border = '1px solid white'
    }else if(negro === "Desactivado"){
        body.style.background = '#fff'
        cajaLogin.style.background = '#c5d7ff'
        cajaLogin.style.border = 'none'
    }
})
