FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000
# Expose the port React uses by default
EXPOSE 3000

# Start the React app (development server)
CMD ["npm", "run","start","--","--port","3000", "--host", "0.0.0.0"]