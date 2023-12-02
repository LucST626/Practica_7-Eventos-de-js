document.getElementById('htmlButton').onclick = function() {
    document.getElementById('resultText').innerHTML = 'Has hecho click en el botón con evento HTML';
    document.getElementById('resultText').style.backgroundColor = 'lightblue';
};

document.getElementById('addEventListenerButton').addEventListener('click', function() {
    document.getElementById('resultText').innerHTML = 'Has hecho click en el botón con addEventListener';
    document.getElementById('resultText').style.backgroundColor = 'lightgreen';
});

document.getElementById('eventHandlerButton').onclick = function() {
    document.getElementById('resultText').innerHTML = 'Has hecho click en el botón con event handler';
    document.getElementById('resultText').style.backgroundColor = 'lightcoral';
};