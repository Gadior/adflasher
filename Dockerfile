# FROM node:22-alpine
# WORKDIR /app
# COPY . .
# # COPY ./package*.json ./
# RUN npm install
# # COPY ./client/.env.docker ./.env
# # RUN ls
# RUN npm run build
# EXPOSE 3000
# RUN npm install pm2 -g
# # RUN pm2 serve build/ 3000 --name "my-react-app" --spa --no-daemon
# CMD ["pm2", "serve", "build/", "3000", "--name", "'my-react-app'", "--spa", "--no-daemon"]
# # CMD ["npm", "start"]

# Этап сборки
FROM node:22-alpine as builder

# Устанавливаем системные зависимости для сборки нативных модулей
RUN apk add --no-cache \
    autoconf \
    automake \
    make \
    g++ \
    libtool \
    nasm \
    libpng-dev \
    libjpeg-turbo-dev \
    gifsicle

WORKDIR /app

# Сначала копируем только package.json
COPY package*.json ./

# Устанавливаем зависимости с явным указанием всех необходимых плагинов
RUN npm install --ignore-scripts && \
    npm install \
    imagemin-mozjpeg \
    imagemin-gifsicle \
    imagemin-pngquant \
    imagemin-svgo \
    --save-dev

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Финальный образ
FROM node:22-alpine

WORKDIR /app

# Копируем только необходимое из builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

# Устанавливаем pm2
RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "start", "build", "--name", "my-react-app", "--spa"]