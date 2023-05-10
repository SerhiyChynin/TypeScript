
let firstName: string = '';
firstName = 'Adonis';

let entity: number; //boolean; string;
entity = 3;  

// Object 

type TypeUser = {
    name: string
    age: number
}

type TypeAddress = {
    city: String
    country: String
}

const user: TypeUser = {
    age: 31,
    name: 'Serhii'
}

const address: TypeAddress = {
    city: 'Kyiv',
    country: 'Ukraine'
}

let common: TypeUser & TypeAddress;
common = {
    ...user,
    ...address
}

// Array

let array: string[]; //string[] - обозначение массив из строк. let array:Array<string> можно так записать  

array = ['1', '2', '3'];

const numbers:ReadonlyArray<number> = [0, 1, 2, 3]; //только чтение нельзя менять пушить удалять елементы
numbers[4]; 

type TypeArray = [number, string, null];
const newArray: TypeArray = [2, 'hello', null];

//function

type TypeChannelReturn = {
    name: String
    age: Number
} 
function getChannel(name:string, age:number ):TypeChannelReturn {
    return {name, age}
}
getChannel('Hello Baby', 22);


type TypeChannelFunction = (name: string, age: number) => TypeChannelReturn;  //описание типа функции как аргементы и что возвращает

const getChannelName:TypeChannelFunction = (name, age) => {
    return {name, age}
}
getChannelName('asf', 23);

//rest

const getNumber = (...numbers:number[]) => {
    return numbers 
}

//фуекциональные перегрузки

function getCar(name:string):string 
function getCar(name: string, price: number): string

function getCar(name: string, price?: number): string {
    return price ? `Name ${name}, price ${price}` : `name${name}`;
}

const car1 = getCar('bmw')
const car2 = getCar('bmw', 20000)
// const car3 = getCar('bmw', 20000. 'adf')

//class
class Car {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    protected getInfo():string {                     //public, private(работает вызываеться внутри класса), protected (внутри класса + внутри расширенного класа) 
        return `${this.name}, ${this.price}`
    }
}
class Bus extends Car {
    constructor(name: string, price: number) {
            super(name, price)
    }
    test() {
        return this.getInfo();
    }
}
new Car('bmw', 100000).getInfo();



//типы интерфейсов

