FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN mkdir -p public && echo "<!doctype html><html><head><title>React App</title></head><body><div id='root'></div></body></html>" > public/index.html
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
