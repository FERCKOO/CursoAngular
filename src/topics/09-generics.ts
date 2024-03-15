export function whatsMyType<T>(argument: T): T{
    return argument;
}

const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<Number>(13);
const amIArray = whatsMyType<Number[]>([13,123,534,5,3,8]);

console.log(amIString);
console.log(amINumber);
console.log(amIArray);
