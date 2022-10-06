export const Catalog= (cropsHarvested) =>{
    let catalogHTML = ""
    catalogHTML = `<section class="plant">`
    for (const crop of cropsHarvested) {
        catalogHTML += `<div class="each_plant">${crop.type}</div>`
    }
    catalogHTML +=`</section>`
    return catalogHTML
} 