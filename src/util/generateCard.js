function generateCard() {
    function randDig() {
        return Math.floor(Math.random() * 10).toString();
    }

    //create a card number
    function randomSet() {
        let set = ""
        for(let i = 0; i < 4; i++) {
            set += Math.floor(Math.random() * 10).toString()
        }
        return set;
    }

    let cardNum = randomSet() + "-" + randomSet() + "-" + randomSet() + "-" + randomSet();
    
    //create an expiration date
    let expYear = 2022 + Math.floor(Math.random() * 5);
    let expMonth = Math.ceil(Math.random() * 12);
    let expDate = `${expMonth}/${expYear}`;

    //create a security code
    let security = randDig() + randDig() + randDig();

    return {
        number: cardNum,
        security: security,
        exp: expDate
    }
}

export default generateCard;