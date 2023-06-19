/*
async function start1() {
    const response = await fetch('https://api.github.com/users/zeitounao')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}
start1()
*/
/*
//outra maneira, try-catch
async function start2() {
    try {
        const response = await fetch('https://api.github.com/users/zeitounao')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos)
    } catch (erro) {
        console.log(erro)
    }
}
start2()
*/
/*
async function start3() {
    const response = await fetch('https://api.github.com/users/zeitounao')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}
start3().catch(erro => console.log(erro))
*/

async function start4() {
    const user = await fetch("https://api.github.com/users/zeitounao").then( r => r.json())
    const repos = await fetch(user.repos_url).then( r => r.json())
    console.log(repos)
}
start4()