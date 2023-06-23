const minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds'),
      miliseconds = document.querySelector('.miliseconds'),
      btnStart = document.querySelector('.js-btn-start'),
      btnStop  = document.querySelector('.js-btn-stop'),
      btnReset= document.querySelector('.js-btn-reset');


      let interval ;
      let countMiliseconds = 0;
      let countSeconds = 0;
      let countMinutes = 0;

const startTimer = function () {
    
    countMiliseconds++;
    miliseconds.innerHTML = countMiliseconds;

    if (countMiliseconds >= 100){
        countSeconds++;
        seconds.innerHTML = countSeconds;
        countMiliseconds = 0;
        if (countSeconds < 10){
            seconds.innerHTML ='0' + countSeconds;
        }
    }

    if (countSeconds >= 59){
        countMinutes++;
        minutes.innerHTML = countMinutes;
        countSeconds = 0;
        if (countMinutes < 10){
            minutes.innerHTML ='0' + countMinutes;
        }
    }
}


btnStart.addEventListener('click' , () => {
    clearTimeout(interval);
    interval = setInterval(startTimer, 10);
});


btnStop.addEventListener('click' , () => {
    clearInterval(interval);
});

btnReset.addEventListener('click' , () => {
    clearInterval(interval);
    countMiliseconds = 0;
    countSeconds = 0;
    countMinutes = 0;
    miliseconds.innerHTML =  '00';
    seconds.innerHTML =  '00';
    minutes.innerHTML =  '00';
});

document.body.addEventListener('keydown', (e) =>{
    console.log(e.key);
    if (e.key === 'Enter'){
        interval = setInterval(startTimer, 10);
    } else if (e.key === ' '){
        clearInterval(interval);
    } else if (e.key === 'Escape'){
        clearInterval(interval);
        countMiliseconds = 0;
        countSeconds = 0;
        countMinutes = 0;
        miliseconds.innerHTML =  '00';
        seconds.innerHTML =  '00';
        minutes.innerHTML =  '00';
    }
});

