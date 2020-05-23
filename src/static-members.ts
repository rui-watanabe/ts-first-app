export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'max';
  static lastName:string = 'ishida';

  static work() {
    // return "hey, guys";
    return `hey, guys. this is ${this.firstName}.`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer)
console.log(Me.isProgrammer)
console.log(Me.work());