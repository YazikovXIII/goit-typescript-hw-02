/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

// type Standart = {
//   title: string,
//   likes: number,
//   accounts: string[],
//   status:string
// }

// type Detailed = Standart & {
//   details: {
//     createAt: Date,
//     updateAt: Date
//   }
// }

// type Extended = Standart | Detailed

type ExtendedShort = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: ExtendedShort = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: ExtendedShort = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
