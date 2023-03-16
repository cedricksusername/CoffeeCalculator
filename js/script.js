// Global Functions
function closeResultsWindow() {
    return function() {
        document.getElementById('results-container').style.display = 'none';
        document.getElementById('results-click-detector').style.display = 'none';
    }
}

let closeResults = closeResultsWindow();

function getResults() {
    // Calculates the amount of coffee 
    let waterAmount = document.getElementById('water-amount').value;
    let coffeeAmount = document.getElementById('coffee-amount').value;
    let waterMultiplicator = waterAmount / 1000;
    let finalGrammage = Math.round(coffeeAmount * waterMultiplicator);

    // Displays the results
    document.getElementById('results-number').innerHTML = `${finalGrammage}g`;

    // Unhides the result box
    showResults();

    // Detects if the user pressed any key to hide the result box
    document.addEventListener('keydown', closeResults);

    // bodyTag.addEventListener('click', closeResults);

    function showResults() {
        document.getElementById('results-container').style.display = 'grid';
        document.getElementById('results-click-detector').style.display = 'inherit';
    }

    // Debug
        // console.log(`Water: ${waterAmount}ml, Coffee: ${coffeeAmount}g per Litre`);
        // console.log(waterMultiplicator);
        // console.log(finalGrammage);
}