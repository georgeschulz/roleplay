/**
 * options - an arrray of objects to be randomly selected from
 * propName - a name of a property within the objects that fill the options array. It is used to indicate how heavily it should be weighted on a 1-5 scale indicating 1-5
 * returns - a element based on weighting and a tuneable exponent
 */

function probabilityWeightedRandomSelect(options, propName) {
    //tuning parameters
    let m = 1; //coefficient of highest power
    let pow = 1.25; //power to be raised to

    //random number 1-5
    let x = Math.random();
    let y = 1 - Math.floor(((m * Math.pow(x, pow))*100))/100;

    //calculate total
    let total = Object.keys(options).reduce((prev, key) => {
        return prev + options[key][propName];
    }, 0)

    y *= total;

    //create a nested array with the object at pos 0, and an accumulated weight

    let cumulativeWeight = []
    let runningTotal = 0;

    options.forEach((option, i) => {
        runningTotal += option[propName]
        cumulativeWeight.push([
            option,
            runningTotal
        ])
    });

    //y = Math.ceil(Math.random() * total);
    let output;

    for(let i = 0; i < cumulativeWeight.length; i++) {
        if(cumulativeWeight[i][1] >= y) {
            output = cumulativeWeight[i][0]
            break;
        }
    }
    return output;
}

export default probabilityWeightedRandomSelect;