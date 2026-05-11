FROM nginx:alpine
COPY standalone.html /usr/share/nginx/html/index.html
COPY standalone.html /usr/share/nginx/html/standalone.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
