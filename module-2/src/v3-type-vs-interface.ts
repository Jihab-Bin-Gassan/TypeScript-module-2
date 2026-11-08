// type alias vs interface

// ? interface is generally connected to objects
// ? type alias is more connected to literals, unions, tuples, primitives

// try to use interface if the function is object related. And try to use type alias is the function is without object related. like literals, unions, tuples, primitives.

// ========================================================
// // TODO: type alias
// type ID = number;

// // interface id number; // not possible to do this with interface

// type Role = 'admin' | 'member';

// // interface "admin" | "member" // not possible to do this with interface

// interface User {
//   name: string;
//   // id: number;
//   id: ID;
//   // role: 'admin' | 'member';
//   role: Role;
// }

// const user: User = {
//   id: 123,
//   name: 'abc',
//   role: 'member',
// };

// ========================================================
// // TODO: interface
// interface Animal {
//   species: string;
// }

// interface Cat extends Animal {
//   breed: string;
// }

// const cat: Cat = {
//   breed: 'persian',
//   species: 'Felix catUs',
// };

// // console.log(cat.breed, cat.species);

// type Vehicle = {
//   brand: string;
// };

// type Car = Vehicle & {
//   // ? "&" symbol is use to perform intersection
//   model: string;
// };

// const car: Car = {
//   brand: 'Toyota',
//   model: 'Corolla',
// };

// // this will be marge. and this is valid. because interface will marge if there have duplicates
// interface IEmployee {
//   name: string;
// }

// interface IEmployee {
//   id: number;
// }

// interface IEmployee {
//   district: string;
// }

// // this is not valid. because type not possible to duplicate.
// // type TEmployee = {
// //   name: string
// // }

// // type TEmployee = {
// //   id: number
// // }

// const employee: IEmployee = {
//   id: 123,
//   name: 'ABC',
//   district: 'dhaka',
// };

// console.log(employee);
