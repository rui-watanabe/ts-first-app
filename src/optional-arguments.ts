export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number,
  printable?: boolean
): number => {
  const bmi = weight / (height * height);
  if(printable){
    console.log({ bmi });
  }
  return bmi;
}

bmi(1.76, 56, true);

// bmi(height, weight, printable)
// bmi(1.76, 56, true);
// bmi(1.76, 56, false);
// bmi(1.76, 56);