function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    throw new Error('Inputs must be numbers');
  }
}

function subtractSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return subtract(a, b);
  } else {
    throw new Error('Inputs must be numbers');
  }
}

let result1 = addSafe(5, 3); // 8
let result2 = subtractSafe(10, 5); // 5

let result3 = addSafe("5", 3); // Throws an error

console.log(result1); // 8
console.log(result2); // 5
//console.log(result3); // Throws an error
