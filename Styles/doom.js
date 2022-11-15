
function reordenarPrecios(arr, fn){
    const nuevosNumeros = [];
    let reoder = arr.map((el) => el.id);
    reoder.sort(fn);
    reoder.forEach(nuevoArray => {
  let productosNuevos = arr.find((el) => el.id === nuevoArray);
  nuevosNumeros.push(productosNuevos);
  });
  console.log(nuevosNumeros);
  crearElementos(nuevosNumeros);
}
function crearElementos(arr){

    
    for(const kit of arr){
        let container = document.createElement("div");
        container.innerHTML =`
        <div>
        <h2>Nombre: ${kit.nombre}</h2>
        <h2>Id del producto: ${kit.id}</h2>
        <h2>Precio: $${kit.descripcion}</h2>
        </div>
        `;
        
    container.className ="contenedor carta-productos";
    DOMslayer.appendChild(container);
    }
}
function vaciarElements(){
    DOMslayer.innerHTML =``;
    acu++;
    localStorage.setItem("codeBoton", acu);
    contador.innerHTML = `<h2>Contador: ${acu}</h2>`

}

let DOMslayer = document.getElementById("DOMslayer"); 
let boton1 = document.getElementById("boton-original");
let boton2 = document.getElementById("boton-ordenarPreciosMenor");
let boton3 = document.getElementById("boton-ordenarPreciosMayor");
let contador = document.getElementById("contador");
let acu = 0;
acu = localStorage.getItem("codeBoton")
const menor = ((a, b) => a - b);
const mayor = ((a, b) => b - a);



/*
container.innerHTML ="<div><h2>HolaMundo</h2></div>";
container.className ="contenedor carta-productos";
DOMslayer.append(container);   */ 

const articulos = [
  {
    nombre: "Kit hidroponico de piso 20 plantas",
    tipo: "piso",
    descripcion: "Medidas: 2,10m largo x0,85 m alto x0,60 m base. Dos niveles de cultivo más un depósito de 22 litros. Posee bomba bajo consumo, 20 canastas separadas cada 20cm, sustrato mineral, nutrientes, soportes, manual de instalación",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-de-piso-20-plantas",
    img: "mg/kit/KitPiso20.png",
    id: "1"
  },

  {
    nombre: "Kit hidroponico de piso 38 plantas",
    tipo: "Piso",
    descripcion: "MEDIDAS:2,10M largo x 0,85m alto x 0,60 base. Dos nivelesde cultivo y depósito de 22 litros.Posee bomba bajo consumo, 38 canastas separadas cada10cm, sustrato mineral, nutrientes, soportes, manual deinstalación.",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-de-piso-38-plantas",
    img: "img/kit/KitPiso38.png",
    id: "2"
  },
  {
    nombre: "Kit hidroponico de piso 40 plantas",
    tipo: "Piso",
    descripcion: "MEDIDAS: 2,10m largo x 1,60 m alto x 0,60m base.Cuatro niveles de cultivo y depósito de 22litros. Posee bomba bajo consumo, 40 canastas separadas cada 20cm, sustrato mineral, nutrientes, soportes, manual de instalación.",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-de-piso-40-plantas",
    img: "img/kit/KitPiso40.png",
    id: "3"
  },
  {
    nombre: "Kit hidroponico colgante de 20 plantas",
    tipo: "Colgante",
    descripcion: "Medidas:2,10m largo x 0,75 m alto x 0,15 m ancho. Dos niveles, de cultivo más un depósito de 22 litros. Posee bomba bajo consumo, 20 canastas separadas cada 20cm, sustrato mineral, nutrientes, soportes, manual de instalación",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-colgante-de-20-plantas",
    img: "img/kit/KitColgante20.png",
    id: "4"
  },
  {
    nombre: "Kit hidroponico colgante de 38 plantas",
    tipo: "Colgante",
    descripcion: "Medidas:2,10m largo x 0,75m alto x 0,15 ancho.Dos niveles de cultivo y depósito de 22 litros. Posee bomba bajo consumo, 38 canastas separadas cada 10cm, sustrato mineral, nutrientes, soportes, manual de instalación.",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-colgante-de-38-plantas",
    img: "img/kit/KitColgante38.png",
    id: "5"
  },
  {
    nombre: "Kit hidroponico de piso 40 plantas con germinador",
    tipo: "Germinador",
    descripcion: "MEDIDAS: 2,10M largo x 0,50 m ancho x 0,75m alto. Cuatro niveles de cultivo más depósito doble de 44 litros, germinador hidroponico automático incorporado. Posee bomba bajo consumo, 40 canastas separadas cada 20cm, sustrato mineral, nutrientes, soportes, manual de instalación y caño estructural.",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-de-piso-40-plantas-con-germinador",
    img: "img/kit/KitPiso40Germinador.png",
    id: "6"
  },
  {
    nombre: "Kit hidroponico de piso 80 plantas con germinador",
    tipo: "Germinador",
    descripcion: "Medidas: 2,10m largo x 1,58m alto x0,50m ancho. Ocho niveles de cultivo más depósito doble de 44 litros, germinador hidroponico automático incorporado. Posee bomba bajo consumo, 80 canastas separadas cada 20cm, sustrato mineral, nutrientes, soportes, manual de instalacion y caño estructural", 
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-de-piso-80-plantas-con-germinador",
    img: "img/kit/KitPiso80Germinador.png",
    id: "7"
  },
  {
    nombre: "Kit",
    tipo: "Piramide hidroponico piramidal de 80 plantas",
    descripcion: "Medidas 2.10m largo x 1.70malto x 1.40m base Ocho niveles de cultivo más deposito doble de 44 litros. Posee bomba bajo consumo, 80 canastas separadas cada 20cm, sustrato mineral, nutrientes, soportes, manual de instalación y estructura desarmable.",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-piramidal-de-80-plantas",
    img: "img/kit/KitPiso80Profesional.png",
    id: "8"
  },
  {
    nombre: "Kit hidroponico piramidal de 160 plantas",
    tipo: "Piramide",
    descripcion: "Medidas 4.50m largo x 1.70m alto x 1.40m base Dieciséis niveles de cultivo más deposito cuádruple de 88 litros. Sistema con recarga automática de agua.Posee bomba bajo consumo, 160 canastas separadas cada 20cm, sustrato mineral, nutrientes, soportes, manual de instalación y estructura desarmable.",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-piramidal-de-160-plantas",
    img: "img/kit/KitPiso160Profesional.png",
    id: "9"
  },  
  {
    nombre: "Kit hidroponico 40 plantas",
    tipo: "Simple",
    descripcion: "MEDIDAS: 2,10M LARGO X 1.50M ALTO X 0,15M ANCHO. Cuatro niveles de cultivo y depósito de 22 litros. Posee bomba bajo consumo, 80 canastas separadas cada 20 cm , sustrato mineral nutrientes, soportes, manual de instalación.",
    enlace: "https://wa.me/540111537949445/?text=Kit-hidroponico-40-plantas",
    img: "img/kit/Kit40.png",
    id: "10"
  },

]
boton1.onclick = () =>{vaciarElements();  crearElementos(articulos);}
boton2.onclick = () =>{vaciarElements();  reordenarPrecios(articulos, menor);}
boton3.onclick = () =>{vaciarElements();  reordenarPrecios(articulos, mayor);}
crearElementos(articulos);











/*-----------------------JSON-----------------------*/


let nombresJson = {nombre: "miguelito", edad: 25, boleans: true}
const enJSON = JSON.stringify(nombresJson);
console.log(enJSON);
