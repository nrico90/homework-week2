let bigGroup = {
    "20 and younger": [],
    "21 - 30": [],
    "31 - 40": [],
    "41 - 50": [],
    "51 and older": []
}

function adult (person) {
    if (person.age > 18) return person
    else return false
}

function sortGroups(people, person) {
    
}

function groupAdultsByAgeRange(people) {
    if (!people) return ['']
}





    // function adults (people) {
    //     return 
    // }
    // function adults(people) {
    //     people.filter(function(people) {
    //         if ((people.age > 18) && (people.age <= 20)) {
    //             groups.push({
    //                 name: people.name,
    //                 age: people.age
    //             })
    //         }
    //     }
    // }



//const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange
module.exports = {groupAdultsByAgeRange}