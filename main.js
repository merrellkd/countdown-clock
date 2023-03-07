const targetTime = new Date("2023-04-08T19:35:00Z");

var images = [];
for (var i = 0; i < 10; i++) {
    images.push('number-' + i + '.png');
}   

setInterval(() => {

    // calculate the time remaining in the countdown
    const now = new Date();
    const difference = targetTime - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    const tenthsOfSeconds = Math.floor((difference / 100) % 10);


    console.log('xxx',tenthsOfSeconds)
    // update the countdown clock
    updateClock(days, hours, minutes, seconds, tenthsOfSeconds);
}, 200);



function updateClock(days, hours, minutes, seconds, tenthsOfSeconds) {
    // Extract individual digits for days
    const daysOnes = days % 10;
    const daysTens = Math.floor(days / 10) % 10;
    const daysHundreds = Math.floor(days / 100) % 10;

    // Extract individual digits for hours
    const hoursOnes = hours % 10;
    const hoursTens = Math.floor(hours / 10) % 10;

    // Extract individual digits for minutes
    const minutesOnes = minutes % 10;
    const minutesTens = Math.floor(minutes / 10) % 10;

    // Extract individual digits for seconds
    const secondsOnes = seconds % 10;
    const secondsTens = Math.floor(seconds / 10) % 10;

    // Extract individual digits for tenths of seconds
    const tenthsOfSecondsOnes = tenthsOfSeconds % 10;

    // console.log(`${daysHundreds}${daysTens}${daysOnes}days,
    //       ${hoursTens}${hoursOnes}hours, 
    //       ${minutesTens}${minutesOnes}minutes, 
    //       ${secondsTens}${secondsOnes}seconds`);

    // document.getElementById('sec').innerHTML = '';
    document.getElementById('days').innerHTML = '<img src="./images/' + images[daysHundreds] + '"><img src="./images/' + images[daysTens] + '"><img src="./images/' + images[daysOnes] + '">';
    document.getElementById('hours').innerHTML = '<img src="./images/' + images[hoursTens] + '"><img src="./images/' + images[hoursOnes] + '">';
    document.getElementById('minutes').innerHTML = '<img src="./images/' + images[minutesTens] + '"><img src="./images/' + images[minutesOnes] + '">';
    document.getElementById('sec').innerHTML = '<img src="./images/' + images[secondsTens] + '"><img src="./images/' + images[secondsOnes] + '">.' + '"><img src="./images/' + images[tenthsOfSecondsOnes] + '">';
}
