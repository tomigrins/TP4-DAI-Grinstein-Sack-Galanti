import express from 'express';
import getHoraActual from './time.js';

const app = express();
app.get('/hora', (req, res) => {
    res.send(getHoraActual());
})
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de la hora actual. Use el endpoint /hora para obtener la hora actual.');
});
app.get('/fecha-completa', (req, res) => {
    const ahora = new Date(); 
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = ahora.toLocaleDateString('es-ES', opciones); 
    const hora = getHoraActual();
    res.send(`${fecha}, ${hora}`);
});
export default app;