
export interface Product{
    description: string,
    price: number
}
/*
    const phone: Product = {
    description: 'Iphone 15 PRO MAX',
    price: 30000
    }

    const tablet: Product = {
    description: 'Ipad AIR 256 GB',
    price: 13000
    }
*/
interface TaxCalculationOptions {
    tax:number,
    products:Product[]
}

//const shoppingCart: Product[] = [phone, tablet]
//const tax:number = 10.0;

export function taxCalculator(options: TaxCalculationOptions) : number[] {
    let total = 0;
    const {tax, products} = options;

    products.forEach(({price}) => {
        total += price;
    })

    return [total, total * tax];
}
/*
const [total, taxes] = taxCalculator({
    products: shoppingCart,
    tax: tax
});

console.log('Total productos: ', total);
console.log('Tax de productos: ', taxes);

*/