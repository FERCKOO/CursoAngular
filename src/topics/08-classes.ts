export class Person {
    /*
        public name?: string;
        public address: string;
    */
    constructor(
        public name: string,
        private address: string = 'No address'
    ) {
        this.name = name;
        this.address = address;
    }


}

export class Hero {

    public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string = 'Nombre Oculto'
    ) {
        this.person = new Person(realName);
    }
}

const ironman = new Hero('Ironman', 25, 'Tony Stark');


console.log(ironman);
