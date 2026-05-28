# ---------- STAGE 1: build ----------
FROM node:24-slim AS builder_2

WORKDIR /app

ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- STAGE 2: serve ----------
FROM nginx:stable

# Copiar el build generado por Vite (directorio 'build' según vite.config.ts)
COPY --from=builder_2 /app/build /usr/share/nginx/html/simposio

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
