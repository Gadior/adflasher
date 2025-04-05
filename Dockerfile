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

# Финальный образ с Nginx
# FROM nginx:alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]