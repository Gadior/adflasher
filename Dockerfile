FROM node:22-alpine
WORKDIR /app
COPY . .
# COPY ./package*.json ./
RUN npm install
# COPY ./client/.env.docker ./.env
# RUN ls
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]