# Getting Started 

In the project directory, you can run:
## NPM
### `npm run i && npm start  or npm i --legacy-peer-deps && npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## YARN

### `yarn && yarn start or npx yarn && npx yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Docker

## 1. docker build -t [name] .

[name] is mean , for name repository docker image

example: 
docker build -t test .
[+] Building 3.7s (9/9) FINISHED
 => [internal] load build definition from Dockerfile                                                                                                                                                                        0.0s 
 => => transferring dockerfile: 32B                                                                                                                                                                                         0.0s 
 => [internal] load .dockerignore                                                                                                                                                                                           0.0s 
 => => transferring context: 34B                                                                                                                                                                                            0.0s 
 => [internal] load metadata for docker.io/library/node:lts                                                                                                                                                                 3.1s 
 => [1/5] FROM docker.io/library/node:lts@sha256:6155ff062c403e99c1da7c317710c5c838c1e060f526d98baea6ee921ca61729                                                                                                           0.0s 
 => [internal] load build context                                                                                                                                                                                           0.2s 
 => => transferring context: 7.47MB                                                                                                                                                                                         0.2s 
 => CACHED [2/5] COPY package*.json ./                                                                                                                                                                                      0.0s 
 => CACHED [3/5] RUN yarn install                                                                                                                                                                                           0.0s 
 => [4/5] COPY . .                                                                                                                                                                                                          0.2s 
 => exporting to image                                                                                                                                                                                                      0.2s 
 => => exporting layers                                                                                                                                                                                                     0.1s 
 => => writing image sha256:bc22b79794cf224cfa70568551dad44197e8490378417e484b7478a698d6831c                                                                                                                                0.0s 
 => => naming to docker.io/library/test                                                                                                                                                                                     0.0s 

## 2. docker images
and run docker images for check the images you do is created or not , and make sure your name is listed at repository
example: 
docker images
REPOSITORY          TAG       IMAGE ID       CREATED          SIZE
test                latest    bc22b79794cf   54 seconds ago   1.4GB
crud-test-efisher   latest    1a99376d0df2   21 minutes ago   1.4GB
alpine/git          latest    241890ad72b1   3 weeks ago      38.2MB
## 3. docker run -p 3000:3000 -d [name/repository]
run this command line for run the docker image project
example :
docker run -p 3000:3000 -d test
8c8d3d10b1e7a3636dfd8593adf68ea7f91c4c19f9c08bf5cb8b206790ed545e

## 4. docker ps
then you can check with this command, that your image is  running well

example:
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS              PORTS                    NAMES
8c8d3d10b1e7   test      "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:3000->3000/tcp   stoic_greider