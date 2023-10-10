"use strict";
var _a;
let sales = 123456789.12;
let course = "TypeScript";
let is_published = true;
let level;
let user = [1, "John"];
user[0] = 2;
console.log(user[1]);
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => n * 2);
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "S";
    Sizes["Medium"] = "M";
    Sizes["Large"] = "L";
})(Sizes || (Sizes = {}));
;
let mySize = Sizes.Medium;
console.log(mySize);
function CalculateTax(amount, TaxYear) {
    if (TaxYear > 2022)
        return amount * 1.2;
    return amount + 1;
}
CalculateTax(100, 2023);
let employee1 = {
    id: 1,
    name: "deeq",
    age: 23,
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 2,
    name: "DAHIR",
    age: 23,
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee1.name);
console.log(employee1.retire(new Date()));
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight / 0.45;
    else
        return parseInt(weight) / 0.45;
}
KgToLbs(100);
KgToLbs("100");
let widget = {
    drag: () => console.log("dragging"),
    resize: () => console.log("resizing"),
    greet: () => console.log("greeting")
};
widget.drag();
widget.greet();
widget.resize();
let qty = 10;
qty = 15;
console.log(qty);
let qtys = 'cm';
console.log(qtys);
function SayHi(name) {
    if (name)
        console.log("Hello " + name.toUpperCase());
    else
        console.log("Holla!");
}
SayHi(null);
SayHi("deeq");
function GetTotal(...numbers) {
    return numbers.reduce((total, n) => total + n);
}
let total = GetTotal(1, 2, 3, 4, 5);
function SaveCustomer(id) {
    if (id === 1 ? null : { birthDate: new Date() })
        return { name: "deeq", birthDate: new Date() };
    return null;
}
let customer = SaveCustomer(0);
if (customer !== null)
    console.log(customer.birthDate, customer.name);
let customer2 = SaveCustomer(1);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthDate) !== null && _a !== void 0 ? _a : "No customer found");
let customer3 = SaveCustomer(2);
console.log(customer3.birthDate);
function SaveCustomer2(id) {
    if (id === 1)
        return { name: "Salman", birthDate: new Date() };
    return null;
}
let customer4 = SaveCustomer2(1);
if (customer4 !== null)
    console.log(customer4.birthDate, customer4.name);
function SaveCustomer3(id) {
    if (id === 1)
        return { name: "Ali", birthDate: new Date() };
    return null;
}
let nums = [1, 2, 3, 4, 5,];
console.log(nums === null || nums === void 0 ? void 0 : nums[8]);
let newNum = null;
console.log(newNum === null || newNum === void 0 ? void 0 : newNum('a'));
//# sourceMappingURL=index.js.map