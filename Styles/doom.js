
function reordenarPrecios(arr, fn){
    const nuevosNumeros = [];
    let reoder = arr.map((el) => el.precio);
    reoder.sort(fn);
    reoder.forEach(nuevoArray => {
  let productosNuevos = arr.find((el) => el.precio === nuevoArray);
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
        <h2>Precio: $${kit.precio}</h2>
        </div>
        `;
        
    container.className ="contenedor carta-productos";
    DOMslayer.appendChild(container);
    }
}
function vaciarElements(){
    DOMslayer.innerHTML =``;
}

let DOMslayer = document.getElementById("DOMslayer"); 
let boton1 = document.getElementById("boton-original");
let boton2 = document.getElementById("boton-ordenarPreciosMenor");
let boton3 = document.getElementById("boton-ordenarPreciosMayor");
const cursos = [
    {nombre: "Kit piramidal", precio: 12524, id: 1},
    {nombre: "Kit de piso", precio: 30001, id: 2},
    {nombre: "Kit modular", precio: 24215, id: 3},
    {nombre: "Kit laminal", precio: 28521, id: 4},
    {nombre: "Kit secuencial", precio: 62000, id: 5},
    {nombre: "kit mensual", precio: 28921, id: 6},
    {nombre: "kit procedural", precio: 60300, id: 7},
  ]
const menor = ((a, b) => a - b);
const mayor = ((a, b) => b - a);

  boton1.onclick = () =>{vaciarElements();  crearElementos(cursos);}
  boton2.onclick = () =>{vaciarElements();  reordenarPrecios(cursos, menor);}
  boton3.onclick = () =>{vaciarElements();  reordenarPrecios(cursos, mayor);}
crearElementos(cursos);


/*
container.innerHTML ="<div><h2>HolaMundo</h2></div>";
container.className ="contenedor carta-productos";
DOMslayer.append(container);   */ 