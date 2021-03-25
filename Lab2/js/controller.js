
function insert (number) {
    input.textContent = input.textContent + number;
}

function clean () {
    input.textContent = "";
    pow = "";
}

function back () {
    let expression = input.textContent;
    input.textContent = expression.substring(0, expression.length - 1);
}