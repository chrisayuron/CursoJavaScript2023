const generoAleatorio = () => {
    const generos = ["Masculino", "Femenino"];
    return generos[Math.floor(Math.random() * generos.length)];
  };
  
  const estadoCivilAleatorio = () => {
    const estadosCiviles = ["Soltero", "Casado", "Divorciado"];
    return estadosCiviles[Math.floor(Math.random() * estadosCiviles.length)];
  };
  
  const personas = [];
  
  for (let i = 0; i < 50; i++) {
    const nombre = `Persona ${i + 1}`;
    const genero = generoAleatorio();
    const edad = Math.floor(Math.random() * 50) + 18; // Edad entre 18 y 67 años
    const estadoCivil = estadoCivilAleatorio();
  
    const persona = {
      nombre,
      genero,
      edad,
      estadoCivil
    };
  
    personas.push(persona);
  }
  
  console.log(personas);