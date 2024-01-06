const shoppingCurt=[
    {name:'shoes',price:1200 ,quantity:5},
    {name:'shirt',price:500  ,quantity:3},
    {name:'jaket',price:2500 ,quantity:4},
    {name:'T-shirt',price:300,quantity:2},
]
function totalCost(products){
     let sum=0;
    for( let i=0;i<products.length;i++){
        const product=products[i];
        const totalProduct=product.price*product.quantity;
        sum=sum+totalProduct;
    }
    return sum;
}
const expense=totalCost(shoppingCurt);
console.log('total expense today : '+  expense);