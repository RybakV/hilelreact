const form = document.querySelector("#form");
const result = document.querySelector("#result");
const resultBox = document.querySelector("#result-box");

form.addEventListener('submit',
    (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log(data);

        result.innerHTML = '';

        for (const key of Object.keys(data)) {
            const value = data[key];
            console.log(key, value);

            result.innerHTML += `<tr><td>${key}</td><td>${value}</tr></td>`
        }

        form.style.display = "none";
        resultBox.style.display = "block";
    })
