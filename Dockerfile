# Stage 1: Build the Angular application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to leverage Docker's layer caching
COPY package.json ./

# Install project dependencies
RUN npm install --force

# Copy the rest of the application source code
COPY . .

# Build the application for production. 
RUN npm run build -- --configuration production

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Copy the custom Nginx configuration from the host to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the compiled application artifacts from the 'builder' stage
COPY --from=builder /app/dist/rare-crew-ang /usr/share/nginx/html

# Expose port 80 to allow traffic to the Nginx server
EXPOSE 80
 