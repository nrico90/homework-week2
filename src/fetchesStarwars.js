
function lukeSky() {
    fetch("https://swapi.co/api/people/1") // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
      document.getElementById("get").innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })
}

lukeSky()

function darth() {
    fetch(`https://swapi.co/api/people/4`) // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
      document.getElementById("click").innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })
  
}

darth()

//${document.getElementById("submit").value}