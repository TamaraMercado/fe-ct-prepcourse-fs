

  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  function esMayorDeEdad(fechaNacimiento) {
    const edadMinima = 18;
    const anioActual = new Date().getFullYear();
    const anioNacimiento = new Date(fechaNacimiento).getFullYear();
  
    return anioActual - anioNacimiento >= edadMinima;
    
    
  
}

module.exports = esMayorDeEdad;