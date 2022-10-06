// import 

export const addPlant = (seedObject) => {
    let fieldPlants = []
    fieldPlants.push(seedObject)
    fieldPlants = fieldPlants.flatMap
    return fieldPlants
}

export const usePlants = () => {
    let fieldPlantsCopy = addPlant()

    return fieldPlantsCopy
}