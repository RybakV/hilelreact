let userData = prompt('Enter array data using coma', '4,7,30,5,1,0,424')
let resultsBlock = document.getElementById('results');
let customArray = userData.split(",");

function compareNumbers(a, b) {
    return a - b;
}
customArray.sort(compareNumbers);
resultsBlock.insertAdjacentText('beforeend', 'Sorted: ' + customArray.join(','));
console.log(customArray);

customArray.splice(1, 3);
resultsBlock.insertAdjacentText('beforeend', ' Removed: ' + customArray.join(','));
console.log(customArray);