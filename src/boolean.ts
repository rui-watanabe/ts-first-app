// In order not to treat it is a global variable(to module)
export {};

// name is a not global
let name = 'typescript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({isFinished});
