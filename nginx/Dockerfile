FROM nginx:latest

ARG nginx_uid=33
ARG nginx_gid=33

RUN usermod -u $nginx_uid -o nginx && groupmod -g $nginx_gid -o nginx
