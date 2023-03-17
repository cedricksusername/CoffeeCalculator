// --------------------------------------------
//          GRAMS TO LITRE CALCULATOR
// --------------------------------------------

    // Global Functions
    function closeResultsWindow() {
        return function() {
            document.getElementById('results-container').style.display = 'none';
            document.getElementById('results-click-detector').style.display = 'none';
        }
    }

    function showResultsWindow() {
        return function() {
            document.getElementById('results-container').style.display = 'grid';
            document.getElementById('results-click-detector').style.display = 'inherit';
        }
    }

    let closeResults = closeResultsWindow();
    let showResults = showResultsWindow();

    let waterToWeightHistory = [];

    let historyCount = 1;

    function getResults() {
        // Calculates the amount of coffee 
        let waterAmount = document.getElementById('water-amount').value;
        let coffeeAmount = document.getElementById('coffee-amount').value;
        let waterMultiplicator = waterAmount / 1000;
        let grammage = coffeeAmount * waterMultiplicator;
        let finalGrammage = Math.round(grammage);

        // Displays the results
        document.getElementById('results-number').innerHTML = `${finalGrammage}g for ${waterAmount}ml`;

        // Unhides the result box
        showResults();

        // Detects if the user pressed any key to hide the result box
        document.addEventListener('keydown', closeResults);

        // Pushes weight to history
        waterToWeightHistory.push(finalGrammage);

        // Creates History module
        createHistory();

        function createHistory() {
            
            // Gets the parent element of the history section
            let historyList = document.getElementById('history-list');

            // Creates the history module
            let historyModule = document.createElement('div');
            historyList.appendChild(historyModule).setAttribute('id', 'history-module');

            // Adds the number to the module
            let historyNum = document.createElement('div');
            historyModule.appendChild(historyNum).setAttribute('id','history-number');
            historyList.children[historyCount].innerHTML = `<div id="history-number">#${historyCount}</div><div id="history-amount">${finalGrammage}g | ${waterAmount}ml</div>`;
        
            historyCount = historyCount + 1;
        }
    }

    function toggleHistory() {
        $('#history-container').fadeToggle();

        if (document.getElementById('history-module') === null) {
            document.getElementById('nohistory').innerHTML = `Nothing here yet.`;
        } else {
            document.getElementById('nohistory').innerHTML = `Your history will be wiped when you refresh the page.<br>Take notes!`;
        }
    }