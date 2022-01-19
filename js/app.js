// document.addEventListener("DOMContentLoaded", () => {

//     const daysEl = document.getElementById("days");
//     const hoursEl = document.getElementById("hours");
//     const minsEl = document.getElementById("mins");
//     const secondsEl = document.getElementById("seconds");

//     const newYears = "1 Jan 2021";

//     function countdown() {
//         const newYearsDate = new Date(newYears);
//         const currentDate = new Date();

//         const totalSeconds = (newYearsDate - currentDate) / 1000;

//         const days = Math.floor(totalSeconds / 3600 / 24);
//         const hours = Math.floor(totalSeconds / 3600) % 24;
//         const mins = Math.floor(totalSeconds / 60) % 60;
//         const seconds = Math.floor(totalSeconds) % 60;

//         daysEl.innerHTML = days;
//         hoursEl.innerHTML = formatTime(hours);
//         minsEl.innerHTML = formatTime(mins);
//         secondsEl.innerHTML = formatTime(seconds);
//     }

//     function formatTime(time) {
//         return time < 10 ? `0${time}` : time;
//     }

//     // initial call
//     countdown();

//     setInterval(countdown, 1000);

// });

document.addEventListener("DOMContentLoaded", () => {
    const countdown = () => {
        const countDate = new Date("Jan 1, 2023 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        
        
        // How does time works ?

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calcul 

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        
        // Updating our HTML :

        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;

        
    }
    countdown();

    
    // pour recharger la page chaque seconde :

    setInterval(countdown, 1000);
});