const axios = require('axios');

class Icecream {
  constructor(name, flavor, price) {
    (this.name = name), (this.flavor = flavor), (this.price = price);
  }
  updatePrice(newPrice) {
    this.price = newPrice;
  }
}

const add = (num1, num2) => num1 + num2;

//Tillägg - Nike
const sum = (sum1, sum2) => sum1 + sum2;
const numbers = {
  isNull: () => null,
};

function addToShoppingList(shoppingList, newItem) {
  shoppingList.push(newItem);
  return shoppingList;
}

function removeFormShoppingList(shoppingList, item) {
  return shoppingList.filter((itemInCart) => itemInCart !== item);
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

//Martina

function toRovarSprak(namn) {
  let vokaler = ['a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö', '-'];
  let resultat = '';

  for (let i = 0; i < namn.length; i++) {
    if (!vokaler.includes(namn[i].toLowerCase())) {
      resultat += namn[i] + 'o' + namn[i].toLowerCase();
    } else {
      resultat += namn[i];
    }
  }

  return resultat;
}

//Elodie
function cloneArray(array) {
  return [...array];
}

let programmingLanguages = ['python', 'php', 'javascript', 'c#', 'R', 'swift'];

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
