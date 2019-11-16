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
            // i had a lof of struggles with checking if the array has the existing key "!", i was stuck for hour on unidentified "age"
            // also it took me a while to see that there was spaces in "21-30" etc. it kept giving me error with the "push"
            .reduce(function (bigGroup, person) {
                if (person.age <= 20) {
                    if (!bigGroup["20 and younger"]) bigGroup["20 and younger"] = []
                    bigGroup["20 and younger"].push(person)
                }
                else if ((person.age > 20) && (person.age < 31)) {
                    if (!bigGroup["21-30"]) bigGroup["21-30"] = []
                    bigGroup["21-30"].push(person)
                }
                else if ((person.age > 30) && (person.age < 41)) {
                    if (!bigGroup["31-40"]) bigGroup["31-40"] = []
                    bigGroup["31-40"].push(person)
                }
                else if ((person.age > 40) && (person.age < 51)) {
                    if (!bigGroup["41-50"]) bigGroup["41-50"] = []
                    bigGroup["41-50"].push(person)
                }
                else if (person.age > 50) {
                    if (!bigGroup["51 and older"]) bigGroup["51 and older"] = []
                    bigGroup["51 and older"].push(person)
                }
                return bigGroup
              }
            , {})
    }
}

module.exports = { groupAdultsByAgeRange }