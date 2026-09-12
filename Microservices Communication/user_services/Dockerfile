FROM node:22
WORKDIR /developer/user_services
COPY . .
RUN npm ci
CMD ["node","user_services.js"]