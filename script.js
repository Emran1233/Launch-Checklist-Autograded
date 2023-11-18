// Write your JavaScript code here!


window.addEventListener("load", function() {
    let form = document.querySelector("form");
form.addEventListener("submit", function(event){ 
        event.preventDefault(); 
        let document = window.document;
        let userPilotName = document.querySelector("input[name=pilotName]");
        let userCoPilotName = document.querySelector("input[name=copilotName]");
        let userFuelLevel = document.querySelector("input[name=fuelLevel]");
        let userCargoMass = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        

if (userPilotName.value === "" || userCoPilotName.value === "" || userFuelLevel.value === "" || userCargoMass.value === ""){
            alert("All fields are required!");
            event.preventDefault();
} else {
            formSubmission(document, list, userPilotName.value, userCoPilotName.value, userFuelLevel.value, userCargoMass.value)
            event.preventDefault();
        };
    });

  

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let planetPicked = pickPlanet(listedPlanets);
        console.log(planetPicked);
        
         console.log(planetPicked.name);
 
        addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
     })
    
 });

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    
 
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    
 
