FROM node:16-alpine as frontend

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build



FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=frontend /app/build /usr/share/nginx/html

EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]
