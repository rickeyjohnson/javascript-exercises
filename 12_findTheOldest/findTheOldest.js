const findTheOldest = (people) => {
    let oldestAge = 0
    let oldestPerson

    for (let person of people) {
        let age = person.yearOfDeath - person.yearOfBirth
        if (age > oldestAge) {
            oldestAge = age
            oldestPerson = person
        }
    }

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
