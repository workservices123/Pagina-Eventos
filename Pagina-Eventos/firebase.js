// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7zvKtkMZG_ZhMMCq2Z22XHiwBI5-5z4g",
  authDomain: "tuseventos-c4324.firebaseapp.com",
  projectId: "tuseventos-c4324",
  storageBucket: "tuseventos-c4324.appspot.com",
  messagingSenderId: "541591852018",
  appId: "1:541591852018:web:4555891c43663e5065916b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (contacto, descripcion, fecha, id, img, lugar, nombre, personas) => {
  addDoc(collection(db, "products"), {contacto, descripcion, fecha, id, img, lugar, nombre, personas})
}

  export const getTask = () => getDocs(collection(db, "products"));

  export const getProducts = (callback) => onSnapshot(collection(db,"products"), callback)

  export const deleteTask = (id) => deleteDoc(doc(db, "products", id));