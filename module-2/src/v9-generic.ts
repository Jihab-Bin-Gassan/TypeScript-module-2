// =========================================================== other method but not generic
// const wrapInArray = (value: any) => {
//   return [value];
// };

// const stringArr = wrapInArray('ABC');
// const numberArr = wrapInArray(123);

// const booleanArr = wrapInArray(true);

// console.log(stringArr);
// console.log(numberArr);

// stringArr.map(item => item.toUpperCase());

// numberArr.map(item => item.toUpperCase());

// =========================================================== other method but not generic
// const wrapInArray = (value: string | number) => {
//   return [value];
// };

// const stringArr = wrapInArray('ABC');
// const numberArr = wrapInArray(123);

// const booleanArr = wrapInArray(true);

// console.log(stringArr);
// console.log(numberArr);

// stringArr.map(item => item.toUpperCase()); // it's not generic that why string also can't converting uppercase. That's not a good method. You need to use generic.

// numberArr.map(item => item.toUpperCase());

// =========================================================== generic method
// // convert function to the generic

// const wrapInArray = <something>(value: something) => {
//   return [value];
// };

// const stringArr = wrapInArray('ABC'); // implicit way to assign
// const numberArr = wrapInArray(123); // implicit way to assign

// const booleanArr = wrapInArray(true);

// console.log(stringArr);
// console.log(numberArr);

// stringArr.map(item => item.toUpperCase());

// numberArr.map(item => item.toUpperCase());

// ======================== generic method common use is T. But you can use anything because it's customized value like variable name
// // convert function to the generic
// const wrapInArray = <T>(value: T) => {
//   return [value];
// };

// const stringArr = wrapInArray<string>('ABC'); // explicit way to assign
// const numberArr = wrapInArray<number>(123); // explicit way to assign

// const booleanArr = wrapInArray(true);

// console.log(stringArr);
// console.log(numberArr);

// stringArr.map(item => item.toUpperCase());

// numberArr.map(item => item.toUpperCase()); // number can't be toUpperCase. It's good that the generic is working properly.

// ===========================================================
// // convert type or interface to the generic
// // ======
// // interface UserResponse {
// //   data: {
// //     name: string;
// //     role: string;
// //   };
// //   success: boolean;
// //   statusCode: number;
// // }

// // interface BlogResponse {
// //   data: {
// //     title: string;
// //     description: string;
// //     date: string;
// //   };
// //   success: boolean;
// //   statusCode: number;
// // }

// // ======
// interface User {
//   name: string;
//   role: string;
// }

// interface Blog {
//   title: string;
//   description: string;
//   date: string;
// }

// interface ApiResponse<T> {
//   data: T;
//   success: boolean;
//   statusCode: number;
// }

// type UserResponse = ApiResponse<User>;
// type BlogResponse = ApiResponse<Blog>;

// // ====== use separate type
// // const userRes: UserResponse = {
// //   statusCode: 200,
// //   success: true,
// //   data: {
// //     name: 'slhdsd',
// //     role: 'kjdhfk',
// //   },
// // };

// // ====== use direct without type. But separate type and direct use result are same.
// const userRes: ApiResponse<User> = {
//   statusCode: 200,
//   success: true,
//   data: {
//     name: 'slhdsd',
//     role: 'kjdhfk',
//   },
// };

// // ====== use direct without type. But focus into one thing I use "any" which is not a good practice. But if you don't know you can use any here like this way.
// // const userRes: ApiResponse<any> = {
// //   statusCode: 200,
// //   success: true,
// //   data: {
// //     name: 'slhdsd',
// //     role: 'kjdhfk',
// //   },
// // };

// // ====== use direct without type. But focus into one thing I use "unknown" which is not a good practice. But if you don't know you can use unknown here like this way.
// // const userRes: ApiResponse<unknown> = {
// //   statusCode: 200,
// //   success: true,
// //   data: {
// //     name: 'slhdsd',
// //     role: 'kjdhfk',
// //   },
// // };
