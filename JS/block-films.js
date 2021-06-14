const blockFilmsWrapper = document.getElementById('block05-films-wrapper');
blockFilmsWrapper.innerHTML = '';


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
const filmDeatilsRequest = (id) => {
    return kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`)
}

const fetchBlockFilms = async () => {
    const result = await topFilmRequest();
    const data = await result.json();
    data.films.forEach(async (film) => {
        const id = `blocks-films-desc-${film.filmId}`;
        const wrapper = document.createElement('div');
        wrapper.classList.add('film__card')
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('film__img')
        const img = document.createElement('img');
        img.src = film.posterUrlPreview;
        img.alt = 'Постер к фильму';
        imgWrapper.append(img);
        wrapper.append(imgWrapper);
        blockFilmsWrapper.append(wrapper);
        //     blockFilmsWrapper.innerHTML += `
        //     <div class="film__card" id="">
        //         <img class="film__img" src="${film.posterUrlPreview}">
        //         <div class="films__block">
        //             <h4>${film.nameRu}</h4>
        //             <p id ="${id}">...loading
        //             </p>
        //         </div>
        //     </div>
        // `
    })
}
fetchBlockFilms();

    // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
    //     headers: {
    //         ...apiHeaders
    //     },
    //     cors: 'no-cors'
    // })
    //     .then(data => data.json())
    //     .then(data => {
    //         data.films.forEach((film) => {
    //             const id = `blocks-films-desc-${film.filmId}`
    //             blockFilmsWrapper.innerHTML += `
    //         <div class="film__card" id="">
    //             <img src="${film.posterUrlPreview}">
    //             <div class="films__block">
    //                 <h4>${film.nameRu}</h4>
    //                 <p id ="${id}">...loading
    //                 </p>
    //             </div>
    //         </div>
    //     `

    //             fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`, {
    //                 headers: {
    //                     ...apiHeaders
    //                 },
    //                 cors: 'no-cors'
    //             })
    //                 .then(data => data.json())
    //                 .then(({ data: { description } }) => {
    //                     const desc = document.getElementById(id);
    //                     desc.innerText = description;
    //                     if (!description) {
    //                         const root = desc.parentNode.parentNode;
    //                         blockFilmsWrapper.removeChild(root);
    //                     }
    //                 })
    //         })
    //     })