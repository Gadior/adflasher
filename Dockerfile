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

# Используем многоэтапную сборку для уменьшения размера
FROM node:22-alpine as builder

# Устанавливаем системные зависимости для сборки
RUN apk add --no-cache \
    autoconf \
    automake \
    make \
    g++ \
    libtool \
    nasm \
    gifsicle

WORKDIR /app

# Копируем только package.json для кэширования слоя npm install
COPY package*.json ./

# Устанавливаем зависимости с флагом --production
RUN npm install --production

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Финальный образ
FROM node:22-alpine

WORKDIR /app

# Копируем только необходимые файлы из builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

# Устанавливаем pm2 глобально
RUN npm install -g pm2

# Настройки для production
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Запускаем приложение через pm2
CMD ["pm2-runtime", "start", "build", "--name", "my-react-app", "--spa"]