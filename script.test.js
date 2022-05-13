const { Icecream, add, addToShoppingList, fetchData } = require('./script');

describe('Testing Icecream-class', () => {
  test('returns a object from class', () => {
    const lakritsPuck = new Icecream('puck', 'lakrits');
    const shoppingList = ['bread', 'milk', 'butter'];
    expect(lakritsPuck).toEqual({
      flavor: 'lakrits',
      name: 'puck',
    });
  });
});

test('Adds 10+10 to NOT equal 50', () => {
  expect(add(10, 10)).not.toBe(50);
});

describe('Handle shopping list', () => {
  const shoppingList = ['bread', 'milk', 'butter'];
  test('add rice to shopping list', () => {
    expect(addToShoppingList(shoppingList, 'rice')).toContain('rice');
  });
});

describe('Testing api-requests', () => {
  test('Should return user', async () => {
    const user = await fetchData(1);
    expect(user.id).toBe(1);
  });
  test('Should return error', async () => {
    const user = await fetchData(11);
    console.log(user);
    expect(user).toBeNull();
  });
});
