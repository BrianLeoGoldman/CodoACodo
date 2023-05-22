

export function reduceElementAmount(array, item) {
    let newArray = array
    console.log(newArray)
    newArray.map((elem) => {
        if (elem.description === item.description) {
            if(elem.stock > 0) {
                elem.stock--
            }
        } 
    })
    console.log(newArray)
    return removeItemsWithNoStock(newArray)
}

function removeItemsWithNoStock(array) {
    let newArray = array.filter((elem) => elem.stock > 0)
    return newArray
}