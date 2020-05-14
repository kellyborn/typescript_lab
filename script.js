"use strict";
let mountainArray = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
// console.log(mountains)
let findNameOfTallestMountain = (mountainArray) => {
    let tallest = (mountainArray[0]); // initialize variable //check to see if any other mountain is taller by using a loop and conditional statement
    mountainArray.forEach((mountain) => {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name; //store result in a variable
};
let tallest = (findNameOfTallestMountain(mountainArray));
console.log(tallest); //console.log the variable
//declare array called products which is an array of the type Product
let products = [
    { name: "superman", price: 3.00 },
    { name: "bluemoon", price: 3.50 },
    { name: "moosetracks", price: 4.00 },
];
//the function calcAverageProductsPrice, requires array to complete task, array needs to be an array of objects that meet the product interface, the function will return a number
const calcAverageProductPrice = (arrayOfProducts) => {
    let totalPrice = 0;
    //loop through arrayOfProducts and refer to each object as a product
    arrayOfProducts.forEach((product) => {
        totalPrice += product.price;
    });
    return totalPrice / arrayOfProducts.length; //.length tells the number if items in an array or # of characters in a string
};
console.log(calcAverageProductPrice(products));
let inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
let calcInventoryValue = (inventoryItems) => {
    let value = 0;
    inventoryItems.forEach((item) => {
        value += item.product.price * item.quantity;
    });
    return value;
};
console.log(calcInventoryValue(inventory)); //could also console.log(170)
