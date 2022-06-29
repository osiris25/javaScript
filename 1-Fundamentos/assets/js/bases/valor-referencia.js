//Todos los primitivos son pasados por valor
let a = 10;
let b = a;
a=30;
console.log({a,b});

//Todos los objetos son pasados por referencia
let juan = {nombre:'juan'};
// let ana = {...juan}; OPERADOR SPRET CUANDO SE UTILIZA FUERA DE LA FUNCION,
// SEPARA LOS ELEMENTOS Y ROMPE LA RELACION DEL OBJETO 
let ana = {...juan};
ana.nombre = 'ANA';
 console.log({juan,ana});


 //const cambiarNombre = (...persona)=>{ PARAMETRO REST,
 // UNE TODOS LOS AGUMENTOS EN UNA VARIABLE Y LOS TRASFORMA EN UN ARREGLO
    const cambiarNombre = ({...persona})=>{
    personalbar.nombre = 'Tony';
    return persona;
 }

 let peter = {nombre:'Peter'};
 let tony = cambiarNombre(peter);

 console.log({peter,tony});


 //ARREGLOS
  const frutas = ['Manzana ','Pera','Piña'];
//evaluar el tiempo de respuesta
console.time('spret');
  const otrasFrutas = [...frutas];
console.timeEnd('spret'); 

console.time('slice');
  const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');
  otrasFrutas.push('Mango');
  console.table({frutas, otrasFrutas});



