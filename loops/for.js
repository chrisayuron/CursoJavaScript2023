array = [1, 3, 5, 7, 9];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element % 3 == 0  )
// }

// array.forEach(element => {
//     console.log(element)
// });

// array.forEach(element => {
//     console.log(element % 3 == 0  )
// });

// new_array = array.map( element => {
//         return element*2
//     }
// )
// console.log(new_array)

// element_success = array.find( element => {
//         return element > 3
//     }
// )
// console.log(element_success)

new_array_filter = array.filter((element) => {
  return element > 3;
});
console.log(new_array_filter);


new_array_filter = array.filter((element, index, arr) => {
    return element > 3;
  });