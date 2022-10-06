export const harvestPlants=(plants)=>{
    let seedObjectArray = []
        for (const plant of plants){
            if (plant.type !== "Corn") {
                for (let n=0; n < plant.output; n++) {
                    seedObjectArray.push(plant)
                } 
            } else if (plant.type === "Corn"){
                for (let n=0; n < plant.output*.5; n++) {
                    seedObjectArray.push(plant)
                } 
            }
        }    

    return seedObjectArray
}