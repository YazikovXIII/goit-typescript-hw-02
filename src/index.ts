// import { Day, isWeekend } from "./baseTypes/7";

// console.log(Day.FRIDAY);

// const today = Day.SATURDAY;

// const isWeekendToday = isWeekend(today);

// console.log(isWeekendToday);

// __________________пенревірка на роль

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Staff = Admin | Employee;

// function isEmployee(staff: Staff): staff is Employee {
//   return (staff as Employee).startDate !== undefined;
// }

// function getRandomInt(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomRole = getRandomInt(0, 1);

// const staffMember: Staff =
//   randomRole === 0
//     ? { name: "Bob", startDate: new Date() }
//     : { name: "Alice", privileges: ["Manage Users", "Manage Content"] };

// if (isEmployee(staffMember)) {
//   console.log(
//     `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
//   );
// } else {
//   console.log(
//     `Hello, ${
//       staffMember.name
//     }! You have the following privileges: ${staffMember.privileges.join(", ")}`
//   );
// }

// __________________пенревірка на роль

// _______________узагальнення типів

/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// function getPromise(): Promise<Array<string | number>> {
//   return new Promise((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// export {};
// _______________узагальнення типів

// _______________________________
// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// let numbers = [1, 2, 3, 4, 5];
// let firstNum = firstElement(numbers);

// let strings = ["a", "b", "c", "d"];
// let firstStr = firstElement(strings);

// console.log("num", firstNum);
// console.log("str", firstStr);

// export {};
// _______________________________

// _______________________Gen 2 var 2
// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare<T extends AllType, U extends AllType>(
//   top: Pick<T, keyof AllType>,
//   bottom: Pick<U, keyof AllType>
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// export {};

// так не працює бо можна всі поля взяти з топ чи ботом
// _______________________Gen 2

/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// ____________Gen 3

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const firstObj = {
//   id: 1,
//   value: 1,
// };

// const secondObj = {
//   name: "Bob",
//   age: 31,
// };

// const thirdObj = "some";

// const result = merge(firstObj, secondObj);

// const secondResult = merge(firstObj, thirdObj);

// console.log(result);

// ____________Gen 3

// ______________З конспекту(спитати Марину)
// enum UserRoles {
//   admin = "admin",
//   manager = "manager",
//   employee = "manager",
// }

// type UserRolesStatuses = Record<UserRoles, boolean>;

// const userRoleStatuses: UserRolesStatuses = {
//   [UserRoles.admin]: true,
//   [UserRoles.manager]: false,
//   [UserRoles.employee]: true,
// };

// export {};
// ______________З конспекту(спитати Марину)

// ____________________Gen 7
/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription: Record<UserRole, string> = {
//   [UserRole.admin]: "Admin User",
//   [UserRole.editor]: "Editor User",
//   [UserRole.guest]: "Guest User",
// };

// // console.log(RoleDescription.admin);

// export {};
// ____________________Gen 7
