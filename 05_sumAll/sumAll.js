const sumAll = function(num1, num2) {
    let sum = 0
    let start
    let end
    let num1Type = typeof num1
    let num2Type = typeof num2

    if (num1Type !== 'number' || num2Type !== 'number') {
        return 'ERROR'
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    }

    if (num1 < 1 || num2 < 1) {
        return 'ERROR'
    }

    if (num1 < num2) {
        start = num1
        end = num2
    } else {
        start = num2
        end = num1
    }

    for (let i = start; i <= end; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
