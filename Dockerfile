FROM node:10.18-alpine
#FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm config set unsafe-perm true && npm ci
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build
#install nginx
#RUN apk add nginx
#RUN mkdir -p /run/nginx
#copy build files to server directory
#RUN cp -rf dist/* /var/www/
#copy server configuration files
#COPY webclient.conf /etc/nginx/conf.d/
#Remove default configration files
#RUN rm -rf /etc/nginx/conf.d/default.conf
# forward request and error logs to docker log collector
#RUN ln -sf /dev/stdout /var/log/nginx/access.log \
#	&& ln -sf /dev/stderr /var/log/nginx/error.log
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
