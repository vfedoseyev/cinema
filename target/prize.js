"use strict";

var openBtn = document.getElementById("btn-prize-open");
var popup = document.querySelector("#prize-popup");
var closeBtn = document.querySelector('#prize-popup__close');
var nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;
var selectPrize = document.getElementById('chooze-prize');
var form = document.getElementById('#prize-form');

function popupToggle() {
  popup.classList.toggle('hidden');
}

var ERROR_CLASS_NAME = 'st-input1_error';
var FOCUSED_CLASS_NAME = 'st-input1_focused';
var SELCT_SELECTED = 'input-select-selected';

function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  var fieldError = field.querySelector(".st-input1__error-msg");
  input.value = '';
  field.classList.remove(FOCUSED_CLASS_NAME);
  clearError();

  function clearError() {
    field.classList.remove(ERROR_CLASS_NAME);
    fieldError.innerText = '';
  }

  input.addEventListener('focus', function () {
    field.classList.add(FOCUSED_CLASS_NAME);
  });
  input.addEventListener('blur', function () {
    if (!input.value) {
      field.classList.remove(FOCUSED_CLASS_NAME);
    }
  });
  input.addEventListener('input', function () {
    clearError();
  });
  return {
    addError: function addError(errorText) {
      field.classList.add(ERROR_CLASS_NAME);
      fieldError.innerText = errorText;
    },
    getValue: function getValue() {
      return input.value;
    },
    focus: function focus() {
      input.focus();
    }
  };
}

var nameFieldUtils = initializeField(nameField);
var emailFieldUtils = initializeField(emailField);
openBtn.addEventListener('click', function () {
  popupToggle();
  nameFieldUtils.focus();
});
selectPrize.addEventListener('change', function () {
  selectPrize.classList.add('input-select-selected');
});
closeBtn.onclick = popupToggle;

function handleSubmit(event) {
  event.preventDefault();
  var nameValue = nameFieldUtils.getValue();
  var emailValue = emailFieldUtils.getValue();

  if (!nameValue) {
    nameFieldUtils.addError('Укажите имя');
    return;
  }

  if (!emailValue) {
    emailFieldUtils.addError('Укажите почту');
    return;
  }

  if (selectPrize.value === 'none') {
    selectPrize.classList.add(ERROR_CLASS_NAME);
    return;
  }

  var data = {
    name: nameValue,
    email: emailValue,
    prize: selectPrize.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
}

form.addEventListener('submit', handleSubmit);