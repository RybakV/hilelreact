document.querySelectorAll('a').forEach(function callback(element) {

    href = element.getAttribute('href');
    console.log(element);

    if (href.startsWith('https://')) {
        element.innerHTML += "<i class='ok'>Link is ok</i>";
    }
    else if (href.startsWith('http://')) {
        element.innerHTML += "<i>Link is not safe</i>";
    }
    else {
        element.innerHTML += "<i>Link had no protocol. Added http.</i>";
        element.setAttribute('href', 'https://www.' + href.split('www.')[1]);
    }

    return element;
});

