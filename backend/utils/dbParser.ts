function parseData(data: any){ 
    return JSON.parse(JSON.stringify(data))
}


module.exports = {
    parseData,
}
