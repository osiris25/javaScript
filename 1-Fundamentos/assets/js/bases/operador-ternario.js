/**
 * on weekdays we open the store at 11 am
 */
/**
 * enter a web site, to check if the store is open today.
*/
const day = 1;// 0:Sunday.. 1:Monday
const currentTime = 3;
let openTime;
let message;//is open, is closed, today open at xx 

if(day === 0 || day === 6 ){
    console.log('weekend');
    openTime = 9;
}else{
    console.log('weekdays');
    openTime = 11;
}

console.warn('operador ternario');
console.log('---------------------------');
openTime = ([0,6].includes(day))? 9 : 11;

if(currentTime >= openTime){
    message = 'it is open'
}else {
     message = `It is closed, today open at ${openTime}`
}

console.warn('operador ternario ejercicio 2');
console.log('---------------------------');
message = (currentTime>= openTime) ? 'it is open' : `It is closed, today open at ${openTime}`;

console.log({openTime, message});
