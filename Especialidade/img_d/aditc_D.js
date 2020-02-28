const n1 =  parseInt(prompt("Digite um numero"))
const n2 = parseInt(prompt("Digite outro numero"))
function calculadora(n1 = 1, n2 = 1) {
    var numb1 = n1
    var numb2 = n2
    const calcular = n1 / n2
    var burro = "NÃO EXISTE"
    if (calcular == NaN) {
        return (burro)
    } else {
        return (calcular)
    }  
}
document.write("O resultado da divisão dos dois numeros é: ", calculadora(n1, n2))

