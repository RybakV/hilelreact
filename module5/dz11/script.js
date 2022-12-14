const box = document.querySelector('#images');
const btn = document.querySelector('#button');

const imagesList = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffleImages() {
    let imagesListClone = [...imagesList];
    let imagesString = '';
    let itemNumber;
    box.innerHTML = '';
    while(imagesListClone.length > 0) {
        itemNumber = getRandomIntInclusive(0, imagesListClone.length - 1);
        imagesString += '<img src="./img/' + imagesListClone[itemNumber] + '" alt="image"/>';
        imagesListClone.splice(itemNumber, 1);
    };
    box.innerHTML = imagesString;
}

btn.addEventListener("click", shuffleImages);