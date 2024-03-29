import { getPets } from "./database.js"

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a pet <li> was clicked
        */
        if (itemClicked.id.startsWith("pet")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("pet--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `petId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [, petId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a pet object,
                find the whole object by iterating the pets array.
            */
            for (const pet of pets) {

                /*
                    Compare the primary key of each pet to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
                if (pet.id === parseInt(petId)) {
                    window.alert(`${pet.name} barks at you`)
                }
            }
        }
    }
)

const pets = getPets()




export const Pets = () => {
    let petsHTML = "<ul>"

    for (const pet of pets) {
        petsHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petsHTML += "</ul>"

    return petsHTML
}


/*  itemClicked = clickEvent.target
      "<li id="pet--${pet.id}">""

     if (itemClicked.id.startsWith("pet") {
         "id = "   

    const [, petId] = itemClicked.id.split("--")
                        "<li id="pet--${pet.id}"
                        ["pet", "pet.id"]
                          [[0], [1]]

    const [[0], [1]] = ["pet", "pet.id"]
    
    const [,petId] = "pet.id"
}) */