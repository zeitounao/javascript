
fetch('http://api.github.com/users/zeitounao')
.then(response => {
    response.json()
    .then( data => console.log(data))
    .catch( erro => 
        console.log("deu erro dentro no " , erro))
    }
)

