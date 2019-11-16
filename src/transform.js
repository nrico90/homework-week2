let bigGroup = {
    "20 and younger": [],
    "21 - 30": [],
    "31 - 40": [],
    "41 - 50": [],
    "51 and older": []
}

function sortGroups(person) {
    if (person.age <= 20) {
        bigGroup["20 and yonger"].push(person)
    }
    else if ((person.age < 31) && (person.age > 20)) {
        bigGroup["21 - 30"].push(person)
    }
    else if ((person.age < 41) && (person.age > 30)) {
        bigGroup["31 - 40"].push(person)
    }
    else if ((person.age < 51) && (person.age > 40)) {
        bigGroup["41 - 50"].push(person)
    }
    else if (person.age > 50) {
        bigGroup["51 and older"].push(person)
    }
    // if (bigGroup["20 and yonger"] === 0) delete bigGroup["20 and yonger"]
    // if (bigGroup["21 - 30"] === 0) delete bigGroup["21 - 30"]
    // if (bigGroup["31 - 40"] === 0) delete bigGroup["31 - 40"]
    // if (bigGroup["41 - 50"] === 0) delete bigGroup["41 - 50"]
    // if (bigGroup["51 and older"] === 0) delete bigGroup["51 and older"]

    return bigGroup
  }

function groupAdultsByAgeRange(people) {
    if (people.length === 0) {
      return {}  
    }
    else {
        return people
            .filter(function (person) {
                    if (person.age >= 18) return person
                    else return false
              })
            .reduce(sortGroups, {})
    }
}


//const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange
module.exports = {groupAdultsByAgeRange}