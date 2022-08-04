import { getWalkers, getWalkerCities, getCities } from "./database.js"

document.addEventListener( //addEventListener is a method that takes two parameters the action to be performed and a function (in this case)
    "click", //this denotes that the EventListner is to notice 'click'
    (clickEvent) => {
        const itemClicked = clickEvent.target  //storing the clickEvent.target in the variable itemClicked. this is an object that can be seen in the debugger
        if (itemClicked.id.startsWith("walker")) {  //this is saying...the id key of the itemClicked object if walker is present then...
            const [, walkerId] = itemClicked.id.split("--") //split the id key string "walker--id" in to a array containing [walker, 1] then set walkerId equal to index 1 (using array destructuring)

            for (const walker of walkers) {  //the for...of loop iterates the walkers objectArray
                if (walker.id === parseInt(walkerId)) {  //when the walker id from the objectArray is equal to the walkerId (parseInt transforms a string into an integer) then...
                    const filteredWalkerCity = filterWalkerCitiesByWalker(walker)  //run the function with the walker objectArray as a parameter
                    const cityList = matchCityToWalker(filteredWalkerCity) //the results/matching objects are stored into an empty array and used as a parameter in this function
                    window.alert(`${walker.name} services ${cityList}`)  //the window alert pops up when the click event is triggered and shows the information here.

                }
            }
        }
    }
)
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

// console.log(walkers);
// console.log(walkerCities);
// console.log(cities);

// The function needs walker information, so define a parameter
const filterWalkerCitiesByWalker = (walkObject) => {
    // Define an empty array to store all of the objects
    const walkerArray = []
    // Iterate the array value of walkerCities
    for (const walk of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (walkObject.id === walk.walkerId) {
            // If it does, add the current object to the array of assignments
            walkerArray.push(walk);
        }
    }
    // After the loop is done, return the walkerArray
    return walkerArray
}

// const walkArray = filterWalkerCitiesByWalker()
// console.log(walkArray)

//declare function to match walker to various cities they work (takes walkerArray as parameter)
const matchCityToWalker = (walkArray) => {
    //define a variable equal to an empty string
    let cityNameString = ``
    //iterate the array value from filteredWalkerCitiesByWalker 
    for (const walker of walkArray) {
        //iterate the city array...
        for (const city of cities) {
            //if the id in cities objectArray equals the citId in the walkers array from invoked function then add to nameString
            if (walker.cityId === city.id) {
                cityNameString += ` ${city.name} `
            }
        }
    }
    //return string
    return cityNameString
}

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

