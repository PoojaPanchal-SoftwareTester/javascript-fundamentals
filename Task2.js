/*Tasks:

Get all open bugs

Count total critical bugs

Check if any high severity bug is open

Get only bug titles in an array

Group bugs by status (open/closed) using reduce

Sort bugs by severity (critical > high > medium > low)

Check if all bugs are closed */

let bugs = [
  { id: 101, title: "Login issue", severity: "high", status: "open" },
  { id: 102, title: "UI misalignment", severity: "low", status: "closed" },
  { id: 103, title: "Payment failed", severity: "critical", status: "open" },
  { id: 104, title: "Crash on submit", severity: "critical", status: "open" },
  { id: 105, title: "Slow loading", severity: "medium", status: "closed" }
  
];

//Get all open bugs
let openBugList = bugs.filter((e)=>e.status === "open");
console.log("all open bugs are", openBugList);

//Count total critical bugs
let flag = 1;
let totalCriticalBugs  = bugs.filter((e)=>e.severity==="critical")
.reduce((total,bug)=>
{
  
 total = total+flag;
 return total;

},0);

console.log("total critical bugs "+ totalCriticalBugs);

//Check if any high severity bug is open

console.log("high severity bug is open " +bugs.some((e)=>e.severity==="high" && e.status ==="open"))

//Get only bug titles in an array
let titles = bugs.map((e)=> e.title);
console.log("bug titles in an array are " , titles);

//Group bugs by status (open/closed) using reduce

let grouped = bugs.reduce(
  (acc, bug) => {
  
    acc[bug.status].push(bug);
    return acc;
  },
  { open: [], closed: [] }
);

console.log(grouped);

//Sort bugs by severity (critical > high > medium > low)

const severityOrder = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1
};

let sortArry = bugs.sort((a,b) => severityOrder[b.severity] - severityOrder[a.severity]);
console.log("bugs by severity (critical > high > medium > low)", sortArry);

//Check if all bugs are closed



console.log("all bugs are closed "+bugs.every((e)=>e.status==="closed"));