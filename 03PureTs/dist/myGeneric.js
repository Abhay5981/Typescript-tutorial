"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//  identityThree(true)
//  we can also write in this way
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({brand: "Cola", type:5})
function getSearchProduct(products) {
    // do some databased operation
    const myIndex = 0;
    return products[myIndex];
}
//Now how to convert this function in to a arrow function
const getMoreSearchProduct = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function codeFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
codeFunction(3, { connection: "dbc", username: "alok@", password: "abcd" });
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
