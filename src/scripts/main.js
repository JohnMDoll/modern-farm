console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import {Catalog} from "./catalog.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)
let seedsPlanted = plantSeeds(yearlyPlan)
console.log(seedsPlanted)
let harvest = harvestPlants(seedsPlanted)
console.log(harvest)
let forSale = Catalog(harvest)
console.log(forSale)

const parentHTMLElement = document.querySelector(`main`)


parentHTMLElement.innerHTML = Catalog(harvest)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
// const asparagusSeed = createAsparagus()
// const cornSeed = createCorn()
// const soybeanSeed = createSoybean()
// const sunflowerSeed = createSunflower()
// const potatoSeed = createPotato()
// const wheatSeed = createWheat()
// console.log(asparagusSeed)
// console.log(cornSeed)
// console.log(soybeanSeed)
// console.log(sunflowerSeed)
// console.log(potatoSeed)
// console.log(wheatSeed)
// let corn = [{type: "Corn", height: 180, output: 6},{type: "Corn", height: 180, output: 6}]

// console.log(addPlant(corn))
// console.log(usePlants(addPlant()))
