var Cel = 
    document.getElementById('Cel');

var Far =
    document.getElementById('Far');

 Cel.oninput = () => {
    let output = (parseFloat(Cel.value) * 9) / 5 + 32;

    Far.value = parseFloat(output.toFixed(2));
 };

 Far.oninput = () => {
    let output = ((parseFloat(Far.value) - 32) * 5)/9;

    Cel.value = parseFloat(output.toFixed(2));
 };
