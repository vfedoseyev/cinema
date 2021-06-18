const blockFilmsWrapper = document.getElementById('block05-films-wrapper');
blockFilmsWrapper.innerHTML = '';




function renderFilmBlock(posterUrl, filmName, id) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('film__card')

    const link = document.createElement('a');
    link.href = `/single/?id=${id}`

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('film__img')
    const img = document.createElement('img');
    img.src = posterUrl;
    img.alt = 'Постер к фильму';

    imgWrapper.append(img);

    const shadow = document.createElement('div');
    shadow.classList.add('block05__shadow')

    const descWrapper = document.createElement('div')
    descWrapper.classList.add('films__block')

    const title = document.createElement('h4')
    title.textContent = filmName;

    const desc = document.createElement('p')


    descWrapper.append(title, desc);
    link.append(imgWrapper, shadow, descWrapper,);
    wrapper.append(link);
    return [wrapper, desc];
}

const fetchBlockFilms = async () => {
    const result = await topFilmRequest();
    const data = await result.json();

    const requests = [];
    const filmBlocksMap = new Map()

    data.films.forEach(async (film) => {
        const [filmBlocks, desc] = renderFilmBlock(film.posterUrlPreview, film.nameRu, film.filmId);

        filmBlocksMap.set(film.filmId, filmBlocks)
        requests.push(new Promise(async (resolve) => {
            const detailResult = await filmDetailsRequest(film.filmId);
            const detailsData = await detailResult.json();

            const description = detailsData.data.description;


            if (!description) {
                filmBlocksMap.delete(film.filmId);
            } else {
                desc.textContent = description;
            }
            resolve();
        }))


    })
    await Promise.all(requests);
    // let i = 0;
    // for (const [id, element] of filmBlocksMap) {
    //     blockFilmsWrapper.append(element);
    //     i++;

    //     if (i >= 9) {
    //         break;
    //     }
    // }
    const elements = [...filmBlocksMap.values()].slice(0, 9)
    blockFilmsWrapper.append(...elements);
}
fetchBlockFilms();
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