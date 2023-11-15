
// Solicitar ao usuário que insira dois valores e um operador
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let operador = prompt("Digite o operador (+, -, *, /):");

// Verificar se os valores inseridos são números válidos
if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Por favor, insira valores numéricos válidos.");
} else {
    // Realizar a operação com base no operador
    let resultado;

    switch (operador) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
                let resto = valor1 % valor2;
                console.log(`Resultado: ${resultado}, Resto: ${resto}`);
            } else {
                console.log("Não é possível dividir por zero.");
            }
            break;
        default:
            console.log("Operador inválido. Use +, -, *, ou /.");
    }

    // Exibir o resultado no console
    if (operador !== "/" || valor2 === 0) {
        console.log(`Resultado: ${resultado}`);
    }
}
