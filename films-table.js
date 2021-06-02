const filmList = [{
    start: '10:00',
    title: 'Человек Паук',
    genre: [{
            name: 'фантастика'

        },
        {
            name: 'боевик'

        },
        {
            name: 'приключения'

        },
    ]
}, {
    start: '12:00',
    title: 'Собачья жизнь 2',
    genre: [{
            name: 'фентези'

        },
        {
            name: 'драма'

        },
        {
            name: 'комедия'

        },
    ]

}, {
    start: '14:00',
    title: 'История игрушек 4',
    genre: [{
            name: 'мультфильм'

        },
        {
            name: 'фентези'

        },
        {
            name: 'комедия'

        },
    ]

}, {
    start: '16:00',
    title: 'Люди в чёрном: Интэрнэшнл',
    genre: [{
            name: 'фантастика'

        },
        {
            name: 'боевик'

        },
        {
            name: 'комедия'

        },
    ]

}, {
    start: '01:00',
    title: 'XXX',
    adult: true,
    genre: [{
            name: 'фантастика'

        },
        {
            name: 'боевик'

        },
        {
            name: 'приключения'

        },
    ]
}];

const tableBody = document.getElementById('block03-table-body');
tableBody.innerHTML = '';


for (const film of filmList) {
    tableBody.innerHTML += `
<tr>
    <td class="fixed-size">
    <input type="checkbox" id="block03__checkbox1">
    <label for="block03__checkbox1">
        <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                fill="white" />
        </svg>
    </label>
    </td>
    <td>${film.start}</td>
    <td><a href="https://www.kinopoisk.ru/">${film.title}</a></td>
    <td>${film.genre.map(g=>g.name)}</td>
</tr>`;
}