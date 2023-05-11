
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

interface IUserAge {
    age:number
}
interface IUser extends IUserAge{
    name: string;
    email: string;
}


const user1: IUser = {
    email: 'alkfwj@;kljdg.com',
    name: 'Alex',
    age: 23
} 
const user2: IUser = {
    email: 'alkfwj@;kljdg.com',
    name: 'Alex',
    age: 23
} 

const users: IUser[] = [user1, user2, {
    email: 'alkfwj@;kljdg.com',
    name: 'Alex',
    age: 23
},
    {
        email: 'alkfwj@;kljdg.com',
        name: 'Alex',
        age: 23
    }];


    // enum

enum EnumRoles{
        ADMIN, GUEST, USER
}
const enum EnumColors {
    black, pink, green
}
interface IUser222 {
       role:EnumRoles,
       color:EnumColors
} 
   
const user222: IUser222 = {
    role: EnumRoles.ADMIN,
    color: EnumColors.pink
}

console.log(EnumRoles[EnumRoles.ADMIN]);

const inputElement = document.querySelector('input');
const value1 = (inputElement as HTMLInputElement).value;
const value2 = (<HTMLInputElement> inputElement).value;

const getLength = (text: string | null) => {
    return text?.length
}
getLength(null);

//Generic

function f1 <T>(args: T):T {
    return args;
}
f1<string>('Hello');
f1<number>(22);

class Channel <T> {
    private name:T;
    constructor(name: T) {
        this.name = name
    }
    getName():T {
        return this.name;
    }
}

new Channel<string>('Hello!');
new Channel<number>(222);

const f2 = <T>(args: T): T => {
    return args;
}
f2<number>(234);
f2<boolean>(true);

interface IPair<K, V> {  //два дженерика
    key: K,
    value: V
}

const pair1: IPair<string, number> = {
    key: 'Hello',
    value: 222
} 
const pair2: IPair<number, number> = {
    key: 123,
    value: 222
} 

type TypeLength = {
    length: number;
}

function getNameLength<T extends TypeLength>(entity:T):number {
    return entity.length;
}

getNameLength('lkjasdf')
getNameLength([1, 2, 3])

// Pick, Omit, Partial

interface ICar {
    id: number,
    name: string,
    price: number,
    yearBuild: number
}

interface ICarCreate extends Omit<ICar, 'id'> {  //Omit вырезает, исключает то что указали и берет все остальное
}
const car: ICarCreate = {
    name: 'BMW',
    price: 120000,
    yearBuild: 1999
}

interface ICarId extends Pick<ICar, 'id'> {  // Pick хватает только то что выбрали

}

const carId: ICarId = {
    id: 123
}

interface IOptionalCar extends Partial<ICar> {  //Partial все свойства становяться не обязательными

}

const cars: IOptionalCar = {
    
}

interface IReadonlyCar extends Readonly<ICar>{  //все поля только для чтения

}

type TypeCarRecord = Record<'Name' | 'price', string | number>;

// const car: TypeCarRecord = {
    
// }

interface IRequireCar extends Required<ICar> {}  //Required все свойства становяться обязательными.

type TypeGetName = () => string;

type Return = ReturnType<TypeGetName>; //видим что будет возвращать функция

//Extract

type Any = Extract<'max' | 'den', 'den' | 'michael'> // Extract вернет то что дублируеться
type OneMore = Exclude<'max' | 'den', 'den' | 'michael'> // Excludeисключает все кроме первого параметра
type NotNull = NonNullable<string | number | null | undefined> // позволяет удалить все null i undefiend


//Декораторы - надстройка функция которая накладует сверх функционал на класс метод.. 

function LogClass(constructor: Function) {
    console.log(constructor.name);
}

class Plane {
    constructor(id: number) {
        
    }
}

//Расширеные типы

type TypeIsNumber<T> = T extends number ? 'yes' : 'no'  //расширяется от числа и проверка если равен числу то да если нет то нет

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'porsche' | 'volvo'
type TypePrice = '$100000' | '$120000' | '$70000'
type TypeCar = `${TypeBrand} ${TypePrice}`

const carOne: TypeCar = 'porsche $120000' //обьединяет дваьтипа в один.





