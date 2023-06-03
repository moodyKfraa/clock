const secondsAnalog = document.querySelector(`.analogs .seconds`);
const minutesAnalog = document.querySelector(`.analogs .minutes`);
const hoursAnalog = document.querySelector(`.analogs .hours`);

secondsAnalog.style.transform = `translate(-50%) rotateZ( ${new Date().getSeconds() * 6}deg)`
minutesAnalog.style.transform = `translate(-50%) rotateZ( ${new Date().getMinutes() * 6}deg)`
hoursAnalog.style.transform = `translate(-50%) rotateZ( ${new Date().getHours() * 30}deg)`

setInterval(() => {
    secondsAnalog.style.transform = `translate(-50%) rotateZ( ${new Date().getSeconds()}deg)`
}, 1000);
setInterval(() => {
    minutesAnalog.style.transform = `translate(-50%) rotateZ( ${new Date().getMinutes() * 6}deg)`
}, 60000);
setInterval(() => {
    hoursAnalog.style.transform = `translate(-50%) rotateZ( ${new Date().getHours() * 30}deg)`
}, 360000);
