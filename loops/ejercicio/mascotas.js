const mascotas = [
    { nombre: 'Max', tipo: 'perro' },
    { nombre: 'Luna', tipo: 'gato' },
    { nombre: 'Rocky', tipo: 'perro' },
    { nombre: 'Simba', tipo: 'gato' },
    { nombre: 'Coco', tipo: 'perro' }
  ];
  
  
isValidType = (element, tipo) => {
    return element.tipo == tipo
}

contarMascotasPorTipo = (mascotas, tipo) => {
    arryFiltrado = mascotas.filter( mascota => {
          return isValidType(mascota, tipo)
        }
    )
    return arryFiltrado.length
}

console.log(contarMascotasPorTipo(mascotas, 'perro')) // 3
console.log(contarMascotasPorTipo(mascotas, 'gato')) // 2

