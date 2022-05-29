// importing axios for fetching
const axios = require("axios");

// class to contruct icecream-object from
class Icecream {
  //constructor method that accepts attributes
  constructor(name, flavor, price) {
    (this.name = name), (this.flavor = flavor), (this.price = price);
  }
  // method that updates price-attribute
  updatePrice(newPrice) {
    this.price = newPrice;
  }
}

//Script for testing numbers
const sum = (sum1, sum2) => sum1 + sum2;
const numbers = {
  isNull: () => null,
};

//an arrow function to add two numbers
const add = (num1, num2) => num1 + num2;

function addToShoppingList(shoppingList, newItem) {
  shoppingList.push(newItem);
  return shoppingList;
}

// function that accepts an array and returns it with second argument
// filterd out
function removeFormShoppingList(shoppingList, item) {
  return shoppingList.filter((itemInCart) => itemInCart !== item);
}

// async function that does an api request to jsonplaceholder
// returns a user corresponding with id sent as an argument
const fetchData = async (id) => {
  let result;
  try {
    result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    // returns
    return result.data;
  } catch (err) {
    return null;
  }
};

function toRovarSprak(namn) {
  let vokaler = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö", "-"];
  let resultat = "";

  for (let i = 0; i < namn.length; i++) {
    if (!vokaler.includes(namn[i].toLowerCase())) {
      resultat += namn[i] + "o" + namn[i].toLowerCase();
    } else {
      resultat += namn[i];
    }
  }

  return resultat;
}

//a function that clones an array
function cloneArray(array) {
  return [...array];
}

let programmingLanguages = ["python", "php", "javascript", "c#", "R", "swift"];

// exporting all functions in an object
module.exports = {
  Icecream,
  add,
  sum,
  numbers,
  addToShoppingList,
  removeFormShoppingList,
  fetchData,
  toRovarSprak,
  cloneArray,
  programmingLanguages,
};
