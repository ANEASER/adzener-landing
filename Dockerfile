# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite dev server runs on
EXPOSE 5173

# Start the Vite development server with host set to 0.0.0.0 for external access
CMD ["npm", "run", "dev", "--", "--host"]
