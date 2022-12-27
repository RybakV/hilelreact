let btnBuy = document.querySelector('#buy');
let btnSubmit = document.querySelector('#submit');
let form = document.querySelector('#form');
let nameField = document.querySelector('#name');
let quantityField = document.querySelector('#quantity');
let errorMessage = document.querySelector('#error-message');
let checkout = document.querySelector('#checkout');
let checkoutText = document.querySelector('#checkout-comment');
let payCash = document.querySelector('#pay-cash');
let payCard = document.querySelector('#pay-card');
let payMethod = '';

// Show form after pressing "Buy"
function showForm(){
    form.style.display = "block";
};

form.addEventListener('submit',
    (e) => {
        e.preventDefault();

        // Clear Checkout message before new submit
        nameField.classList.remove('error');
        quantityField.classList.remove('error');
        errorMessage.innerHTML = '';
        errorMessage.style.display = "none";

        // Payment method
        if (payCash.checked){
            payMethod = 'Pay method: Cash';
        }
        else if (payCard.checked){
            payMethod = 'Pay method: Cash';
        }
        else {
            payMethod = 'Pay method: Not chosen';
        }

        // Check required fields and generate final Checkout message
        if (nameField.value === ""){
            nameField.classList.add('error');
            errorMessage.innerHTML = 'Please enter your full name';
            errorMessage.style.display = "block";
        }
        else if (quantityField.value === ""){
            quantityField.classList.add('error');
            errorMessage.innerHTML = 'Please enter quantity';
            errorMessage.style.display = "block";
        }
        else {
            const data = Object.fromEntries(new FormData(e.target).entries());
            console.log(data);
            checkoutText.innerHTML = 'Client name: ' + data.name + '<br/> City: ' + data.city + '<br/> Address: ' + data.post + '<br/>' + payMethod + '<br/> Quantity: ' + data.quantity + '<br/> Comment: ' + data.comment;
            checkout.style.display = "block";
        }

    })

btnBuy.addEventListener("click", showForm);
