/*Get all delivered orders

Get total revenue of delivered orders

Get names of customers who spent more than 1000

Check if any order is cancelled

Check if all orders are above 300

Sort orders by amount (descending)

Find order with id = 3

Create new array with 10% discount applied to all delivered orders */


let orders = [
  { id: 1, customer: "Pooja", amount: 1200, status: "delivered" },
  { id: 2, customer: "Rahul", amount: 800, status: "pending" },
  { id: 3, customer: "Amit", amount: 1500, status: "delivered" },
  { id: 4, customer: "Sneha", amount: 400, status: "cancelled" },
  { id: 5, customer: "Pooja", amount: 500, status: "delivered" }
];

//Get all delivered orders
let deliveredOrder = orders.filter((e)=> 
    e.status  === "delivered"
);

console.log("all delivered orders",deliveredOrder);

//Get total revenue of delivered orders
 let develivereRevenue = deliveredOrder.reduce((total,order)=>
{
   return total+order.amount;
},0);

console.log("total revenue of delivered orders ", develivereRevenue);

//Get names of customers who spent more than 1000
let spentMoreThanThousand = orders
  .filter(e => e.amount > 1000);

let customerName = spentMoreThanThousand.map(user=> user.customer)

console.log("Names of customers who spent more than 1000:"+customerName);


//Check if any order is cancelled

let ordercancelled = orders.some((e)=>e.status==="cancelled")
if(ordercancelled)
{
console.log("Yes order is cancelled");
}

//Check if all orders are above 300
let orderAbovethreHoundered= orders.every((e)=>e.amount>300)
if(orderAbovethreHoundered)
{
console.log(" Yes all orders are above 300 ");
}

//Sort orders by amount (descending)

let sortOrders=orders.sort((a, b) => b.amount - a.amount);

console.log("Sort orders by amount ",sortOrders);

//Find order with id = 3

let byId = orders.find((e)=> 
    e.id  === 3);

console.log("order of id ",byId);

//Create new array with 10% discount applied to all delivered orders 

let discountArry = orders
       .filter((e)=> e.status==="delivered")
     .map((e)=>  ({ 
      ...e,
       amount: e.amount - (e.amount * 10) / 100
  }));



  console.log("new array with 10% discount applied to all delivered orders", discountArry);


