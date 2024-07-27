const removeFromArray = (arr, ...items) => {

    let indexes = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (arr[i] === items[j]) {
                indexes.push(arr.indexOf(items[j]))
            }
        }
    }

    for (let index of indexes.reverse()) {
        arr.splice(index, 1)
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
