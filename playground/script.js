// console.log("we're in")

// assign x the value of 3
let x = 3
// assign y the value of x
let y = x
// reassign x to the value of 4
x = 4
// // What is y?
console.log(y)

// assign person the value of an object
let person = { name: "John", age: 12 }
// assign2 person the value of person
let person2 = person
// reassign person2's name value to "Adam"
person.name = "Adam"
// // what is person2
console.log(person2)


















const menu = [
    { name: "Lamb", veggy: false },
    { name: "Rissotto", veggy: true },
    { name: "Chicken", veggy: false },
    { name: "sprouts", veggy: true }
]


// make a new array with menu items that are just vegitarian
// const newArray = menu.filter((menuItem) => {
//     //what do we want in the new array?
//     //perform a test that evals to a boolean
//     return menuItem.veggy === true
// })

const newArray = menu.filter(menuItem => menuItem.veggy === true)

console.log(newArray)

// function handleFilter(param){
//     // what is store in "param?"
// }


// given a name, will return the object with that name
function findItem(foodName) {
    // when the element name value matches the foodName
    // passed to this function

    return menu.find((menuItem) => {
        return menuItem.name === foodName
    })
}

console.log(findItem("Lamb"))
console.log(findItem("cool"))
console.log(findItem("sprouts"))