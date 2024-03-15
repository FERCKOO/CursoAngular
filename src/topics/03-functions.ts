function addNumbers(a: number, b: number){
    return a + b;
}

const flechaFuncion = (a: number, b: number):number => a+b;

function multiply ( fisrtNumber: number, secondNumber?: number, base: number = 5) {
    return fisrtNumber * base;
}

//const result = addNumbers(1,16);
//const result2 = flechaFuncion(1,16);
//const multyplyResult = multiply(4);

interface Character {
    nombre: string,
    hp: number,
    // Funcion
    showHP: () => void
}

const healCharacter = (Character: Character, amount: number) => {
    Character.hp += amount;
}

const strider: Character = {
    nombre: 'Gollum',
    hp: 76,
    showHP() {
        console.log(`La vida de ${this.nombre} es ${this.hp}`);
        
    }
}

healCharacter(strider, 69)

strider.showHP();


export {

};