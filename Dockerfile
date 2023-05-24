FROM node:lts
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]