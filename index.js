const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [11, 12, 13, 14, 15, 16];
const numbers = [...numbers1, ...numbers2];

const square = num => num * num;

const squares = numbers.map(square);

const isEven = number => number % 2 === 0;

const evenSquares = numbers.filter(isEven);

const [firstEvenSquare, secondEvenSquares] = evenSquares;

console.log(`Original numbers: ${numbers}`);
console.log(`Squares: ${squares}`);
console.log(`Even squares: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}, Second even squares: ${secondEvenSquares}`);