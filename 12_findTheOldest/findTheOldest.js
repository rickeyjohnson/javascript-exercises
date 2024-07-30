const findTheOldest = (people) => {
    let oldestAge = 0
    let currentYear = 2024
    let oldestPerson

    for (let person of people) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear
        }  

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
