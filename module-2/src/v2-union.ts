// const greetings = () => {
//   console.log('hello world programming hero');
// };
// greetings();

// ====================================================

// // Literal type
// type Status = 'pending';

// const status: Status = 'pending';

// console.log(status);

// ====================================================
// // Basic Union
// type Identity = string | number;

// const id: Identity = '3453456';

// console.log(id);

// ====================================================
// // Literal union
// type Role = 'user' | 'admin' | 'manager';

// const userRole: Role = 'manager';

// console.log(userRole);

// ====================================================
// // Object Union
// type Admin = { id: number; role: 'admin'; privileges: string[] };
// type Member = { id: number; role: 'member'; plans: string[] };

// type User = Admin | Member;

// const user: User = { id: 123, role: 'member', plans: ['abc', 'def'] };

// console.log(user);
