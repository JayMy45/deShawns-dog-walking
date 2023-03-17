import { getCities, getPets, getWalkerCities, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()

const findCityName = (allCities, walkerCities, currentWalker) => {
    let cityName = null

    for (const city of allCities) {
        for (const walkCity of walkerCities) {
            if (city.id === walkCity.cityId && walkCity.walkerId === currentWalker.id) {
                cityName = city
            }
        }
    }

    return cityName
}


// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"


    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        const cityName = findCityName(cities, walkerCities, currentPetWalker)

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cityName.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

