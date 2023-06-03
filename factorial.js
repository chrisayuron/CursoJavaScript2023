// Factorial:
// es una notacion matematica que retorna la multiplicacion de un numero y sus numeros anteriores
// 5! = 5 * 4 * 3 * 2 * 1  
// 11! = 11 * 10 * 9 ... * 2 * 1 
// N! = (N) * (N-1) * (N-2) .... * (2) * (1)


// Usando un For 
numero_factorial = 11
total_factorial = 1

for (let index = 1; index <= numero_factorial; index++) {
    total_factorial = total_factorial * index
}

console.log(`el factorial de ${numero_factorial} es ${total_factorial}`)
