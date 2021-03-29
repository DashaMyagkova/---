function insert (number) {
    input.textContent = input.textContent + number;
}

function clean () {
    input.textContent = "";
    pow = "";
}

function back () {
    input.textContent = input.textContent.substring(0, input.textContent.length - 1);
}