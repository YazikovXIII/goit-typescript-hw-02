/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const firstObj: object = {
  id: 1,
  value: 1,
};

const secondObj: object = {
  name: "Bob",
  age: 31,
};

// const thirdNotObj: string = "someStr";

const result = merge(firstObj, secondObj);
// const strResult = merge(secondObj, thirdNotObj);

export {};
