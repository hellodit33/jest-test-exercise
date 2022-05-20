const { default: axios } = require('axios');
const {
  Icecream,
  add,
  sum,
  numbers,
  addToShoppingList,
  fetchData,
  toRovarSprak,
  removeFormShoppingList,
  cloneArray,
  programmingLanguages,
} = require('./script');

describe('Testing Icecream-class', () => {
  const lakritsPuck = new Icecream('puck', 'lakrits', 25);
  test('returns a object from class', () => {
    expect(lakritsPuck).toEqual({
      flavor: 'lakrits',
      name: 'puck',
      price: 25,
    });
  });
  test('change the price of the icecream', () => {
    lakritsPuck.updatePrice(27);
    expect(lakritsPuck.price).toBe(27);
  });
});


//Testing numbers with diffrent methods; sum, toBe and toBeLessThan
describe('Testing to add and compare numbers', () => {
  test('Should add 5 + 8 to equal 13', () => {
    const result = sum(5, 8);
    expect(result).toBe(13);
    expect(result).toBeLessThan(25);
  });
});
//Testing isNull and toBeNull, an empty or unknown value
test('Should be null', () => {
  expect(numbers.isNull()).toBeNull();
});
//Testing to add two numbers NOT to equal
//(Maybe this could be included in this part of the code? ---- Elodie?)
test('Adds 10+10 to NOT equal 50', () => {
  expect(add(10, 10)).not.toBe(50);
});


//Tar bort då exemplet är likt det i dokumentationen.
describe.skip('Handle shopping list', () => {
  const shoppingList = ['bread', 'milk', 'butter'];
  test.skip('add rice to shopping list', () => {
    expect(addToShoppingList(shoppingList, 'rice')).toContain('rice');
  });
  test('remove item from shoppinglist', () => {
    expect(removeFormShoppingList(shoppingList, 'milk')).not.toContain('milk');
  });
});

//Martina

describe('Lets test rovarspraket', () => {
  test('Translate with capital letter', () => {
    expect(toRovarSprak('Martina')).toBe('Momarortotinona');
  });
  test('Translate without capital letter', () => {
    expect(toRovarSprak('erik')).toBe('erorikok');
  });
  test('Translate with special characters', () => {
    expect(toRovarSprak('Björn-Olav')).toBe('Bobjojörornon-Ololavov');
  });
});

// Testing api request that returns user matching passed id
describe('Testing api-requests', () => {
  test('Should return user', async () => {
    const user = await fetchData(1);
    expect(user.id).toBe(1);
  });
  test('Should return error', async () => {
    // passing an id that does not exist
    const user = await fetchData(11);
    console.log(user);
    expect(user).toBeNull();
  });
});

//Test to check if the array is cloned properly
describe('testing if it clones the array', () => {
  test('properly clones array', () => {
    const array = [1, 2, 3];
    //checking that the cloned array is properly cloned
    expect(cloneArray(array)).toEqual(array);
  });
  //checking that it created a clone of the array and that it's not the array but the cloned we're dealing with
  test('not the same array but a cloned one', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).not.toBe(array);
  });
});

//test to check the length of an array and to check it added a programming language to the array
describe('programming languages array', () => {
  test('should have initial length of 6', () => {
    expect(programmingLanguages.length).toBe(6);
  });
  test('add Kotlin to the end of the array', () => {
    programmingLanguages.push('Kotlin');
    expect(programmingLanguages[programmingLanguages.length - 1]).toBe(
      'Kotlin'
    );
  });
});
