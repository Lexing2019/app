// Here is the part moves the hands of the clock

setInterval(function(){
    day = new Date();
    hour = day.getHours();
    minute = day.getMinutes();
    second = day.getSeconds();
    console.log('hour:', hour);
    console.log('minute:', minute);
    console.log('second:', second);

    hr = document.getElementById("hr");

    hr.style.transform = `rotate(${hour * 30 + minute/2}deg)`;

    min = document.getElementById("mn");

    min.style.transform = `rotate(${minute * 6}deg)`;

    sec = document.getElementById("sc");

    sec.style.transform = `rotate(${second * 6}deg)`;
}, 1000);







