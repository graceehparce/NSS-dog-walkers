import { getWalkers } from "./database.js"

import { getCities } from "./database.js"

const walkers = getWalkers()

const cities = getCities()



export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const each of cities) {
        citiesHTML += `<li>${each.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

