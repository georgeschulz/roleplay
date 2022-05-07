import probabilityWeightedRandomSelect from "./probabilityWeightedRandomSelect";
import random from './random';
import scenarioData from "../scenarioData/scenarioData";

function generateProfile(scenarioType) {
    let scenarios = scenarioData.scenarios;
    
    //pull out the specific scenario the user has selected, passed in via arguement
    let scenario;
    for(let i=0; i < scenarios.length; i++) {
        if(scenarios[i]["name"] === scenarioType) {
            scenario = scenarios[i];
            break;
        }
    }
    

    let profile = probabilityWeightedRandomSelect(scenario.profiles, "prevalance");
    let problem = random(profile.problems);
    let sentiment = probabilityWeightedRandomSelect(profile.possibleSentiments, "prevalance")["type"];

    return {
        sentiment: sentiment,
        profile: profile.name,
        problem: problem
    }

    
};

export default generateProfile;

generateProfile("Inbound Google Call")