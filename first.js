let cart = [
    {name:"jeans", price:100},
    {name:"tshirt", price:500},
    {name:"hat", price:800},
];


let totalPrice= cart.reduce((total,current)=>
{
    return total + current.price;

},0);

console.log(totalPrice);

