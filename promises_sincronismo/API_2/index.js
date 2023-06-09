const { response, json } = require("express");

fetch('http://api.github.com/users/zeitounao')
.then(response => {
    response.json()
    .then( data => console.log(dat))
    .catch( erro => 
        console.log("deu erro dentro no " , erro))
    }
)

