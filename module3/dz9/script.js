const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let keyArray = [];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function generateKey(keyLength, symbolsSet){
    charactersArray = symbolsSet.split('');
    let i = 0;
    while(i < keyLength){
        let randomNumber = Math.floor(getRandomArbitrary(1, charactersArray.length));
        keyArray.push(charactersArray[randomNumber]);
        i++;
    }
    let keyString = keyArray.join('');
    return keyString;
}

const key = generateKey(16, characters);
console.log(key);