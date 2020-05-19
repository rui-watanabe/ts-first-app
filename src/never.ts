export {};

// 
function error(message: string): never {
  throw new Error(message);
}

try{
  let result = error('test');
  console.log({ result });
} catch(error) {
  console.log({ error })
}

//exit value or return value
let foo: void = undefined;

//not value
//let bar: never = undefined;
let hoge: never = error('only me');