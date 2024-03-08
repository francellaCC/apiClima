export function metrosAKilometros(metros) {
  // Factor de conversión de m/s a km/h
  const factorConversion = 3.6;

  // Calcula la velocidad en km/h
  const velocidadKmPorHora = metros* factorConversion;

  return velocidadKmPorHora.toFixed(0);
}

export function sensacionTermica(temperaturaCelsius, velocidadVientoKmPorHora) {
  const sensacionTermica = 13.12 + 0.6215 * temperaturaCelsius - 11.37 * Math.pow(velocidadVientoKmPorHora, 0.16) + 0.3965 * temperaturaCelsius * Math.pow(velocidadVientoKmPorHora, 0.16);
  return Math.floor(sensacionTermica / 10);
}

export function convertirMarcaDeTiempoAMomento(marcaDeTiempo) {
   // Crea un objeto de fecha utilizando la marca de tiempo en milisegundos
   const fecha = new Date(marcaDeTiempo * 1000);

   // Extrae la hora, minutos y segundos de la fecha (hora local)
   const horas = fecha.getHours();
   const minutos = fecha.getMinutes();
   const segundos = fecha.getSeconds();

   // Formatea la hora en formato de 24 horas (puedes ajustar según tus preferencias)
   const horaFormateada = `${horas}:${minutos}:${segundos}`;

   return horaFormateada;
}