FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

ENV HOST=0.0.0.0
ENV PORT=27578
# Expose the port React uses by default
EXPOSE 27578

# Start the React app (development server)
CMD ["npm", "run","serve","--","--port","27578", "--host", "0.0.0.0"]