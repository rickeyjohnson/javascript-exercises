const fibonacci = (num) => {
    let result = 0
    let sequenceOfNums = [0, 1]

    for (let i = 2; i <= num; i++) {
        sequenceOfNums.push(sequenceOfNums[i - 2] + sequenceOfNums[i - 1])
    }

    return sequenceOfNums[sequenceOfNums.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
