'use strict'
//добавляем переменные на тэги
const container = document.querySelector('.counter_container');
const inputBd = document.querySelector('.birthday');
const birthdayBtn = document.getElementById('birthdayBtn');
const checkInput = document.getElementById('alarm');

//проверка если при клике на кнопку дата не введена
birthdayBtn.addEventListener('click', function () {
    inputBd.value === '' ? birthdayBtn.classList.add('birthdayBtn') & attention() : birthdayBefore();
})

//функция кнопки по нажатию если дата введена
let birthdayBefore = () => {
    const today = Date.now();
    const bDay = Date.parse(inputBd.value);
    const waiting = Math.ceil((bDay - today) / 1000 / 60 / 60 / 24);
    const lastNumber = waiting % 10;

    //склонение "дня"   
    const day = (lastNumber === 1) && (waiting !== 11) && (waiting !== 111) && (waiting !== 211) && (waiting !== 311) ? "день" :
        (lastNumber === 2 && (waiting !== 12) && (waiting !== 112) && (waiting !== 212) && (waiting !== 312) ||
            lastNumber === 3 && (waiting !== 13) && (waiting !== 113) && (waiting !== 213) && (waiting !== 313) ||
            lastNumber === 4 && (waiting !== 14) && (waiting !== 114) && (waiting !== 214) && (waiting !== 314)) ? "дня" :
            (lastNumber === 5 ||
                lastNumber === 6 ||
                lastNumber === 7 ||
                lastNumber === 8 ||
                lastNumber === 9 ||
                lastNumber === 0) || (waiting === 11) || (waiting !== 111) || (waiting !== 211) || (waiting !== 311) ? "дней" :
                "";

    //вывод результата 
    const birth = document.createElement('div');
    birth.classList.add('birth');
    birth.innerHTML = `До дня рождения ${waiting} ${day}
    <img id = "gif" src = "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_370,h_300/https://otkritkit.ru/wp-content/uploads/the-coolest-gifs-happy-birthday-a3.gif" alt = "happy birthday">`;
    container.append(birth);
    birthdayBtn.classList.add('birthdayBtn')

    setTimeout(function () {
        document.getElementById('gif').style.display = 'none';
        birthdayBtn.classList.remove('birthdayBtn');
        container.removeChild(birth);
        inputBd.value = '';
    }, 3000);
}

//делаем видимой кнопку и убираем подсказку, если вносятся изменения в дату
function change() {
    if (checkInput.classList.contains('attention')) {
        checkInput.classList.remove('attention');
        checkInput.classList.add('attentionInv');
        birthdayBtn.classList.remove('birthdayBtn')
    }
}

//делаем подсказку видимой
const attention = () => {
    checkInput.innerText = "Введите дату вашего дня рождения";
    checkInput.classList.add('attention');
};


