/**
 * 2C = TWO OF CLUBS
 * 2C = TWO OF DIAMONDS
 * 2C = TWO OF HEARTS
 * 2C = TWO OF SPADES
 */ 

let deck = [];
const types = ['C','D','H','S'];
const specials=['A','J','Q','K'];
let puntosJugador = 0,
    puntosComputadora = 0;

//REFERENCIAS HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
let puntuacionJugador = document.querySelectorAll('small');
let puntuacionComputadora = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');



//CREA UNA NUEVA VARAJA
const crearDeck = ()=>{
    for(let i=2; i<=10; i++){
        for (let type of types) {
           deck.push(i + type);
        }        
    }
    for (let type of types) {
        for (let special of specials) {
            deck.push(special+type);            
        }        
    }
    /** Se consume una libreria de forma local llamado UNDERSCORE y de ahi
     * se consume el metodo SHUFFLE que regresa un arreglo de forma aleatoria 
     */
    deck = _.shuffle(deck) ;
    return deck;
}
crearDeck();

//ESTA FUNCION PERMITE CREAR UNA CARTA
const pedirCarta = ()=>{
    if(deck.length === 0){
        //MANDA UN MSJ DE ERROR EN CONSOLA SI LA CONDICION SE CUMPLE
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop();    
return carta;
}
// pelirCarta();

//VALOR CARTA 
const valorCarta = (carta)=>{
const valor =carta.substring(0,carta.length - 1);
return(!isNaN(valor)?  +valor : valor === 'A' ? 11 : 10) ;
}
const valor = valorCarta(pedirCarta());

//Turno de la computadora
const turnoComputadora = (puntosMinimos)=>{
    do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntuacionComputadora[1].innerText = puntosComputadora;
   
    const imgCarta = document.createElement('img');
    imgCarta.src= `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);
    
    if (puntosMinimos > 21) {
        break;
    }
    
} while ((puntosComputadora < puntosMinimos) && (puntosMinimos<= 21));
if (puntosComputadora === puntosMinimos) {
    alert('Nadie gana');
}else if (puntosMinimos > 21) {
    alert('Nadie gana');
} else if(puntosComputadora > 21){
    alert('Jugador Gana')
    
}
}


//EVENTOS
//Ejecuta la accion que esta dentro del callback (funcion)
btnPedir.addEventListener('click', ()=>{
 const carta = pedirCarta();
 puntosJugador = puntosJugador + valorCarta(carta);
 puntuacionJugador[0].innerText = puntosJugador;

 const imgCarta = document.createElement('img');
 imgCarta.src= `assets/cartas/${carta}.png`;
 imgCarta.classList.add('carta');
 divCartasJugador.append(imgCarta);

// logica puntaje y bloquear el boton 
if (puntosJugador > 21) {
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);    
    console.log('sorry you lost');
}else if(puntosJugador === 21){
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    console.warn('you win');
}
 console.log(puntosJugador);
});

//BOTON DETENER
btnDetener.addEventListener('click',()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
})
