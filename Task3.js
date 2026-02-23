/*Tasks:

Get even numbers

Double each number

Find first number > 10

Check if some numbers are below 5

Check if all numbers are positive

Sort ascending & descending

Get sum using reduce

Remove duplicates from [1,2,2,3,4,4] */

const numbers = [10, 5, 8, 20, 3, 15];



//Get even numbers
 numbers.forEach(num =>{
    if( num%2===0)
    {
 console.log("even numbers "+num);
    }


});

//Double each number

numbers.forEach(num=>{
    
    console.log("double numbers are "+ num*2);

});

//Find first number > 10
for(let i=0; i<numbers.length; i++)
{
   if(numbers[i] >10)
   {
      console.log("first number greater than 10 "+ numbers[i]);
    break;
   }
}

//Check if some numbers are below 5
for(let i=0; i<numbers.length; i++)
{
   if(numbers[i] <5 )
   {
      console.log("Yes some numbers are below five: "+ numbers[i]);
     break;
   }
}

//Check if all numbers are positive
let allPositive  = true;
for(let i=0; i<numbers.length; i++)
{
   if(numbers[i] < 0 )
   {
      allPositive =false;
      break;
     
   }
   
}
 console.log("All numbers are  positive "+ allPositive);

//Sort ascending & descending
let desc= 0;

for(let i=0; i<numbers.length; i++)
{
   for(let j=i+1;j<numbers.length;j++)
   {
      if(numbers[i]<numbers[j])
      {
        desc = numbers[j];
         numbers[j] =numbers[i]; 
         numbers[i] = desc;
      } 
   }
   
}
console.log("descending order",numbers);

let asc= 0;
for(let i=0; i<numbers.length; i++)
{
   for(let j=i+1;j<numbers.length;j++)
   {
      if(numbers[i]>numbers[j])
      {
        asc = numbers[j];
         numbers[j] =numbers[i]; 
         numbers[i] = asc;
      } 
   }
   
}
console.log("ascending order",numbers);

//Get sum using reduce
let sumOFArry = numbers.reduce((sum,number)=> 
{
 return sum +number;
},0);
console.log("Sum is "+ sumOFArry);

//Remove duplicates from [1,2,2,3,4,4] 
let arr = [1,2,2,3,4,4];

for(let i=0;i<arr.length;i++)
{
   for(let j= i+1;j<arr.length;j++)
   {
      if(arr[i] === arr[j])
      {
         arr.splice(i,j,arr[j]);
      }
      
   }
}
console.log("Remove duplicates",arr);