# 🕒 API de Hora y Fecha

Esta es una API simple hecha con Express.js que permite obtener la hora actual y la fecha completa.

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio o descargar los archivos  
2. Instalar dependencias:

```bash
npm install
Ejecutar el servidor:
npm start
Abrir en el navegador o Postman:
http://localhost:3000
📡 Endpoints disponibles
🔹 GET /

Devuelve un mensaje de bienvenida.

📌 Respuesta:

Bienvenido a la API de la hora actual. Use el endpoint /hora para obtener la hora actual.
🔹 GET /hora

Devuelve la hora actual en formato:

HH:MM:SS

📌 Ejemplo:

14:32:08
🔹 GET /fecha-completa

Devuelve la fecha completa junto con la hora actual.

📌 Ejemplo:

lunes, 30 de marzo de 2026, 14:32:08
🧪 Cómo probarlo en Postman
Abrir Postman
Crear una nueva request
Seleccionar método GET
Escribir la URL:
http://localhost:3000/
http://localhost:3000/hora
http://localhost:3000/fecha-completa
Presionar Send
⚙️ Tecnologías utilizadas
Node.js
Express.js
📌 Notas
El servidor corre en el puerto 3000
Asegurate de tener el servidor levantado antes de hacer requests
Si cambiás el puerto, actualizá la URL en Postman