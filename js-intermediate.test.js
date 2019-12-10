// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT TESTING
// Coding practical questions

// 1. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

var arr1 = [3, 4, 5]
var arr2 = [23, -9, 0]
var arr3 = [4.5, -4.5, 12]

const multTwo = (arr) => {
  let newArr = arr.map(value => value * 2)
  return newArr
}

console.log(multTwo(arr1))
console.log(multTwo(arr2))
console.log(multTwo(arr3))


// 2. Write the code that would make this test pass.

// describe("greeter", () => {
//   let person1 = "Snap"
//   let person2 = "Crackle"
//   let person3 = "Pop"
//   test("greets a person by name", () => {
//     expect(greeter(person1)).toEqual("Hello, Snap!")
//     expect(greeter(person2)).toEqual("Hello, Crackle!")
//     expect(greeter(person3)).toEqual("Hello, Pop!")
//   })
// })

let person1 = "Snap"
let person2 = "Crackle"
let person3 = "Pop"
  
const greeter = (str) => {
  newStr = "Hello, "
  return newStr + str + "!"
} 

console.log(greeter(person1))
console.log(greeter(person2))
console.log(greeter(person3))