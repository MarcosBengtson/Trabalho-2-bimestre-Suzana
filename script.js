function addValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearValues() {
    const display = document.getElementById('display');
    display.value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function sanitizeExpression(expression) {
    return expression
        .replace(/π/g, 'Math.PI')
        .replace(/e(?![a-zA-Z])/g, 'Math.E')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/exp\(/g, 'Math.exp(')
        .replace(/\^/g, '**'); // operador de exponenciação
}

function calcResult() {
    const display = document.getElementById('display');
    try {
        const sanitized = sanitizeExpression(display.value);
        const result = Function(`"use strict"; return (${sanitized})`)();
        display.value = result;
    } catch (e) {
        display.value = 'Erro';
    }
}
