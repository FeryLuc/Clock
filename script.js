const seconds = document.querySelector(".second-hand");
const minutes = document.querySelector(".min-hand");
const hours = document.querySelector(".hour-hand");

seconds.style.transformOrigin = "right";
minutes.style.transformOrigin = "right";
hours.style.transformOrigin = "right";

function setDate(){
    const currentDate = new Date();

    const currentSeconds = currentDate.getSeconds();
    const currentMinutes = currentDate.getMinutes();
    const currentHours = currentDate.getHours();

    const secondsInDegree = ((currentSeconds / 60) * 360) + 90;
    const minutesInDegree = ((currentMinutes / 60) * 360) + ((currentSeconds / 60) * 6) + 90;
    const hoursInDegree = ((currentHours / 12) * 360) + ((currentMinutes / 60) * 30) + 90;

    seconds.style.transform = "rotate("+secondsInDegree+"deg)";
    minutes.style.transform = "rotate("+minutesInDegree+"deg)";
    hours.style.transform = "rotate("+hoursInDegree+"deg)";
}

setInterval(setDate, 1000);