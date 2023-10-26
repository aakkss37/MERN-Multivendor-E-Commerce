# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY server/package*.json ./
COPY . .
# Install the application dependencies
WORKDIR /usr/src/app/server
RUN npm install

# Bundle your app source inside the Docker image
#COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run your application
CMD ["node", "index.js"]
