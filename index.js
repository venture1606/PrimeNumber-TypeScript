var input = document.getElementById('input-id');

var button = document.getElementById('sub-id');
var clear = document.getElementById('id-clear');
button.onclick = function () {
    var value = parseInt(input.value);
    function isPrime(Number) {
        for (var i = 2; i < Number; i++) {
            if (Number === 2) {
                return false;
            }
            else if (Number % i == 0) {
                return false;
            }
        }
        return true;
    }
    var answer = isPrime(value);
    var result = document.getElementById('dom-msg');
    if (answer) {
        result.innerText = 'Prime Number';
    }
    else {
        result.innerText = 'Not Prime Number';
    }
};
clear.onclick = function () {
    input.value = "";
};
