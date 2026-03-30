let getHoraActual = () =>{
    let fecha = new Date();
    let hora = String(fecha.getHours()).padStart(2, '0');
    let minutos = String(fecha.getMinutes()).padStart(2, '0');
    let segundos = String(fecha.getSeconds()).padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
}
export default getHoraActual;