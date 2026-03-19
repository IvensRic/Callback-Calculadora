const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');

function handleClick(valor, callback) {
    callback(valor); //Callback
}

function processarValor(valor) {
    if (valor === 'C') {
        display.value = '';
    } else if (valor === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Erro';
        }
    } else {
        display.value += valor;
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const valor = btn.textContent;

        handleClick(valor, processarValor); //Callback
    });
});