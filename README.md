# Tech Time Design Implementation with Dockerization

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Live Link

Here is a live link to the [Project](https://techtime-seven.vercel.app/).

Built using:

| Name                    | Version | Website/Documentation                          |
| ----------------------- | ------- | ---------------------------------------------- |
| ReactJS                 | 18.2.0  | https://react.dev/                             |
| Chakra-UI               | 2.5.3   | https://www.chakra-ui.com                      |
| TypeScript              | 4.9.5   | https://www.typescriptlang.org/docs/           |
| Next.js                 | 13.2.4  | https://nextjs.org/docs/getting-started        |
| SplideJS (React Splide) | 0.7.12  | https://splidejs.com/integration/react-splide/ |

## Getting Started

Quite a challenging design but I had a lot of fun building this project.

You can run this project the traditional way or using Docker. Find below the commands needed for both:

## To run manually:

Once you've cloned the repo to your local machine, run the following commands:

```bash
# cd into the project directory.
cd project-name
# run npm install (npm i) to install all needed dependencies.
npm i
# run npm run dev to start the local development server and view the project.
npm run dev
```

## To run using Docker

After cloning the project and you have docker installed and setup on your machine. Run the following command:

```bash
# cd into the project directory.
cd project-name
# build the docker image
docker build -t tech-time
# run the container based on the image built
docker run -p 3000:3000 --name image-name tech-time
```

The `docker build -t tech-time` command builds a Docker image from the configuration specified within the Dockerfile in the root directory of the project. And tags the Docker image with the name `tech-time`

The `docker run -p 3000:3000 --name image-name tech-time` command runs/publishes a new Docker container on the `tech-time` image and maps port 3000 inside the container to port 3000 on the host system. The name for the container on the host system is specified with `--name image-name` flag, this can be whatever name you want to give to the container on your system.

After running all this, this application should now be live on port 3000 on your machine.
