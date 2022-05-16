const axios = require('axios');

class Icecream {
  constructor(name, flavor) {
    (this.name = name), (this.flavor = flavor);
  }
}

const add = (num1, num2) => num1 + num2;

//Tillägg - Nike
const sum = (sum1, sum2) => sum1 + sum2;
const numbers = {
  isNull: () => null
}

function addToShoppingList(shoppingList, newItem) {
  shoppingList.push(newItem);
  return shoppingList;
}

const fetchData = async (id) => {
  let result;
  try {
    result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return result.data;
  } catch (err) {
    return null;
  }
};

console.log(fetchData(11));

module.exports = { Icecream, add, sum, numbers, addToShoppingList, fetchData };
