// const fetchUser = async () => {
//   const res = await fetch('/api/v1/some-endpoint');
//   const data = await res.json();

//   return data; // typescript don't know about the fetch data because it's an asynchronous task. that's why it's gonna be "any" type.
// };

// const userData = await fetchUser(); // error

// // userData.name
// // userData.role

// =============================================================
interface User {
  name: string;
  role: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}

// the fetch function system could be change depend on other method. But take some idea from here.
// it could be undefined that's why need to write undefined also.
const fetchUser = async (): Promise<User | undefined> => {
  try {
    const res = await fetch('/api/v1/some-endpoint'); // the fetch link is wrong I give here for testing. so it give me an issue. but not the accurate error what I actually need to check.

    // typescript can't understand the fetch data real type. So need to make sure the type. You can do this by interface like below method or other ways.
    const data = (await res.json()) as ApiResponse<User>; // need to resolve it from type "any" to real type assertion. because there is no way without assertion.

    // res.ok mean success or status code under 200 - 299
    if (!res.ok || !data.success) {
      throw new Error(`Failed fetch user data: ${data.message}`);
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('something went wrong');
    }
  }
};

const userData = await fetchUser();

// userData.name
// userData.role

if (userData) {
  console.log(userData.name);
}
