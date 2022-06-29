const regresaTrue = ()=>{
    console.log('Regresa true');
return true;
}

const regresaFalse = ()=>{
    console.log('Regresa false');
return false;
}

console.warn('Not a la negación');
console.log(true);//true
console.log(!true);//false
console.log(!false);//true

console.log(!regresaFalse());//imprimira true 

console.warn('AND &&');
console.log('---------------------------');
//Con el operador and && si la primera condicion es falsa ignora todo lo demas 
console.log(regresaFalse()&& regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false
console.log('------------&&---------------');
regresaTrue() && regresaFalse();

console.warn('OR || ');
console.log('---------------------------');
console.log(regresaFalse()|| regresaTrue());//false
console.log(regresaTrue() || regresaFalse());//false

console.warn('ASIGNACIONES');
console.log('---------------------------');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1,a2,a3,a4,a5});
if(regresaFalse() && regresaTrue() && (true || false || true)){
    console.log('This is the condition if')
}else {
    console.log('this is the conditon else');
}

