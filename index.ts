let sales: number = 123_456_789.12;
let course = "TypeScript";
let is_published: boolean = true;
let level;


////////////////////////////////////////////////////////////////
let user: [number, string] = [1, "John"]; //this is tuple
user[0] = 2;
console.log(user[1]);

////////////////////////////////////////////////////////////////
let numbers: number[] = [1, 2, 3, 4, 5]; //this is array
////////////////////////////////////////////////////////////////
numbers.forEach(n => n * 2); //this is lambda expression
////////////////////////////////////////////////////////////////
enum Sizes{ Small = "S", Medium = "M", Large = "L" }; //this is enum
let mySize: Sizes = Sizes.Medium;
console.log(mySize);
////////////////////////////////////////////////////////////////
function CalculateTax(amount: number, TaxYear: number): number { //this is function
        if(TaxYear > 2022)
        return amount * 1.2;
        return amount + 1;
}
CalculateTax(100, 2023);
////////////////////////////////////////////////////////////////

type Employee = { //this is type allies
        id: number;
        name: string;
        retire: (date: Date) => void;
        age : number;
}

let employee1: Employee = { //this is object
        id: 1,
        name: "deeq",
        age: 23,
        retire: (date: Date) => {
        console.log(date);
        }
}
let employee2: Employee = { //this is object
        id: 2,
        name: "DAHIR",
        age: 23,
        retire: (date: Date) => {
        console.log(date,);
        }
}
console.log(employee1.name);
console.log(employee1.retire(new Date()));
////////////////////////////////////////////////////////////////
function KgToLbs(weight: number | string): number { //this is union
        //Narrowing
        if (typeof weight === 'number')
                return weight / 0.45;
        else
                return parseInt(weight) / 0.45;
}
KgToLbs(100);
KgToLbs("100");
////////////////////////////////////////////////////////////////

type Dragable = {
        drag: () => void;
}
type Resizable = {
        resize: () => void;
}
type Greetable = {
        greet: () => void;
}
type UiWidget = Dragable & Resizable & Greetable; //this is intersection
let widget: UiWidget = {
        drag: () => console.log("dragging"),
        resize: () => console.log("resizing"),
        greet: () => console.log("greeting")
}
widget.drag();
widget.greet();
widget.resize();
////////////////////////////////////////////////////////////////
type Quanitity = 10 | 15;
let qty: Quanitity = 10;//this is type aliases
qty = 15;
console.log(qty);
type matrics = 'cm' | 'm' | 'km';
let qtys: matrics = 'cm';
console.log(qtys);
////////////////////////////////////////////////////////////////
function SayHi(name: string | null): void { //this is union operator
        if(name)
                console.log("Hello " + name.toUpperCase());
        else
                console.log("Holla!");
}
SayHi(null);
SayHi("deeq");
////////////////////////////////////////////////////////////////
function GetTotal(...numbers: number[]): number { //this is rest operator
        return numbers.reduce((total, n) => total + n);
}
let total = GetTotal(1, 2, 3, 4, 5);
////////////////////////////////////////////////////////////////
type Customer = {
        name: string;
        birthDate: Date;
}
function SaveCustomer(id: number): Customer | null { //this is optional parameter
        if(id === 1 ? null : {birthDate: new Date()})
                return { name: "deeq", birthDate: new Date() }; 
        return null;
}
let customer = SaveCustomer(0);
if(customer !== null)
        console.log(customer.birthDate, customer.name);
let customer2 = SaveCustomer(1);
//optional property access operator
console.log(customer2?.birthDate ?? "No customer found");

let customer3 = SaveCustomer(2)
//non-null assertion operator
console.log(customer3!.birthDate);
////////////////////////////////////////////////////////////////
//this is type guard
function SaveCustomer2(id: number): Customer | null {
        if(id === 1)
                return { name: "Salman", birthDate: new Date() }; 
        return null;
}
let customer4 = SaveCustomer2(1);
if(customer4 !== null)
        console.log(customer4.birthDate, customer4.name);
////////////////////////////////////////////////////////////////
//this is type guard with typeof
function SaveCustomer3(id: number): Customer | null {
        if(id === 1)
                return { name: "Ali", birthDate: new Date() }; 
        return null;
}
////////////////////////////////////////////////////////////////
// this is optional element access operator
let nums: number[] = [1, 2, 3, 4, 5,];
console.log(nums?.[8]);
////////////////////////////////////////////////////////////////
//this is optional call operator
let newNum: any = null;
console.log(newNum?.('a'));
////////////////////////////////////////////////////////////////
//this is type guard with instanceof
