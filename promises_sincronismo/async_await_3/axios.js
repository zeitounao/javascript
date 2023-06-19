import axios from 'axios'

/*
axios
    .get('https://api.github.com/users/zeitounao')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(erro => console.log("ta dando erro ",erro))
*/
/*
//outra maneira de fazer
async function fetchRepos() {
    const user = await axios.get('https://api.github.com/users/zeitounao')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
}
fetchRepos();
*/

//com tratamento de erros
async function fetchRepos() {
    try {
        const user = await axios.get('https://api.github.com/users/zeitounao')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    } catch (erro) {
        console.log("o erro é" + erro)
    }
}