# Usa una imagen base de Node (puedes ajustar la versión)
# Etapa 1: Construcción
FROM node:20.19.0-alpine AS build

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias y luego instala
COPY package*.json ./
RUN npm install --include=dev 

# Copia el resto de la aplicación y construye
COPY . .
RUN npm run build

# Etapa 2: Ejecución
FROM node:20.19.0-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios desde la etapa de construcción
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Instala solo las dependencias de producción
RUN npm install --only=production

# Expone el puerto que usa tu app (ajusta según tu configuración de Vite)
EXPOSE 4173

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]


