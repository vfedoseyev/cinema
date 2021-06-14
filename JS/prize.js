const openBtn = document.getElementById("btn-prize-open");
const popup = document.querySelector("#prize-popup");
const closeBtn = document.querySelector('#prize-popup__close');
const nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;
const selectPrize = document.getElementById('chooze-prize')
const form = document.getElementById('prize-form');

function popupToggle() {
    popup.classList.toggle('hidden');
}
const ERROR_CLASS_NAME = 'st-input1_error';
const FOCUSED_CLASS_NAME = 'st-input1_focused';
const SELCT_SELECTED = 'input-select-selected';

function initializeField(field) {
    const input = field.getElementsByTagName('input')[0];
    const fieldError = field.querySelector(".st-input1__error-msg");

    reset();

    function cleanError() {
        field.classList.remove(ERROR_CLASS_NAME);
        fieldError.innerText = '';
    }

    input.addEventListener('focus', function () {
        field.classList.add(FOCUSED_CLASS_NAME);
    })
    input.addEventListener('blur', () => {
        if (!input.value) {
            field.classList.remove(FOCUSED_CLASS_NAME);
        }
    })
    input.addEventListener('input', () => {
        cleanError();
    })
    function reset() {
        input.value = '';
        field.classList.remove(FOCUSED_CLASS_NAME);
        cleanError();
    }
    return {
        addError(errorText) {
            field.classList.add(ERROR_CLASS_NAME);
            fieldError.innerText = errorText;
        },
        getValue() {
            return input.value
        },
        focus() {
            input.focus()
        },
        reset: reset
    };
};

const nameFieldUtils = initializeField(nameField);
const emailFieldUtils = initializeField(emailField);

openBtn.addEventListener('click', () => {
    popupToggle();
    nameFieldUtils.focus();
});
selectPrize.addEventListener('change', () => {
    selectPrize.classList.add('input-select-selected')
});
closeBtn.onclick = popupToggle;

function handleSubmit(event) {
    event.preventDefault();
    const nameValue = nameFieldUtils.getValue();
    const emailValue = emailFieldUtils.getValue();

    if (!nameValue) {
        nameFieldUtils.addError('Укажите имя');
        return;

    }
    if (!emailValue) {
        emailFieldUtils.addError('Укажите почту');
        return;

    }
    if (!/^[\w-]{2,16}@[\w]{3,16}\.[a-z]{2,3}$/i.test(emailValue)) {
        emailFieldUtils.addError('Укажите корректный email');
        return;
    }
    if (selectPrize.value === 'none') {
        selectPrize.classList.add(ERROR_CLASS_NAME);
        return;
    }
    const data = {
        name: nameValue,
        email: emailValue,
        prize: selectPrize.value
    };

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();

    fetch(url.toString())
        .then(data => data.json())
        .then((data) => {
            popUpToggle();
            nameFieldUtiles.reset();
            emailFieldUtiles.reset();
        });
}
form.addEventListener('submit', handleSubmit)