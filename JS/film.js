function FilmProto(film) {
    this.data = film;
    this.start = `${toHour(getRandomToMAx(14) + 9)}:${toMinuts(getRandomToMAx(6))} `;
}
FilmProto.prototype.isNotForAdult = function () {
    return !this.data.adult;
}
FilmProto.prototype.getId = function () {
    return this.data.id || this.data.title.replaceAll(' ', '-');
}
FilmProto.prototype.getStart = function () {
    return this.start;
}
FilmProto.prototype.getTitle = function () {
    return this.data.title;
}
FilmProto.prototype.getGenre = function () {
    return this.data.genre
        .map(g => g.name)
        .join(', ');
}
FilmProto.prototype.renderFilmTableItem = function () {
    return `
    <tr>
    <td class="fixed-size">
        <input type="checkbox" id="${this.getId()}">
            <label for="${this.getId()}">
                <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                        fill="white" />
                </svg>
            </label>
        </td>
        <td>${this.getStart()}</td>
        <td><a href="https://www.kinopoisk.ru/">${this.getTitle()}</a></td>
        <td>${this.getGenre()}</td>
    </tr>`
}

class Film {
    constructor(film) {
        this.data = film;
        this.start = `${toHour(getRandomToMAx(14) + 9)}:${toMinuts(getRandomToMAx(6))} `;
    }
    getId() {
        return this.data.id || this.data.title.replaceAll(' ', '-');
    }
    getStart() {
        return this.start;
    }
    getTitle() {
        return this.data.title;
    }
    isNotForAdult() {
        return !this.data.adult;
    }
    getGenre() {
        return this.data.genre
            .map(g => g.name)
            .join(', ');
    }
    renderFilmTableItem() {
        return `
        <tr>
        <td class="fixed-size">
            <input type="checkbox" id="${this.getId()}">
                <label for="${this.getId()}">
                    <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                            fill="white" />
                    </svg>
                </label>
            </td>
            <td>${this.getStart()}</td>
            <td><a href="https://www.kinopoisk.ru/">${this.getTitle()}</a></td>
            <td>${this.getGenre()}</td>
        </tr>`
    }
}

