import { getCities, getWalkerCities, getWalkers } from "./database.js"

const walkerCities = getWalkerCities()
const cities = getCities()

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [, walkerId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            for (const walker of walkers) {

                /*
                    Compare the primary key of each walker to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
                // PUTTING IT ALL TOGETHER
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker) //Walkers.js module
                    const cities = assignedCityNames(assignments) // Walker.js module

                    window.alert(`${walker.name} services ${cities}`)

                    // if (walker.id === parseInt(walkerId)) {
                    //     window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)

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

const walkers = getWalkers()

//declare function to match walker to various cities they work (takes walkerArray as parameter)
const assignedCityNames = (walkArray) => {
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

    return walkerHTML += "</ul>"
}
