'use strict'
//добавляем переменные на тэги
const container = document.querySelector('.counter_container');
const inputBd = document.querySelector('.birthday');
const birthdayBtn = document.getElementById('birthdayBtn');
const checkInput = document.getElementById('alarm');

//проверка если при клике на кнопку дата не введена
birthdayBtn.addEventListener('click', function(){
    inputBd.value === '' ? birthdayBtn.classList.add('birthdayBtn') & attention() :  birthdayBefore();
})

//функция кнопки по нажатию если дата введена
let birthdayBefore = () => {
    const today = Date.now();
    const bDay = Date.parse(inputBd.value);
    const waiting = Math.floor((bDay - today) / 1000 /60 / 60 / 24);
    const lastNumber = waiting % 10;

//склонение "дня"   
    const day = (lastNumber === 1)   ? "день":
                (lastNumber === 2 || 
                 lastNumber === 3 || 
                 lastNumber === 4)   ? "дня" :
                (lastNumber === 5 || 
                 lastNumber === 6 || 
                 lastNumber === 7 || 
                 lastNumber === 8 || 
                 lastNumber === 9 ||
                 lastNumber === 0)   ? "дней":
                                        "" ;

//вывод результата 
    const birth = document.createElement('div');
    birth.classList.add('birth');
    birth.innerHTML = `До дня рождения ${waiting} ${day}`;
    container.append(birth);
}

//делаем видимой кнопку и убираем подсказку, если вносятся изменения в дату
    function change() {
        if (checkInput.classList.contains('attention')){
            checkInput.classList.remove('attention');
            checkInput.classList.add('attentionInv');
            birthdayBtn.classList.remove('birthdayBtn')
        }
    }

//делаем подсказку видимой
const attention = () =>{
    checkInput.innerText = "Введите дату вашего дня рождения";
    checkInput.classList.add('attention');
};


