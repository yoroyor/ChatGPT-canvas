FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app/public
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /app/public

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
