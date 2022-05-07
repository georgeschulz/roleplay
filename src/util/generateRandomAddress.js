import addresses from "../scenarioData/addresses";

function generateAddress() {
    return addresses[Math.floor(Math.random() * addresses.length)];
}

export default generateAddress;