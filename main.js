var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var firstName = '';
firstName = 'Adonis';
var entity; //boolean; string;
entity = 3;
var user = {
    age: 31,
    name: 'Serhii'
};
var address = {
    city: 'Kyiv',
    country: 'Ukraine'
};
var common;
common = __assign(__assign({}, user), address);
// Array
var array; //string[] - обозначение массив из строк. let array:Array<string> можно так записать  
array = ['1', '2', '3'];
var numbers = [0, 1, 2, 3]; //только чтение нельзя менять пушить удалять елементы
numbers[4];
var newArray = [2, 'hello', null];
function getChannel(name, age) {
    return { name: name, age: age };
}
getChannel('Hello Baby', 22);
var getChannelName = function (name, age) {
    return { name: name, age: age };
};
getChannelName('asf', 23);
//rest
var getNumber = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers;
};
function getCar(name, price) {
    return price ? "Name ".concat(name, ", price ").concat(price) : "name".concat(name);
}
var car1 = getCar('bmw');
var car2 = getCar('bmw', 20000);
// const car3 = getCar('bmw', 20000. 'adf')
//class
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.getInfo = function () {
        return "".concat(this.name, ", ").concat(this.price);
    };
    return Car;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(name, price) {
        return _super.call(this, name, price) || this;
    }
    Bus.prototype.test = function () {
        return this.getInfo();
    };
    return Bus;
}(Car));
new Car('bmw', 100000).getInfo();
var user1 = {
    email: 'alkfwj@;kljdg.com',
    name: 'Alex',
    age: 23
};
var user2 = {
    email: 'alkfwj@;kljdg.com',
    name: 'Alex',
    age: 23
};
var users = [user1, user2, {
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
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
var user222 = {
    role: EnumRoles.ADMIN,
    color: 1 /* EnumColors.pink */
};

