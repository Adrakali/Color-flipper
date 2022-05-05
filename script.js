const btn = document.querySelector('.btn');
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const getRandomNumber = () => {
    return Math.floor(Math.random() * hexArray.length);
}
btn.addEventListener('click', () => {
    let hexColor = '#'; for (let i = 0; i < 6; i++) {
        hexColor += hexArray[getRandomNumber()]   
    }
    btn.textContent = hexColor.toUpperCase();
    document.body.style.backgroundColor = hexColor;
});



