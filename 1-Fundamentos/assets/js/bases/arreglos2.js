let juegos = ['Zelda','Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero=  juegos[2 - 2];
let ultimo =  juegos[juegos.length -1];
console.log({primero, ultimo});
juegos.forEach((element,indice,arr )=> {
    console.log(element, indice, arr)
});

let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

//agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log('unshift',{ nuevaLongitud, juegos });

//elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });


let metroidIndex = juegos.indexOf('Metroid'); 
console.log({ metroidIndex });