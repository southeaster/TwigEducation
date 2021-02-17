
function groupArrayElements(inputArray, groupSize) {
    const returnValue = [];
    if(Array.isArray(inputArray) && groupSize){
        const numberWholeGroups = Math.floor(inputArray.length / groupSize);
        for(let i=0;i<numberWholeGroups;i++){
            returnValue.push(inputArray.slice(i * groupSize, i * groupSize + groupSize));
        }
        if (numberWholeGroups * groupSize !== inputArray.length){
            returnValue.push(inputArray.slice(numberWholeGroups * groupSize));
        }
    }
    return returnValue;
}

module.exports = groupArrayElements 