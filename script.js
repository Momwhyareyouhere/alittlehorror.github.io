function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeEyeColor() {
    const eye = document.getElementById('eye');
    const randomColor = getRandomColor();
    eye.style.backgroundColor = randomColor;
}

setInterval(changeEyeColor, 2000);

const monster = document.getElementById('monster');
monster.style.backgroundImage = "url('horrifying_monster.png')";
