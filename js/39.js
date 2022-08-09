
function getMaxLetter(str) {

    const map = new Map();

    str = str.replace(/[^ёа-я]/ig, '').toLowerCase();

    // let max = 0, result;

    for(let letter of str) {

        if(map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        } else {
            map.set(letter, 1);
        }

        // max = Math.max(max, map.get(letter));
        // max === map.get(letter) && (result = letter)
    }

    const max = Math.max(...map.values());

    for(const [key, value] of map) {
        if(value === max) return key;
    }

    // return result;
}

console.log(getMaxLetter(str))

