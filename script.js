function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createMonster() {
    const monster = document.getElementById('monster');
    monster.innerHTML = ''; 


    const eye = document.createElement('div');
    eye.className = 'monster-eye';
    eye.style.backgroundColor = getRandomColor();

    const blood = document.createElement('div');
    blood.className = 'monster-blood';

    const knife = document.createElement('div');
    knife.className = 'monster-knife';


    monster.appendChild(eye);
    monster.appendChild(blood);
    monster.appendChild(knife);


    setInterval(() => {
        eye.style.backgroundColor = getRandomColor();
    }, 2000);
}

createMonster();
