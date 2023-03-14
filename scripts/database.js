/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    walkers: [{ id: 1, name: "Alphonse Meron", email: "ameron0@mashable.com" },
    { id: 2, name: "Damara Pentecust", email: "dpentecust1@apache.org" },
    { id: 3, name: "Anna Bowton", email: "abowton2@wisc.edu" },
    { id: 4, name: "Hunfredo Drynan", email: "hdrynan3@bizjournals.com" },
    { id: 5, name: "Elmira Bick", email: "ebick4@biblegateway.com" },
    { id: 6, name: "Bernie Dreger", email: "bdreger5@zimbio.com" },
    { id: 7, name: "Rolando Gault", email: "rgault6@google.com" },
    { id: 8, name: "Tiffanie Tubby", email: "ttubby7@intel.com" },
    { id: 9, name: "Tomlin Cutill", email: "tcutill8@marketwatch.com" },
    { id: 10, name: "Arv Biddle", email: "abiddle9@cafepress.com" }
    ],
    pets: [
        { id: 1, name: "Dianemarie Hartness", walkerId: 3 },
        { id: 2, name: "Christoph Fosdyke", walkerId: 10 },
        { id: 3, name: "Rocket", walkerId: 7 },
        { id: 4, name: "Ebony", walkerId: 3 },
        { id: 5, name: "Scotty", walkerId: 8 },
        { id: 6, name: "Mac", walkerId: 2 },
        { id: 7, name: "Oreo", walkerId: 5 },
        { id: 8, name: "Sassy", walkerId: 1 },
        { id: 9, name: "Salem", walkerId: 9 },
        { id: 10, name: "Panda", walkerId: 7 }
    ],
    cities: [
        { id: 1, name: "Chicago" },
        { id: 1, name: "White Plains" },
        { id: 1, name: "Sarasota" },
        { id: 1, name: "San Diego" },
        { id: 1, name: "Boise" },
        { id: 1, name: "Denver" },
        { id: 1, name: "Tucson" },
        { id: 1, name: "Phoenix" },
        { id: 1, name: "Minneapolis" },
        { id: 1, name: "Pittsburgh" },

    ]
}

export const getWalkers = () => {
    return database.walkers.map(walker => ({ ...walker }))
}

export const getPets = () => {
    return database.pets.map(pet => ({ ...pet }))
}

