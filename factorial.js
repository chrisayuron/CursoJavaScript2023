// Factorial:
// es una notacion matematica que retorna la multiplicacion de un numero y sus numeros anteriores
// 5! = 5 * 4 * 3 * 2 * 1  
// 11! = 11 * 10 * 9 ... * 2 * 1 
// N! = (N) * (N-1) * (N-2) .... * (2) * (1)


// Usando un For
function calcularFactorial(numero_factorial) {
    total_factorial = 1

    for (let index = 1; index <= numero_factorial; index++) {
        total_factorial = total_factorial * index
    }

    return total_factorial
}

numero_factorial = 4
total_factorial = calcularFactorial(numero_factorial)
console.log(`el factorial de ${numero_factorial} es ${total_factorial}`)


numero_factorial = 5
total_factorial = calcularFactorial(numero_factorial)
console.log(`el factorial de ${numero_factorial} es ${total_factorial}`)

numero_factorial = 8
total_factorial = calcularFactorial(numero_factorial)
console.log(`el factorial de ${numero_factorial} es ${total_factorial}`)


// Usando programacion recursiva
function calcularFactorialRecursivamente(numero_factorial) {
    if (numero_factorial == 1) {
        return numero_factorial
    }

    return numero_factorial * calcularFactorialRecursivamente(numero_factorial - 1)
}

numero_factorial = 8
total_factorial = calcularFactorialRecursivamente(numero_factorial)
console.log(`el factorial de ${numero_factorial} es ${total_factorial}`)

