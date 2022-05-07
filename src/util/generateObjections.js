import objections from '../scenarioData/objections'
import probabilityWeightedRandomSelect from './probabilityWeightedRandomSelect'
let mutableObjections;

function generateObjections() {
    mutableObjections = objections.map(obj => ({...obj}));

    //get a random instance
    function chooseObjection() {
        //let randomObjection = mutableObjections[Math.floor(Math.random() * mutableObjections.length)];
        let randomObjection = probabilityWeightedRandomSelect(mutableObjections, "prevalance")
        mutableObjections = mutableObjections.filter(objection => objection.name != randomObjection.name)
        return `${randomObjection.name} (ex. "${randomObjection.quotes[Math.floor(Math.random() * randomObjection.quotes.length)]}")`
    }

    let numObjections = Math.pow(Math.ceil(Math.random() * 3),2)

    if(numObjections <= 1) {
        return [chooseObjection(), chooseObjection(), chooseObjection()]
    } else if(numObjections <= 4) {
        return [chooseObjection(), chooseObjection()]
    } else {
        return [chooseObjection()]
    }
}

export default generateObjections;