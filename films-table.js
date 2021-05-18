const films = [{
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

}, ];
const tableBody = document.getElementById('block03-table-body')
tableBody.innerHTML = `
    <tr>
                         <td class="fixed-size">
                            <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                                    fill="white" />
                   </svg>

                        </td>
                        <td>${films[0].start}</td>
                        <td>${films[0].title}</td>
                        <td>${films[0].genre.map(g=>g.name)}</td>
                    </tr>
`;
tableBody.innerHTML += `
    <tr>
                         <td class="fixed-size">
                            <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                                    fill="white" />
                   </svg>

                        </td>
                        <td>${films[1].start}</td>
                        <td>${films[1].title}</td>
                        <td>${films[1].genre.map(g=>g.name)}</td>
                    </tr>   
`;
tableBody.innerHTML += `
    <tr>
                         <td class="fixed-size">
                            <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                                    fill="white" />
                   </svg>

                        </td>
                        <td>${films[2].start}</td>
                        <td>${films[2].title}</td>
                        <td>${films[2].genre.map(g=>g.name)}</td>
                    </tr>   
`;
tableBody.innerHTML += `
    <tr>
                         <td class="fixed-size">
                            <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                                    fill="white" />
                   </svg>

                        </td>
                        <td>${films[3].start}</td>
                        <td>${films[3].title}</td>
                        <td>${films[3].genre.map(g=>g.name)}</td>
                    </tr>   
`;

for (let index = 0; index < films; index++) {
    `
    <tr>
                         <td class="fixed-size">
                            <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                                    fill="white" />
                   </svg>

                        </td>
                        <td>${films[index].start}</td>
                        <td>${films[index].title}</td>
                        <td>${films[index].genre.map(g=>g.name)}</td>
                    </tr>   
`;

}