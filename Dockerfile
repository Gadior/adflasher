FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
RUN npm install pm2 -g
CMD ["pm2", "serve", "build/", "3000", "--name", "'my-react-app'", "--no-daemon"]
# COPY ./package*.json ./
# COPY ./client/.env.docker ./.env
# RUN ls
# RUN pm2 serve build/ 3000 --name "my-react-app" --spa --no-daemon
# CMD ["pm2", "serve", "build/", "3000", "--name", "'my-react-app'", "--spa", "--no-daemon"]
# CMD ["npm", "start"]