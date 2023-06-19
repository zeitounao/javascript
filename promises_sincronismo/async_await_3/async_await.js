const promessa = new Promise( function( resolve, reject) {
    return resolve('ok')
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('rodar sempre')
    }
}
start()


promessa 
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log('sempre irei executar')
    })