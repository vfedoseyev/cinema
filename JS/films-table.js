const filmsData = [{
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

for (const film of filmsData) {
    const filmInstance = new Film(film);
    if (filmInstance.isNotForAdult()) {

        tableBody.innerHTML += filmInstance.renderFilmTableItem();
    }
}