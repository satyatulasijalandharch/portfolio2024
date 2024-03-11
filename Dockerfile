# Use an official Node.js Alpine image as a base image for building
FROM node:16-alpine as builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the necessary files for installing dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Vite.js project for production
RUN npm run build

# Use a smaller Node.js Alpine image for serving the application
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Install a lightweight HTTP server
RUN npm install -g http-server && \
    npm cache clean --force && \
    rm -rf /tmp/*

# Expose the port that the application will run on
EXPOSE 9000

# Command to run the HTTP server and serve the application on port 9000
CMD ["http-server", "dist", "-p", "9000"]
