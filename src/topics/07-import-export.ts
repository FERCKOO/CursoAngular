import {Product, taxCalculator} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'NOKIA',
        price: 10000
    },
    {
        description: 'IPad',
        price: 15000
    }
];

const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: .15
});

console.log('Total: ', total);
console.log('Tax: ', tax);
