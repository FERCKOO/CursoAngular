export interface Passenger{
    Nombre: string;
    Childrens?: string[]
}

const passenger1: Passenger = {
    Nombre: 'Fernando'
}

const passenger2: Passenger = {
    Nombre: 'Daniela',
    Childrens: ['Santiago', 'Victoria']
}


const printChildren = (passenger: Passenger) => {

    const manyChildren = passenger.Childrens?.length || 0;

    console.log(`El pasajero ${passenger.Nombre} tiene ${manyChildren} Hijos`);   
}

printChildren(passenger1);