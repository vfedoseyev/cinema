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
//# sourceMappingURL=utils.js.map