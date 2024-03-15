export class Person {
    /*
        public name?: string;
        public address: string;
    */
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private address: string = 'No address'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }


}

export class Hero {


    constructor(
        public alterEgo: string,
        public person: Person,
    ) {
    }
}

const person = new Person('Tony','Stark', 25, 'Chihuahua');

const ironman = new Hero('Ironman', person);


console.log(ironman);
