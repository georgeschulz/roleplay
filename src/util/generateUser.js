import generatePerson from '../util/generatePerson'
import generatePhone from "../util/generatePhone";
import generateAddress from "../util/generateRandomAddress";
import generateCard from "../util/generateCard";
import generateObjections from "../util/generateObjections";
import generateProfile from '../util/generateProfile'

function generateUser(profile) {
    return {
        person: generatePerson(),
        phone: generatePhone(),
        address: generateAddress(),
        card: generateCard(),
        scenario: generateProfile(profile),
        objections: generateObjections()
    }
}

export default generateUser;