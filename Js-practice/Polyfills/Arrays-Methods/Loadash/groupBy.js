// // Example Usage
// const data = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 },
//     { name: 'David', age: 30 }
//   ];
  
//   const groupedByAge = groupBy(data, 'age');
//   console.log(groupedByAge);
//   // Output:
//   // {
//   //   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   //   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
//   // }
  
//   const groupedByFirstLetter = groupBy(['apple', 'banana', 'cherry'], (item) => item[0]);
//   console.log(groupedByFirstLetter);
//   // Output:
//   // {
//   //   a: ['apple'],
//   //   b: ['banana'],
//   //   c: ['cherry']
//   // }

function groupBy(array, iteratee) {
    let result = {};
    array.forEach((item) => {
        const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];

        if(!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    });
    return result;
}