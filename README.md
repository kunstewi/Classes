# DOCKER

## What's Docker
* Container maker for web apps

## Installing Docker
* Simply install docker desktop
* Or, Install docker engine via CLI

## Images and Containers
* Simply the code and dependencies alltogether called image
* When we run the image its called container

## Docker Architecture
- Docker CLI
- Docker Engine
- Docker Registry


## Port Mapping
* docker run -p <host_port>:<container_port> <image_name>

## Docker Commands

- docker images
- docker ps
- docker pull image-name:version
- docker run
  - -p
  - -d
- docker rmi
- docker rm
- docker build
- docker push
- docker kill

## Dockerfile
* Base Image
* Subsequent commands

## Creating a Basic Node.js Server and Dockerizing It

### Step 1: Create a Basic Node.js Server

1. Create a new directory for your project.
2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
3. Install Express.js:
   ```bash
   npm install express
   ```
4. Create a file named `server.js` and add the following code:

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello World!");
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

### Step 2: Create a Dockerfile

1. In the same directory, create a file named `Dockerfile` and add the following content:

   ```Dockerfile
   FROM node:14

   WORKDIR /app

   COPY package*.json ./

   RUN npm install

   COPY . .

   EXPOSE 3000

   CMD ["node", "server.js"]
   ```

### Step 3: Build and Run the Docker Image

1. Build the Docker image:
   ```bash
   docker build -t my-node-app .
   ```
2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 my-node-app
   ```

3. Open your browser and navigate to `http://localhost:3000` to see your Node.js server in action.
