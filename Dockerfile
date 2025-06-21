FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose the port React uses by default
EXPOSE 3030

# Start the React app (development server)
CMD ["npm", "run","serve"]