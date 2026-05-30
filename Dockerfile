# 1. Utilizar una imagen base ligera de Node.js
FROM node:18-alpine

# 2. Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar el package.json para registrar la app
COPY src/package.json ./

# 4. Copiar todo el código fuente de la carpeta src
COPY src/ ./src/

# 5. Exponer el puerto interno en el que escucha la API
EXPOSE 3000

# 6. Definir la variable de entorno por defecto
ENV PORT=3000

# 7. Comando definitivo para arrancar la aplicación
CMD ["node", "src/app.js"]