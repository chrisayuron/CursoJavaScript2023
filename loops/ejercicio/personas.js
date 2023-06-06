const personas = [
    { nombre: 'aGabriel', genero: 'Masculino', edad: 11, id: '10987', new_id: 'ABC7' },
    { nombre: 'Daniela', genero: 'Femenino', edad: 10, id: '10986', new_id: 'ABC6' },
    { nombre: 'Rocky', genero: 'Masculino', edad: 13, id: '10985', new_id: 'ABC5' },
    { nombre: 'Jannet', genero: 'Femenino', edad: 12, id: '10984', new_id: 'ABC4' },
    { nombre: 'Kevin', genero: 'Masculino', edad: 11, id: '10983', new_id: 'ABC3' }
  ];
  

 
isValidGender = (element, genero) => {
    return element.genero == genero
}

filtrarPersonasPorGenero = (personas, genero) => {
    arryFiltrado = personas.filter( persona => {
          return isValidGender(persona, genero)
        }
    )
    return arryFiltrado
}

console.log(filtrarPersonasPorGenero(personas, 'Masculino')) // 3


buscarEnLista = (personas, id) => {
    personaEncotrada = undefined
    for (let index = 0; index < personas.length; index++) {
        const element = personas[index];
        if (element.id == id) {
            personaEncotrada = element
            break
        }
    }
    if (personaEncotrada) {
        return personaEncotrada
    }
    return 'NS/NR'
}

personaEncotrada = buscarEnLista(personas, '10989')
console.log('personaEncotrada', personaEncotrada)



buscarEnListaV2 = (personas, id) => {
    personaEncotrada = personas.find(persona => {
        return persona.id == id
    })
    if (personaEncotrada) {
        return personaEncotrada
    }
    return 'NS/NR'
}

newListaPersonas = filtrarPersonasPorGenero(personas, 'Masculino')
personaEncotrada = buscarEnListaV2(newListaPersonas, '10986')

console.log('personaEncotrada', personaEncotrada)



getMappingElementsById = (personas) => {
    mappingElements = {
    }

    personas.forEach(element => {
        mappingElements[element.id] = element
    });

    return mappingElements
}


buscarEnListaV3 = (mappingElements, id) => {
    console.log('mappingElements', mappingElements)
    return mappingElements[id]
}


newListaPersonas = filtrarPersonasPorGenero(personas, 'Masculino')
mappingElements = getMappingElementsById(newListaPersonas)
personaEncotrada = buscarEnListaV3(mappingElements,  '10986')