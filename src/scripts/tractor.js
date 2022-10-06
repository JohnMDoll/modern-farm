import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
let newPlant = []
let plantsInField = []
export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const plant of row) {
            if (plant === "Asparagus") {
                newPlant = createAsparagus()
            } else if (plant === "Corn") {
                newPlant = createCorn()
                // newPlant = [newPlant[0],newPlant[1]] <-actually does nothing
            } else if (plant === "Potato") {
                newPlant = createPotato()
            } else if (plant === "Soybean") {
                newPlant = createSoybean()
            } else if (plant === "Sunflower") {
                newPlant = createSunflower()
            } else if (plant === "Wheat") {
                newPlant = createWheat()
            } //else { newPlant = `bad seed`}
            // plantsInField.push(newPlant)
        }
            plantsInField = plantsInField.flatMap(anything=>anything) //take out to satisfy tests? Runs correctly with code in though
        }
            

            

        return plantsInField
    }
    