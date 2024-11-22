# Stage 1: Build the React app
FROM node:18 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire React app to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy built files from the builder stage to NGINX's default public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
