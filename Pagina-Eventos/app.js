const container = document.getElementById("container-cards")
const btnCreate = document.getElementById("btn-create")

let imgSelected = " "
let idProduct = 0 

const modal = document.querySelector('.modal')
const closeModal = document.getElementById('close-modal')
const contacto = document. getElementById('contacto')
const descripcion = document.getElementById('Descripcion')
const newImage = document.getElementById('new-image')
const Fecha = document.getElementById('Fecha')
const lugar = document.getElementById('Lugar')
const nombre = document.getElementById('nombre')
const Npersonas = document.getElementById('Npersonas')
const btnNewProduct = document.getElementById('btn-new-create')

btnCreate.addEventListener('click', showModal)
btnNewProduct.addEventListener('click', createNewProduct)
newImage.addEventListener('change', importImg)
closeModal.addEventListener('click', removeModal)

let z = 0

import { getProducts, saveTask, deleteTask } from './firebase.js'
window.addEventListener('DOMContentLoaded', async ()=> {
    getProducts((querySnapshot) =>{
      querySnapshot.forEach(doc => {
        const task = doc.data()
        // console.log(task.contacto);
        // console.log(task.descripcion);
        // console.log(task.fecha);
        // console.log(task.id);
        // console.log(task.img);
        // console.log(task.lugar);
        // console.log(task.nombre);
        // console.log(task.personas);

        let personas = Number(task.personas)

        let cantidad_personas = 0
        let suma = personas+cantidad_personas
    
        const card = document.createElement("div")
        card.classList.add('card-product')
    
        const imgCard  = document.createElement('img')
        imgCard.setAttribute('src',task.img)
        imgCard.setAttribute('alt',task.nombre)
        imgCard.classList.add('img-product')
    
        const btnAdd = document.createElement('button')
        btnAdd.setAttribute ('id',task.id)
        btnAdd.textContent = 'Inscribete'
        btnAdd.addEventListener('click', inscibir)
        btnAdd.classList.add('btn-add')

        console.log(doc.id);
        const btnDelete = document.createElement('button')
        btnDelete.setAttribute('data-id',doc.id)
        btnDelete.textContent = 'Eliminar'
        btnDelete.classList.add('btn-delete')
    
        function inscibir() {
            z++
            if((z%2)==0){
                cantidad_personas++
                btnAdd.textContent='Inscribete'
                personasCard.textContent = personas+cantidad_personas
            }else{
                let nomx = prompt('¿Quiere reservar una inscipcion?')
                if(nomx==='si'){
                    cantidad_personas--
                    btnAdd.textContent='Cancelar'
                    personasCard.textContent = personas+cantidad_personas
                }else{
                    alert('pendejo')
                    z--
                }
            }
        }
        let x = ''
        let fechaFinal1 = task.fecha
        let mesRes1 = Number(fechaFinal1[5]+fechaFinal1[6])
        let diaRes1 = Number(fechaFinal1[8]+fechaFinal1[9])
        let horaRes1 = Number(fechaFinal1[11]+fechaFinal1[12])
        let minutosRes1 = Number(fechaFinal1[14]+fechaFinal1[15])
    
        const nombreCard = document.createElement('p')
        nombreCard.textContent = task.nombre
        nombreCard.classList.add('name-product')
    
        const lugarCard = document.createElement('p')
        lugarCard.textContent = 'Lugar: ' + task.lugar
    
        const fechaCard = document.createElement('p')
        fechaCard.textContent = 'Fecha: ' + mesRes1+'/'+diaRes1+' - '+horaRes1+':'+minutosRes1
    
        const personasCard = document.createElement('p')
        personasCard.textContent = 'Cantidad de personas: ' + suma
        
        const descripcionCard = document.createElement('p')
        descripcionCard.textContent = 'Descripcion: ' + task.descripcion
    
        const contactoCard = document.createElement('p')
        contactoCard.textContent = 'Contacto: ' + task.contacto
    
        const tiempo = document.createElement('p')
        tiempo.textContent = x
    
        setInterval(()=>{
            

            let fechaFinal = task.fecha
            let mesRes = Number(fechaFinal[5]+fechaFinal[6])
            let diaRes = Number(fechaFinal[8]+fechaFinal[9])
            let horaRes = Number(fechaFinal[11]+fechaFinal[12])
            let minutosRes = Number(fechaFinal[14]+fechaFinal[15])
            
            const time = new Date()
            const mes = (time.getMonth()+1)
            const dia = time.getDate()
            const hora = time.getHours()
            const minutos = time.getMinutes()
            const seg = time.getSeconds()

        let b = 0
        let c = 0
        let d = 0
        let e = 60-Number(seg)
    
        if(minutosRes>=minutos){
            d += (minutosRes-minutos)
        } else{
            d += 60+(minutosRes-minutos)
            horaRes -= 1
        }
        if(horaRes>=hora){
            c += (horaRes-hora)
        } else{
            c += 24+(horaRes-hora)
            diaRes -= 1
        }
        if(diaRes>=dia){
            b += (diaRes-dia)
        } else{
            b += 30+(diaRes-dia)
            mesRes -= 1
        }
        
        let b1 = ''
        let c1 = ''
        let d1 = ''
        if(b < 10 && b >= 0){
            b1 += (String(b))
        }else{
            b1 += String(b)
        }
        if(c < 10 && c >= 0){
            c1 += ('0'+String(c))
        }else{
            c1 += String(c)
        }
        if(d < 10 && d >= 0){
            d1 += ('0'+String(d))
        }else{
            d1 += String(d)
        }
        tiempo.textContent = String(b1+' - '+c1+' : '+d1+' : '+e)
        if(Number(b1)>20){
            tiempo.textContent = 'La fecha excede el limite de 20 dias'
        }
        if((mesRes-mes)>=1){
            tiempo.textContent = 'La fecha excede el limite de 20 dias'
        }
        if(mes>mesRes){
            tiempo.textContent = 'Ya paso la fecha'
            if(dia>=diaRes){
                if(hora>=horaRes){
                    if(minutos>minutosRes){
                        tiempo.textContent = 'Ya paso la fecha'
                    }
                }
            }
        }
        if(tiempo.textContent == String('0'+' - '+'00'+' : '+'00'+' : '+'1')){
            setTimeout(() => {
                tiempo.textContent = "Es HOY!!! Es HOY!!!"
            }, 1000);
        }
        
    },1000)
            tiempo.textContent = ("Tiempo restante: "+tiempo.textContent)
        card.appendChild(imgCard)
        card.appendChild(nombreCard)
        card.appendChild(lugarCard)
        card.appendChild(fechaCard)
        card.appendChild(personasCard)
        card.appendChild(descripcionCard)
        card.appendChild(contactoCard)
        card.appendChild(tiempo)
        card.appendChild(btnAdd)
        card.appendChild(btnDelete)
        container.appendChild(card)

        const borrar = document.querySelectorAll('.btn-delete')
        borrar.forEach(boton=>{
            boton.addEventListener('click',({target: {dataset}})=>{
                console.log(dataset.id);
                deleteTask(dataset.id)
                container.innerHTML = ""
                container.removeChild(card)
            })
        })
      });
      })
    })

function importImg(event){
    const currentImg = event.target.files[0]
    const objectURL = URL.createObjectURL(currentImg)
    imgSelected = objectURL
}

function createNewProduct(){
    let contarId = 0
    contarId++
    idProduct+=contarId;

    const contact = contacto.value
    const descrip = descripcion.value
    const date = Fecha.value
    const name = nombre.value
    const place = lugar.value
    const NumberP = Npersonas.value
    const id = idProduct
    const img = imgSelected

    const newProducts = {id:id , contacto: contact, descripcion: descrip,img: imgSelected, nombre: name, fecha: date, lugar: place, personas: NumberP}

    saveTask(contacto.value, descripcion.value, Fecha.value, idProduct, imgSelected, lugar.value, nombre.value, Npersonas.value)

    container.innerHTML = ""
    modal.style.display = 'none'
}

function showModal() {
    modal.style.display = 'flex'
}

function removeModal(){

    modal.style.display = 'none'
}