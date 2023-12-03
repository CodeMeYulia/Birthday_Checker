const container = document.querySelector('.counter_container');
const inputBd = document.querySelector('.birthday');

let birthdayBefore = () => {
    let today = Date.now();
    let bDay = Date.parse(inputBd.value);
    const waiting = Math.floor((bDay - today) / 1000 /60 / 60 / 24);
    // console.log(waiting);

    const lastNumber = waiting % 10;
    console.log(lastNumber);

    const day = (lastNumber === 1) ? "день":
    (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) ? "дня" :
         (lastNumber === 5 || lastNumber === 6 || lastNumber === 7 || lastNumber === 8  || lastNumber === 0) ? "дней":
         "" ;

    const birth = document.createElement('div');
    birth.classList.add('birth');
    birth.innerHTML = `До дня рождения осталось ${waiting} ${day}`;
    container.append(birth);

}


