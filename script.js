const container = document.querySelector('.js-container');
const maxSnowflakes = 170;
const snowflakes = [];


const createSnowfall = () => {
    if(snowflakes.length < maxSnowflakes) {
        const snowflake = document.createElement('div');
    let transformValue = Math.random() * 360;
    snowflake.classList.add('snowflake');

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 25 + 5 + 'px';
    snowflake.style.animationDuration = Math.random() * 2 + 7 + 's'
    snowflake.style.transform = `rotate(${transformValue}deg)`;
    snowflake.textContent = '❄';

    container.append(snowflake);
    snowflakes.push(snowflake);

    // setTimeout(() => {
    //     snowflake.remove();
    // }, 10000);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        snowflakes.splice(snowflakes.indexOf(snowflake),1);
    });
    }
};

setInterval(createSnowfall, 100);
