let birthDate = prompt('Введіть рік вашого народження')
let city = prompt('Введіть ваше рідне місто')
let sport = prompt('Введіть ваш улюблений вид спорту')

let ageMessage = birthDate ? 'Вам ' + (2022 - Number(birthDate)) + ' рочків.' : 'На жаль ви не вказали рік народження.'

let cityMessage
let sportsman

switch (city) {
    case 'Київ':
        cityMessage = 'Ви живете в місті ' + city  + ', це столиця України.'
        break;
    case 'Лондон':
        cityMessage = 'Ви живете в місті ' + city  + ', це столиця Британії.'
        break;
    case 'Вашингтон':
        cityMessage = 'Ви живете в місті ' + city  + ', це столиця США.'
        break;
    case null:
        cityMessage = 'На жаль Ви не вказали своє місто'
        break;
    default:
        cityMessage = 'Ви живете в місті ' + city  + '.'
}

switch (sport) {
    case 'Футбол':
        sportsman = 'Ваш спорт ' + sport  + '. Круто! Хочете стати як Шева?'
        break;
    case 'Бокс':
        sportsman = 'Ваш спорт ' + sport  + '. Круто! Хочете стати як Кличко?'
        break;
    case 'Плавання':
        sportsman = 'Ваш спорт ' + sport  + '. Круто! Хочете стати як Яна Клочкова?'
        break;
    case null:
        sportsman = 'На жаль Ви не вказали свій спорт'
        break;
    default:
        sportsman = 'Ваш спорт ' + sport + '.'
}

alert( ageMessage + '\n' + cityMessage + '\n' + sportsman);