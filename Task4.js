/*Tasks:

Calculate average score per user

Find topper

Get overall class average

Check if every student passed (pass mark = 60)

Flatten all scores into one array*/

const users = [
  { name: "A", scores: [80, 90, 70] },
  { name: "B", scores: [60, 75, 85] },
  { name: "C", scores: [90, 95, 92] }
];

//Calculate average score per user


let newusers = users.map(user => {
  let total = user.scores.reduce((sum, score) => sum + score, 0);
  return total / user.scores.length;
});
console.log(newusers);

//Check if every student passed (pass mark = 60)

let passed= newusers.every((e)=> e>=60 );
console.log("student passed "+ passed);

//Get overall class average


  let total = newusers.reduce((sum, score) => {
     
  return sum + score / newusers.length;
  }, 0);


console.log("overall class average "+ total);