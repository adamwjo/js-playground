console.log("connected to js file")

const menu = [
    {
        name: "chicken",
        qty: 10,
        price: 15,
        vegeterian: false
    },
    {
        name: "steak",
        qty: 4,
        price: 22,
        vegeterian: false
    },
    {
        name: "brussel sprouts",
        qty: 14,
        price: 7,
        vegeterian: true
    },
    {
        name: "salad",
        qty: 55,
        price: 11,
        vegeterian: true
    },
    {
        name: "tuna",
        qty: 4,
        price: 33,
        vegeterian: false
    },
    {
        name: "cake",
        qty: 5,
        price: 6,
        vegeterian: true
    },
    {
        name: "grilled carrots",
        qty: 20,
        price: 11,
        vegeterian: true
    },
    {
        name: "pie",
        qty: 2,
        price: 7,
        vegeterian: true
    },
]


// A function that takes in the menu array as a argument, and returns all the
// vegitarian items



function getVegetarian() {
    const onlyVeg = menu.filter(function (menuItem) {
        // look at the element and see if the vegetarian key is true
        return menuItem.vegeterian === true
    })
    return onlyVeg

    // return menu.filter(function (menuItem) {
    //     // look at the element and see if the vegetarian key is true
    //     return menuItem.vegeterian === true
    // })
}

// A function that takes in the menu array as a argument, and adds 5 to the qty
// of every item

// take each element in the menu array, access the qty property and add 5
// return new array at the end
let updatedArray = menu.map(addFiveStock)

function addFiveStock(menuItem) {
    menuItem.qty += 5
    return menuItem

    // return { ...menuItem, qty: menuItem.qty + 5 }
}

// A function that returns every menu item below a given price

// A function that returns the menu object whos name matches the string given to that function