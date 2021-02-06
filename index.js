// FORK this starter file and save it to your own Repl.it account.

// Input number of Astronauts

let rlSync = require('readline-sync');
let count = rlSync.question("How Many Astrounauts are going to...?\nPlease enter a Number (0-9)    ");
let astronautCount = parseFloat(count);
// console.log("\n" + astronautCount + " Astronauts")

// Declare and initialize the 12 variables here:

let date	= "Monday 2019-03-18";
let time	= "10:05:34 AM";
// let astronautCount	= 7;
let astronautStatus	= "ready";
let averageAstronautMassKg	= 80.7;
let crewMassKg	= astronautCount * averageAstronautMassKg;
let fuelMassKg	= 760000;
let shuttleMassKg	= 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius	= -225;
let fuelLevel	= "100%";
let weatherStatus	= "clear";

// variable for 38 
let dash = "-".repeat(38);
console.log(dash);
// var astronautCount
// const input = require('readline-sync');

//  let astronautCount = input.question("How Many Astrounauts are going to...");


console.log(`Good Morning, ${astronautCount}!`);

// Write code to generate the LC04 report here:

console.log(dash + "\n> LC04 - LAUNCH CHECKLIST" + "\n" + dash +"\n");
console.log("Date: " + date + "\n" + dash);
console.log("> ASTRONAUT INFO" + "\n" + dash);
console.log("* count: " + astronautCount  + "\n" + dash);
console.log("* status: " + astronautStatus +"\n");
console.log("> FUEL DATA"  + "\n" + dash);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel  + "\n" + dash + "\n");
console.log("> MASS DATA"  + "\n" + dash);
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass:" + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");

console.log("\n" + dash + "\n" + "> FLIGHT PLAN"  + "\n" + dash);
console.log("* weather: " + weatherStatus);
console.log("\n" + dash + "\n> OVERALL STATUS" + "\n" + dash);
console.log("* Clear for takeoff: YES")




// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.


