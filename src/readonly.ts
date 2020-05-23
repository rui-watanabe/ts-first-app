export {};

class Card {
  constructor(public readonly owner: string) {}
}

let myCard= new Card('max');
console.log(myCard.owner);
// myCard.owner = 'Max';