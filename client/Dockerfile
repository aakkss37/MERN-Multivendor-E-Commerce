# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
#COPY package*.json ./
COPY . .
# Install the application dependencies
#WORKDIR /usr/src/app/
RUN npm install

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run your application
CMD ["npm", "run", "start"]