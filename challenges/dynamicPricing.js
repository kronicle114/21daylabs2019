'use strict'

const numberOfPeople1 = 15
const distanceTraveled1 = 10
const output1 = '$3.50'

const numberOfPeople2 = 35
const distanceTraveled2 = 5
const output2 = '$2.50'


const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    const baseTicketPrice = 1
    const rateChargedPerkm = 0.25
    const rateAddedToTotal = 0.25

    let subtotal = baseTicketPrice + (rateChargedPerkm * distanceTraveled)
    let total
    if(numberOfPeople >= 30) {
        total = parseFloat((subtotal + rateAddedToTotal)).toFixed(2)
    } else {
        total = parseFloat(subtotal).toFixed(2)
    }

    return `$${total}`
}

console.log(dynamicPricing(numberOfPeople1, distanceTraveled1))
console.log(dynamicPricing(numberOfPeople2, distanceTraveled2))