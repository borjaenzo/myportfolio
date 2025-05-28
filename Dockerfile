# Build stage
FROM node:14 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run start

# Development stage
FROM node:14

WORKDIR /app
COPY package*.json ./
RUN npm install -g gulp browser-sync
RUN npm install
COPY . .

EXPOSE 3000 3001
CMD ["npm", "start"]

# Production stage
FROM nginx:alpine
COPY --from=builder /app/public_html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 