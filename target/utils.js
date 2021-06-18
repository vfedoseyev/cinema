"use strict";

function getRandomToMAx(max) {
  return Math.ceil(Math.random() * (max + 1)) - 1;
}

function toHour(num) {
  return "".concat(num).padStart(2, '0');
}

function toMinuts(num) {
  return String(num).padEnd(2, '0');
}

var kinopoiskapiunofficialRequest = function kinopoiskapiunofficialRequest(url) {
  return fetch(url, {
    headers: {
      'accept': 'application/json',
      'X-API-KEY': '88461c41-2f0c-44d9-9484-4604e4779f76'
    },
    cors: 'no-cors'
  });
};

var topFilmRequest = function topFilmRequest() {
  return kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1');
};

var filmDetailsRequest = function filmDetailsRequest(id) {
  return kinopoiskapiunofficialRequest("https://kinopoiskapiunofficial.tech/api/v2.1/films/".concat(id));
};
//# sourceMappingURL=utils.js.map