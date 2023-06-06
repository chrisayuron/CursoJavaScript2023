function funcion_o1(items) {
    return 0
}

function funcion_on2(items) {
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            console.log(i + "," + j)
        }
    }
}

function test(items) {
    for (let i = 0; i < items; i++) {
        for (let j = 0; j < items; j++) {
            console.log(i + "," + j)
        }
        
    }
}

items = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]

funcion_o1(items)
funcion_on2(items)
