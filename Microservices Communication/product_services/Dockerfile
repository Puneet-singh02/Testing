FROM node:22
WORKDIR /developer/product_services
COPY . .
RUN npm ci
CMD ["node","product_services.js"]