import { getCities, getWalkerCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

// define a function that will get all objects in the walkerCities array 
const getWalker = () => {
    const walkerArray = []
    // for the walker that was clicked on 
    for (const walkerCity of walkerCities) {
        if (walkerCity.cityId === cities.id)
            walkerArray.push(walker)
    }

    // return an array of all matching objects.
    return walkerArray
}


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

