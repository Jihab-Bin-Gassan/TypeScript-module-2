// follow typescript hierarchy
// ==================================
// // top types

// // let x = 'hello world'; // it's a string. you can't enter any number here.
// // x = 123 // it's a string. you can't enter any number here like this.

// // you can assign it with anything.
// let helloworld: any = 'hello world';
// // helloworld = 123;
// helloworld.length;

// const something: unknown = 'hello world';
// // something.length; // you will get error because unknown give warning that you are not assign it yet.

// ==================================
// // core types

// let something2: unknown;

// const num: number = 123;

// let nothing: void;

// // something2 = num;
// something2 = nothing;

// type Status = 'pending' | 'success';
// let someStatus: string;

// let status: Status = 'success';

// someStatus = status;
// ==================================
// // nullish type

// interface User {
//   name: string;
// }

// type LoggedInUser = User | null;

// const myData = { name: 'Anis', age: 25, role: 'Admin' };

// const currentUser: LoggedInUser = null; // valid

// const currentUser2: LoggedInUser = { name: 'Rakib' }; // valid

// const currentUser3: LoggedInUser = myData; // valid

// // unit type
// const greet = () => {
//   console.log('hello world');
// };

// // something2 = greet();

// // const greetings: string | void = greet(); // don't need to assign void because the value I'm not getting.

// ==================================
// // sub type of string type

// // if you set undefined then you can specifically return undefined.
// const anotherGreet = (): undefined => {
//   console.log('Hello World');
//   return undefined;
// };

// // const greetings = anotherGreet();
// const greetings: void = anotherGreet();
// console.log(greetings);

// ==================================
// // Bottom type

// // let neverHappening: never = 32;

// // nothing will be return from here.
// const getError = (msg: string): never => {
//   // console.log(msg);
//   throw new Error(msg);
// };

// // const x: string = getError("ABC");
// // const x: number = getError("ABC");
// // const x: undefined = getError("ABC");
// const x: null = getError('ABC'); // nothing will be return from here.
