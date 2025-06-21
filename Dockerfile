FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

ENV HOST=0.0.0.0
ENV PORT=5427
# Expose the port React uses by default
EXPOSE 5427

# Start the React app (development server)
CMD ["npm", "run","start","--","--port","5427", "--host", "0.0.0.0"]