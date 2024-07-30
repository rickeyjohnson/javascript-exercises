function isLetter (symbol) {
    return symbol.toLowerCase() != symbol.toUpperCase()
}

function strToArr(str) {
    return str.toLowerCase()
              .replace(" ", "")
              .split('')
              .filter((letter) => {
                return isLetter(letter)
              })
}

const palindromes = function (str) {
    let word = strToArr(str)

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
