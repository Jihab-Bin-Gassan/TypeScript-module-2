// ================================================
// // some caveat of Type Guard
export {};
// const printAll = (x: string | string[] | null) => {
//   if (x && typeof x === 'object') {
//     for (const str of x) {
//       console.log(str);
//     }
//   } else if (typeof x === 'string') {
//     console.log(x);
//   } else {
//     console.log("");
//   }
// };
// printAll(null);
// ================================================
// // Equality
// const compare = (x: number | string, y: number | boolean) => {
//   if (x === y) {
//     console.log(x, y);
//   }
// };
// const printAll = (x: string | string[] | null) => {
//   if (x !== null) {
//     if (typeof x === 'object') {
//       for (const str of x) {
//         console.log(str);
//       }
//       return;
//     }
//     console.log(x);
//     return;
//   }
//   console.log('');
// };
// printAll('sfsdfggf');
// printAll(['asdfsd', 'sdfjh']);
// ================================================
// // "in" operator
// // interface Fish { swim: () => void }; // you can do this with interface
// type Bird = { fly: () => void };
// type Fish = { swim: () => void };
// const move = (animal: Bird | Fish) => {
//   if ('fly' in animal) {
//     animal.fly();
//     return;
//   }
//   animal.swim();
// };
// ================================================
// // "instanceof" check
// const obj = {
//   home: 'home',
//   address: {
//     street: 'hobe akta',
//   },
// };
// const date = new Date();
// const err = new Error('Something went wrong');
// console.log(typeof date);
// console.log(typeof err);
// console.log('pure object', obj instanceof Object); // instanceof check the object how this object create of those class or constructor
// console.log(date instanceof Date); // instanceof check the object how this object create of those class or constructor
// console.log(err instanceof Error); // instanceof check the object how this object create of those class or constructor
// console.log(date instanceof Error); // instanceof check the object how this object create of those class or constructor
// console.log(err instanceof Date); // instanceof check the object how this object create of those class or constructor
// ================================================
// // "instanceof" check use in a function
// const showDate = (x: Date | string) => {
//   if (x instanceof Date) {
//     console.log(x.toISOString());
//     return;
//   }
//   const date = new Date(x);
//   console.log(date.toISOString());
// };
// showDate(new Date('12-16-1971'));
// showDate('12-16-1971');
// ================================================
// // Discriminated union
// interface Circle {
//   kind: 'circle';
//   radius: number;
// }
// interface Square {
//   kind: 'square';
//   sideLength: number;
// }
// const getArea = (shape: Circle | Square) => {
//   if (shape.kind === 'circle') {
//     console.log(shape.radius);
//   } else {
//     // else means opposite of previous if condition.
//     console.log(shape.sideLength);
//   }
// };
