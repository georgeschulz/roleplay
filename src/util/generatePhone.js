function generatePhone() {
    function randDig() {
        return Math.floor(Math.random() * 10).toString();
    }
    let phone = "(" + randDig() + randDig() + randDig() + ") " + randDig() + randDig() + randDig() + "-" + randDig() + randDig() + randDig() + randDig();

    let phoneTypeIndex = Math.random();
    let phoneType;

    if(phoneTypeIndex < 0.8) { 
        phoneType = "Mobile"
    } else if (phoneTypeIndex < 0.95) {
        phoneType = "Landline"
    } else {
        phoneType = "VOIP"
    }

    return {
        number: phone,
        type: phoneType
    }

}

export default generatePhone;