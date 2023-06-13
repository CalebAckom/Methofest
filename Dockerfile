# Pulling node image as base OS
FROM node:16-alpine

# Setting working directory
WORKDIR /app

# Copying packages
COPY package*.json ./

# Installing packages
RUN npm install

# Copying project
COPY . .

# Exposing port
EXPOSE 3000

# Running the project
CMD [ "npm", "start" ]