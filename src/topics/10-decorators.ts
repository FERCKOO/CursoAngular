function classDecorator<T extends { new (...args:any[]):{}}>(constructor : T){

    
}

@classDecorator
export class SuperClass{
    public myPropiety: string = 'asdj'

    print(){
        console.log(this.myPropiety);
        
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
