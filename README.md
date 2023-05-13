---
title: Next.js Docker Starter
emoji: 🐳🤘
colorFrom: purple
colorTo: blue
sdk: docker
pinned: false
license: agpl-3.0
app_port: 3000
---

# nextjs-docker-starter

This example can be used to run [Next.js](https://nextjs.org/) using [Docker](https://huggingface.co/docs/hub/spaces-sdks-docker) in 🤗 [Spaces](https://huggingface.co/spaces).

## Development

1. Install the dependencies: `npm i`
2. Start the local dev-server: `npm run dev`
3. Open the app via [localhost:3000](http://localhost:3000)

## Use the Docker container locally

To make sure that everything is working out, you can run your container locally:

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine
2. Go into the `nextjs-docker-starter` folder
3. Build your Docker image: `docker build -t nextjs-docker-starter .`.
4. Run your Docker container: `docker run -p 3000:3000 nextjs-docker-starter`.
5. Open the app via [localhost:3000](http://localhost:3000)

## Dockerize an existing project

To add support for Docker to an existing project, just copy the `Dockerfile` into the root of the project and add the following to the `next.config.js` file:

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};
```

This will build the project as a standalone app inside the Docker image.

## Manage your Space via GitHub

If you want to use all the features for collaborative development on GitHub, but keep your demo on Spaces, then you can setup a GitHub action that will automatically push changes from GitHub into Spaces.

https://huggingface.co/docs/hub/spaces-github-actions
