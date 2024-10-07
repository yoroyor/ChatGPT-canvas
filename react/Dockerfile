FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY . ./
RUN npm run build

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
