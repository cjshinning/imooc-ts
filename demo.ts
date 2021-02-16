// interface Item {
//   name: string;
// }

// class DataManager<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// const data = new DataManager<number>([1]);
// data.getItem(0);

// const data = new DataManager([
//   {
//     name: 'jenny'
//   }
// ]);

// interface Test {
//   name: string;
// }
// const data = new DataManager<number>([]);

function hello<T>(params: T) {
  return params;
}

const func: <T>(param: T) => T = hello;
