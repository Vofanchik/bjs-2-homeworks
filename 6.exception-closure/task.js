function parseCount(strToParse){
    let targ = parseFloat(strToParse)
    if (isNaN(targ)){
        throw new Error("Невалидное значение")
    } else {return targ} 
}

function validateCount(strToParse){
    try {
        return parseCount(strToParse)
    } catch (error) {
        return error
    }
}