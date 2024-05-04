const show = document.getElementById('output');

function display(input) {
    var currentVal = show.value;
    if (
        (currentVal.endsWith('+') ||
        currentVal.endsWith('-') ||
        currentVal.endsWith('/') ||
        currentVal.endsWith('*')) &&
        (input == '+' || input == '-' || input == '/' || input == '*')
    ) {
        show.value = currentVal.slice(0, -1) + input;
    } else {
        show.value += input;
    }
}

function clears(){
    show.value = "";
}

function total(){
   try {
    show.value = eval(show.value);
   } catch(error) {
    show.value = "Error";
   }
}

function backspace() {
    show.value = show.value.slice(0, -1);
}


function calculatePercentage() {
    const result = parseFloat(show.value);
    show.value = result / 100;
}
function inputFraction() {
    display('/');
}


