const scenarioData = {
    scenarios: [
        {
            name: 'Inbound Google Call',
            profiles: [
                {
                    name: 'The New Homeowner',
                    problems: [
                        "They are seeing a suprise friend in their home (a rodent) shortly after moving in",
                        "When prompted they remember that they have seen some spiders here and there",
                        "They have mosquitoes in their backyard and have since moving in. It's made it hard for them to enjoy their backyard.",
                        "They are seeing ants in the kitchen",
                        "They are not currently seeing anything but got a letter in the mail from us."
                    ],
                    possibleSentiments: [
                        {type: 'Busy and ambivalant', prevalance: 2},
                        {type: 'Very engaged with lots of questions', prevalance: 3},
                        {type: 'Indifferent, just wants it done', prevalance: 5},
                        {type: 'Happy', prevalance: 1}
                    ],
                    prevalance: 4
                },
                {
                    name: 'The Price Shopper',
                    problems: [
                        "They are seeing ants and want a one time spray",
                        "They have a company right now but are looking for something cheaper",
                        "They are wonderig how much pest control would be"
                    ],
                    possibleSentiments: [
                        {type: 'Rushed', prevalance: 4},
                        {type: 'Indifferent, just wants it done', prevalance: 5},
                        {type: 'Does not want to lead', prevalance: 2}
                    ],
                    prevalance: 2
                },
                {
                    name: 'The Overeager Owner',
                    problems: [
                        "They have a current company but he walked around with the guy and wasn't happy with the work",
                        "They want someone who will stay longer",
                        "He is wondering if we are the type of company that closes up holes and stuff like that",
                        "He is serious about getting coverage for everything: rodents, termites, pest"
                    ],
                    possibleSentiments: [
                        {type: 'Enthusiastic', prevalance: 3},
                        {type: 'Lots of questions', prevalance: 5},
                        {type: 'Suspicious', prevalance: 1}
                    ],
                    prevalance: 1
                },
                {
                    name: 'The Indecisive Husband',
                    problems: [
                        "They are seeing ants in the kitchen",
                        "Have been seeing some spiders and his wife asked him to call"
                    ],
                    possibleSentiments: [
                        {type: "Rushed", prevalance: 2},
                        {type: "Indecisive", prevalance: 4},
                        {type: "Information gathering", prevalance: 5}
                    ],
                    prevalance: 5
                }
            ]
        },
        {
            name: 'Outbound Prospecting',
            profiles: [
                {
                    name: 'Welcome Call',
                    problems: [
                        "They are not currently having an issue",
                        "They're not sure why they would need pest control at this time of year",
                        "They have heard neighbors talking about rodents and ants",
                        "They have seen some ants here and there"
                    ],
                    possibleSentiments: [
                        {type: "Rushed", prevalance: 5},
                        {type: "Annoyed", prevalance: 5},
                        {type: "Interested", prevalance: 2}
                    ],
                    prevalance: 3
                }
            ]
        }
    ],
    get scenarioList() {
        let arr = [];
        this.scenarios.forEach(scenario => {
            arr.push(scenario.name)
        });
        return arr;
    }
}


export default scenarioData;