# Этап сборки
FROM node:22-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
RUN npm install pm2 -g
CMD ["pm2", "serve", "build/", "3000", "--name", "'my-react-app'", "--no-daemon", "--spa"]
