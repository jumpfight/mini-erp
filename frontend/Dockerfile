# Tahap 1: Build React App
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Tahap 2: Serve pakai nginx
FROM nginx:alpine

# Copy hasil build React ke nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy config nginx opsional
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173