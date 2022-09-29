        // Import the functions you need from the SDKs you need
          import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
          import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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


       const boton = document.getElementById('btn-register')

       boton.addEventListener('click', register)

      function register(){
      const fullName = document.getElementById("fullName").value
      const userName = document.getElementById("userName").value
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value

          createUserWithEmailAndPassword(auth, email, password, fullName, userName)
          .then((userCredential) => {
       // Signed in
          const user = userCredential.user;
          // ...
          set(ref(database, 'users/' + user.uid), {
              email: email,
              password : password,
              fullName : fullName,
              userName : userName
          })
            .then(() => {
          // Data saved successfully!
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Te has registrado correctamente',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
          .then(()=>{
            window.location.href = "indexLogin.html";
          })
            })
            .catch((error) => {
            // The write failed...
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Los campos registrados son invalidos, intentelo nuevamente',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
            });
          })
          .catch((error)=>{
            Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Los campos registrados son invalidos, intentelo nuevamente',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
          })

        }