/**
 * 
 * @param {array} arr accepts an array of possibilties
 * returns a random element
 */

function random(arr) {
    let len = arr.length;
    let rand = Math.random();

    return arr[Math.floor(rand * len)]
}

export default random;