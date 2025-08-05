# Use official Node.js 18 image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE ${APP_PORT}

# Install global dependencies for hot reload (if not present)
RUN npm install -g @nestjs/cli

# Start the app in development mode with hot reload
CMD ["npm", "run", "start:dev"] 