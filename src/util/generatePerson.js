import firstNames from "./firstNames";
import lastNames from './lastNames'
import emailDomains from './emailDomains'

function generatePerson() {
    let firstNameObj = firstNames[Math.floor(Math.random() * firstNames.length)];
    let firstName = firstNameObj[0];
    let gender = firstNameObj[1];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    let emailDomain = emailDomains[Math.floor(Math.random() * emailDomains.length)];

    let emailPatternType = ["f.last", "flast", "lastf", "last.f", "admin"];

    let patternType = emailPatternType[Math.floor(Math.random() * emailPatternType.length)];

    let email;

    switch(patternType) {
        case "f.last":
            email = `${firstName[0]}.${lastName}`;
            break;
        case "flast":
            email = `${firstName[0]}${lastName}`;
            break;
        case "lastf":
            email = `${lastName}${firstName}`;
            break;
        case "last.f":
            email = `${lastName}.${firstName}`;
            break;
        case "info":
            email = "info";
            break;
        case "admin":
            email = "admin";
            break;
    };

    email += "@"
    email += emailDomain;

    return {
        name: `${firstName} ${lastName}`,
        email: email,
        gender: gender
    }
}

export default generatePerson;