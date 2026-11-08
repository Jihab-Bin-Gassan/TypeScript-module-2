// =========================================
// // type of
export {};
// let x = ['123']; // typescript determine the array as an object.
// let y = null; // typescript determine the null as an object.
// console.log(typeof x === 'object'); // true
// // console.log(typeof x === 'array'); // false
// console.log(typeof y === 'object'); // true
// =========================================
// // Type Guard
// const print = (value: string | number) => {
//   // ====== this method is good and normally okay.
//   if (typeof value === 'string') {
//     return value.toUpperCase();
//   } else {
//     return value;
//   }
//   // ====== this method is not good code. because the last return value is gonna be "never" which is not possible after all.
//   // if (typeof value === 'string') {
//   //   return value.toUpperCase();
//   // } else if (typeof value === 'number') {
//   //   return value;
//   // } else {
//   //   return value; // Here the return value is gonna be never. Because we narrowing I mean we narrow down it too much so then it's make return never value. So don't do that it's not good because the value could be string or number.
//   // }
// };
// =========================================
// // Truthiness
// // ======
// // interface user {
// //   name: string;
// //   address: {
// //     street: string;
// //   };
// // } | null // In this case. you can't use "| null" because interface is not allow it.
// // ======
// type User = {
//   name: string;
//   address?: {
//     street: string;
//   };
// } | null; // But in the type you can use "| null" like this way. either it will be object or user null.
// // ======
// const loggedInUser: User = {
//   name: 'Mir',
//   address: {
//     street: 'ABC',
//   },
// };
// const showAddress = (user: User) => {
//   // console.log(user!.address.street);
//   // console.log(user?.address.street);
//   if (user && user.address) {
//     console.log(user.address.street);
//     return;
//   }
//   throw new Error('user not found');
// };
