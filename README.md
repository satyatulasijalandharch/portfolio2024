## portfolio2024


## Multi Arch Build Command

docker buildx create --use

docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t mrstjch/portfolio:1.0 --push .

## About

This Portfolio is Dockerized and can be run in portfolio using the compose.yml file.
It also as the resources limit.

## RUN Commands

npm run dev

## BUILD Command

npm run build

## Production Preview

npm run preview