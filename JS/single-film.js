const searchParams = new URLSearchParams(location.search);
const filmId = searchParams.get('id');
// нашли ID

const likes = document.getElementById('sf-likes');
const stars = document.querySelectorAll('.rt-star');


const fetchKinopoiskFilmData = async () => {
    const answer = await filmDetailsRequest(filmId);
    const {
        data: filmData
    } = await answer.json();
    // получили детализацию о фильмах по ID 

    const header = document.getElementById('sf-header');
    const description = document.getElementById('sf-desc');
    const posterImage = document.getElementById('sf-poster');
    const premiere = document.getElementById('sf-premiere');


    header.textContent = filmData.nameRu;
    description.textContent = filmData.description;
    posterImage.src = filmData.posterUrl;
    premiere.textContent = filmData.premiereRu;
    // записали в разметку данные из детализации по фильмам
};

const fethcFilmMeta = async () => {
    const answer = await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}`)
    const {
        body
    } = await answer.json();
    // запрос за др данными о лайках, просмотрах..

    const views = document.getElementById('sf-views');
    const ratingNumber = document.getElementById('sf-rating-number');

    views.textContent = `${body.views} Views`;
    likes.textContent = `${body.likes} Likes`;
    // в разметку вписываем полученные данные с сервера

    const rating = body.ratings.reduce((a, b) => parseInt(a) + parseInt(b), 0) / body.ratings.length;
    // суммируем все полученные оценки и делим на длину, чтобы получить среднее
    const intRating = Math.round(rating);
    // округляем полученную оценку

    if (isNaN(intRating)) {
        ratingNumber.textContent = "0.0"
        // если данных еще нет-прописываем 0,0
    } else {
        ratingNumber.textContent = rating.toFixed(1);
        // расчет полученных данных с сервера
    }
    // TODO применить другой метод number tofixed

    stars.forEach((star, i) => {
        if (i < intRating) {
            star.classList.add('star-selected')
        };
    })

}
// сравнение рейтинга и звездочек. Добавление класса звездочкам.

const likeIcon = document.getElementById("like-icon");
const FILM_KEY = `film-${filmId}`;
const liked = localStorage.getItem(FILM_KEY);
if (liked !== null) {
    likeIcon.classList.add('like-icon__liked');
}
// проверяем добавлялся ли ранее лайк через localStorage
likeIcon.addEventListener("click", () => {
    if (!likeIcon.classList.contains('like-icon__liked')) {
        localStorage.setItem(FILM_KEY, true)
        // проверяем если нету класса like-icon__liked, то по клику добавляем в localStorage ключ и значение true
        const likesCount = parseInt(likes.textContent, 10) + 1;
        likes.innerHTML = `${likesCount} Likes`;
        likeIcon.classList.add('like-icon__liked');

        fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
})
// отправили данные на сервер


$('.rating_stars').on('click', '.rt-star', async function () {

    await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating: +this.dataset.value
        })
    });
    fethcFilmMeta();
})
// отправляем рейтинг звездочек на сервер


fetchKinopoiskFilmData();
fethcFilmMeta();