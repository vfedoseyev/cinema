function getRandomToMAx(max) {
    return (Math.ceil(Math.random() * (max + 1)) - 1);
}
function toHour(num) {
    return `${num}`.padStart(2, '0')
}
function toMinuts(num) {
    return String(num).padEnd(2, '0')
}

const kinopoiskapiunofficialRequest = (url) => {
    return fetch(url, {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '88461c41-2f0c-44d9-9484-4604e4779f76'
        },
        cors: 'no-cors'
    });
}

const topFilmRequest = () => {
    return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1')
}
const filmDetailsRequest = (id) => {
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`)
}