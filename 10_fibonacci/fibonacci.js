const fibonacci = (num) => {
    let sequenceOfNums = [0, 1]

    if (typeof num != 'number') {
        num = parseInt(num)
    }

    if (num < 0) {
        return "OOPS"
    } else if (num < 1) {
        return 0
    } 

    for (let i = 2; i <= num; i++) {
        sequenceOfNums.push(sequenceOfNums[i - 2] + sequenceOfNums[i - 1])
    }

    return sequenceOfNums[sequenceOfNums.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
