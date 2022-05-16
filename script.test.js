const { default: axios } = require('axios');
const { Icecream, add, sum, numbers, addToShoppingList, fetchData, toRovarSprak } = require('./script');

describe('Testing Icecream-class', () => {
    test('returns a object from class', () => {
        const lakritsPuck = new Icecream('puck', 'lakrits');
        expect(lakritsPuck).toEqual({
            flavor: 'lakrits',
            name: 'puck',
        });
    });
});

test('Adds 10+10 to NOT equal 50', () => {
    expect(add(10, 10)).not.toBe(50);
});

//Tillägg - Nike
describe('Testing to add and compare numbers', () => {
    test('Should add 5 + 8 to equal 13', () => {
        const result = sum(5, 8);
        expect(result).toBe(13);
        expect(result).toBeLessThan(25);
    });
});

test('Should be null', () => {
    expect(numbers.isNull()).toBeNull();
});

//Tar bort då exemplet är likt det i dokumentationen. 
describe.skip('Handle shopping list', () => {
    const shoppingList = ['bread', 'milk', 'butter'];
    test.skip('add rice to shopping list', () => {
        expect(addToShoppingList(shoppingList, 'rice')).toContain('rice');
    });
});

//Martina

describe('Lets test rovarspraket', () => {
    test('Translate with capital letter', () => {
        expect(toRovarSprak("Martina")).toBe("Momarortotinona");
    });
    test('Translate without capital letter', () => {
        expect(toRovarSprak("erik")).toBe("erorikok");
    });
    test('Translate with special characters', () => {
        expect(toRovarSprak("Björn-Olav")).toBe("Bobjojörornon-Ololavov");
    });
});

describe('Testing api-requests', () => {
    test('Should return user', async() => {
        const user = await fetchData(1);
        expect(user.id).toBe(1);
    });
    test('Should return error', async() => {
        const user = await fetchData(11);
        console.log(user);
        expect(user).toBeNull();
    });
});