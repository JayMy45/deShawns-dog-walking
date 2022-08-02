import { getPets } from "./database.js"

const pets = getPets()


export const Pets = () => {
    let petsHTML = "<ul>"

    for (const pet of pets) {
        petsHTML += `<li>${pet.name}</li>`
    }

    petsHTML += "</ul>"

    return petsHTML
}