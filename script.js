function changeEyeColor() {
    const eye = document.getElementById('eye');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    eye.style.backgroundColor = randomColor;
}

// Change eye color every 2 seconds (adjust the interval as needed)
setInterval(changeEyeColor, 2000);
