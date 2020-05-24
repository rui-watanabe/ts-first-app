export {};

let fooCompatible: any;
let barCompatible: string = 'TS';

console.log(typeof fooCompatible)

fooCompatible = barCompatible;

console.log(typeof fooCompatible)

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1984 = 1984;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'max');

