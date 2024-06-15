function convert() {
    var celsius = document.getElementById('celsius').value;
    if (celsius === "") {
        document.getElementById('result').innerText = "Please enter a temperature.";
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerText = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";

    // Change background color based on the converted temperature
    var converter = document.getElementById('converter');
    if (fahrenheit >= 90) {
        converter.classList.remove('cold', 'comfortable');
        converter.classList.add('hot');
    } else if (fahrenheit <= 32) {
        converter.classList.remove('comfortable', 'hot');
        converter.classList.add('cold');
    } else {
        converter.classList.remove('cold', 'hot');
        converter.classList.add('comfortable');
    }
}
