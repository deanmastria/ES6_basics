const numbers1 = [1, 2, 3, 4, 5, 6];                                                                                // Create two arrays of numbers called numbers1 and numbers2
const numbers2 = [11, 12, 13, 14, 15, 16];                                                                          

const numbers = [...numbers1, ...numbers2];                                                                         // Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2

const square = num => num * num;                                                                                    // Define an arrow function called square that accepts a number as an argument and returns the square of the number


const squares = numbers.map(square);                                                                                // Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array


const isEven = number => number % 2 === 0;                                                                          // Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false


const evenSquares = numbers.filter(isEven);                                                                         // Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array


const [firstEvenSquare, secondEvenSquares] = evenSquares;                                                           // Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare


console.log(`Original numbers: ${numbers}`);                                                                        // Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares                                                                   
console.log(`Squares: ${squares}`);
console.log(`Even squares: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}, Second even squares: ${secondEvenSquares}`);