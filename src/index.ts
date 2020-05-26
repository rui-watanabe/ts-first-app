export {};

let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;
hello = 'hello';

const person: {
  name: {
    first: string;
    last: string;
  };
  age: number
} = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1600, false]
// can push
book.push(21);

enum CoffeeSize {
  SHORT,
  TALL = 'TALL',
  GRANDE = 1,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

let unionType: number | string = 10;
unionType = 'hello';
let unionTypes: (number | string)[] = [10, 'hello']

