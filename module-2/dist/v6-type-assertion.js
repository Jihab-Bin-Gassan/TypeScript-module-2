// ===================================================== don't use assertion if you don't sure about the input values. this type of assertion could be risky. If possible then it's better to avoid this. If we can handle the type properly then we don't need to use this type of assertion much.
export {};
// // Type assertion
// // "as" syntax
// type Status = 'pending' | 'approved' | 'rejected';
// // type Status = 'pending' | 'approved' | 'rejected' | string; // wrong method
// const someStatus: string = 'pending';
// // const someStatus: 'pending' = 'pending'; // wrong method
// const showStatus = (status: Status) => {
//   console.log('you current application status is ' + status);
// };
// showStatus(someStatus as Status); // as syntax or this key word use for assertion.
// =====================================================================
// // non-null assertion
// interface Config {
//   port?: number;
// }
// const config: Config = {
//   port: 5000,
// };
// // make type assert and convert to number. You can use this 2 method as your wish. But you must need to 100% surety about the value is have or not. if value have and you sure about that. then use it or not then don't use it.
// const currentPort: number = config.port!; // use (!) to solve if you sure that there is not any undefine value like this.
// // const currentPort: number = config.port as number; // use (as number) to solve if you sure that there is not any undefine value like this.
// =====================================================================
// // constant assertion
// // if you make this object const. You can't change this later. Because using const make the object property readonly.
// const configuration = {
//   port: 8080,
//   prefix: '/api/v2',
// } as const;
// // configuration.port = 4040; // you can't change it like this because it is const object as you make.
