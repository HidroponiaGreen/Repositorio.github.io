
/*
class articulo{
  constructor(nombre, id, precio){
    this.nombre = nombre;
    this.id = id;
    this.precio = precio;
  }
}
const miArray = [];
const cinta = new articulo("Cinta", 0, 250);
miArray.push(cinta);
const papel = new articulo("papel", 1, 50);
miArray.push(papel);
const resma = new articulo("resma", 2, 60);
miArray.push(resma);
*/
/*let borrar = "";
const array = [];


const insertNomb = (valor) =>{
  let j = 0;
  do{array[j] = prompt("Ingrse el "+(parseInt(j+1))+"° nombre");
    j++;
    }while(j != valor)
  }
const eliminarNomb = (nombre) =>{
    let indice = array.indexOf(nombre);
    array.splice(indice, 1);
    alert(array.join(" -- "));
  }

insertNomb(valorX = parseInt(prompt("Ingrese la cantidad de nombres que desea poner")))
eliminarNomb(borrar = prompt("Ingrese el nombre que desee volar")); */

/*        --------------------------Codigo de orden superior---------------------------------------------       */ 




/*-------------------------FUNCIONES----------------------------------*/

/*----En Array-------- */
function pedirValor(){}
function operaciones (ope) {
  if(ope == "suma"){
      return (a, b) => a + b
      
    }else if(ope == "resta"){
      return(a, b, c) => (a - b) + c
    }
}  
function recorrerArray (arr, fn){
  for(const el of arr){
    fn(el)
  }
}
function insertarArray (arr, numb){
  let i = 1;
  do{
    let añadido = prompt("Ingresa el valor" + i);
    arr.push(añadido);
    i++;
  }while(arr.length != numb)
  console.log(arr);
}
function eliminarValor(arr, valor){
    let indice = arr.indexOf(valor);
    if(indice == -1){
      alert(arr.join("--"));
      return arr;
    } else {
      arr.splice(indice, 1);
      return eliminarValor(arr, valor);

    }

}

/*----En objetos------ */
function encontrarValor(arr){
    //let encVa = prompt("Inserte el valor a encontrar");
    let encontrarId = arr.filter((el) => el.id < 4);
    let encontrarPrecio = arr.filter((el) => el.precio < 30000);
    console.log(encontrarId);
    console.log(encontrarPrecio);
}
function actualizarPrecios(arr){
  let actualizado = arr.map((el) => {
    return{
      nombre: el.nombre,
      precios: el.precio * 1.25

    }
  })
  
  console.log(actualizado);
}
function reordenarPrecios(arr){
  let reoder = arr.map((el) => el.precio);
  reoder.sort((a, b) => a - b);
  console.log(reoder);


reoder.forEach(nuevoArray => {
  let productosNuevos = arr.find((el) => el.precio === nuevoArray);
  nuevosNumeros.push(productosNuevos);
  });
  console.log(nuevosNumeros);
}
/*-------------------------------------------------------------------*/


//   ARRAYS
/*
let suma = operaciones("suma");
let resta = operaciones("resta");
let numeros = [];

let valores = prompt("Inserta un valor");
let valorNomb = prompt("Ingrese el valor a eliminar");

insertarArray(numeros, valores);
eliminarValor(numeros, valorNomb);
recorrerArray(numeros, console.log);
numeros.forEach( (num) =>{ 
  alert(num)
})
*/



// OBJETOS


const cursos = [
  {nombre: "Kit piramidal", precio: 12524, id: 1},
  {nombre: "Kit de piso", precio: 30001, id: 2},
  {nombre: "Kit modular", precio: 24215, id: 3},
  {nombre: "Kit laminal", precio: 28521, id: 4},
  {nombre: "Kit secuencial", precio: 60300, id: 5},
  {nombre: "kit mensual", precio: 28521, id: 6},
  {nombre: "kit procedural", precio: 60300, id: 7},
]
const nuevosNumeros = [];

encontrarValor(cursos);
actualizarPrecios(cursos);
reordenarPrecios(cursos);


