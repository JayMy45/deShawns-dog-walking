import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pets, walkers) => {
    let petWalker = ""

    for (const walker of walkers) {
        if (walker.id === pets.walkerId) {
            petWalker = walker.name
        }
    }

    return petWalker
}


const findCity = (pets, walkers) => {
    let petWalkerCity = ""

    for (const walker of walkers) {
        if (walker.id === pets.walkerId) {
            petWalkerCity = walker.city
        }
    }

    return petWalkerCity
}


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentPetCity = findCity(currentPet, walkers)
        assignm
            < li >
            ${ currentPet.name } is being walked by
                ${ currentPetWalker } in ${ currentPetCity }
            </li >
    `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

