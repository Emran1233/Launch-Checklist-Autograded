// Write your helper functions here!

// require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*              */

console.log(document.getElementById("missionTarget"))
let missionTarget = document.getElementById("missionTarget")
missionTarget.innerHTML = `<h2>Mission Destination</h2>
<ol>
    <li>Name: ${name}</li>
    <li>Diameter: ${diameter}</li>
    <li>Star: ${star}</li>
    <li>Distance from Earth: ${distance}</li>
    <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
 }
 
function validateInput(testInput){
     if (testInput === ""){
       return "Empty";    
 }   else if (isNaN(testInput) === true){  
       return "Not a Number";
 }   else if (isNaN(testInput) === false){ 
        return "Is a Number";
 };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { 
     let pilotStatus = document.getElementById("pilotStatus"); 
     let copilotStatus = document.getElementById("copilotStatus"); 
     let fuelStatus = document.getElementById("fuelStatus"); 
     let cargoStatus = document.getElementById("cargoStatus"); 
     let launchStatus = document.getElementById("launchStatus");  
     let faultyItems = document.getElementById("faultyItems"); 
    list.style.visibility = "visible";
        
if   (validateInput(pilot) === "Is a Number"  
||    validateInput(copilot) === "Is a Number" 
||    validateInput(fuelLevel) === "Not a Number" 
||    validateInput(cargoLevel) === "Not a Number") { 
        alert("Make sure to enter valid information for each field!");
    } else { 
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
       copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       launchStatus.innerHTML = "Shuttle is Ready for Launch"; 
       fuelStatus.innnerHTML = "Fuel level high enough for launch"; 
       cargoStatus.innerHTML = "Cargo mass low enough for launch"; 
       launchStatus.style.color = "green"; 
    if  (fuelLevel < 10000) { 
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch"; 
        faultyItems.style.visibility = "visible"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";   
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        }          
   }; 
    if (cargoLevel > 10000 ) {    
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red"; 
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";   
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } 
};   
   


           

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     console.log(response)
     return response.json();
    });
    console.log(planetsReturned);
    return planetsReturned; 
 }
      
 function pickPlanet(planets) {
    let idx = Math.floor(Math.random() * planets.length);
    return planets[idx];
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch; 
