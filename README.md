---
title: "Next.js on \U0001F917 Spaces"
emoji: "\U0001F433\U0001F917"
colorFrom: blue
colorTo: yellow
sdk: docker
pinned: false
license: agpl-3.0
app_port: 3000
---
<h1 align="center">Next.js on 🤗 Spaces</h1>

<p align="center">
Run your ML demo with ease in a <a href="https://nextjs.org">Next.js</a> environment
</p>

At failfast, we're passionate about crafting demos with TypeScript, Next.js, and MUI. Inspired by the ease-of-use of Gradio and Streamlit within Hugging Face Spaces, we aim to deliver a similar developer experience to JavaScript enthusiasts. Our toolkit includes predefined MUI components, empowering you to build intuitive UIs for your ML demos.

---

<!-- toc -->

- [Local development](#local-development)
  * [Use the Docker container locally](#use-the-docker-container-locally)
- [Secret Management](#secret-management)
  * [Build-time](#build-time)
  * [Runtime](#runtime)
- [Dockerize an existing project](#dockerize-an-existing-project)
- [Sync your GitHub repository with your 🤗 Space](#sync-your-github-repository-with-your-%F0%9F%A4%97-space)
- [Cleanup your 🤗 Space](#cleanup-your-%F0%9F%A4%97-space)
- [Development Roadmap](#development-roadmap)

<!-- tocstop -->

---

## Local development

1. Install the dependencies: `npm i`
2. Start the local dev-server: `npm run dev`
3. Open the app via [localhost:3000](http://localhost:3000)

### Use the Docker container locally

> ℹ️ In order for the commands to work, you need at least Docker >= 20.10, as we use env-variables as secrets

To make sure that everything is working out, you can run your container locally:

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine
2. Go into the `nextjs-hf-spaces` folder
3. Build your Docker image: `docker build -t nextjs-hf-spaces .`
4. Run your Docker container: `docker run -p 3000:3000 nextjs-hf-spaces`.
5. Open the app via [localhost:3000](http://localhost:3000)

If you also have a secret that needs to be passed into the container, you can do this: 

1. Create a copy of `.env.local.example` and rename it to `.env.local` (it contains the secret `HF_EXAMPLE_SECRET`)
2. Run your Docker container and specify the env-file: `docker run -p 3000:3000 --env-file .env.local nextjs-hf-spaces`
3. Open the example API via [localhost:3000/api/env](http://localhost:3000/api/env) and see that the value of our secret `HF_EXAMPLE_SECRET` is shown

## Secret Management

To not expose your secrets to end users, you can add them directly in **Settings** of your 🤗 Space.

1. Open your space and navigate to the **Settings**
2. Find **Repository secrets** & click on **New secret**
   
That's it, you can now access your secret.

### Build-time

If you need to have a secret during build-time (e.g. you want to install private npm packages), then you can add this directly into the `Dockerfile`:

```dockerfile
# Uncomment the following lines if you want to use a secret at buildtime, 
# for example to access your private npm packages
RUN --mount=type=secret,id=HF_EXAMPLE_SECRET,mode=0444,required=true \
    $(cat /run/secrets/HF_EXAMPLE_SECRET)
```

In this case, we mount the secret `HF_EXAMPLE_SECRET` (using [Docker secrets](https://docs.docker.com/engine/swarm/secrets/)) inside and can use it. 

### Runtime

When your 🤗 Space is running and you want to use a secret (e.g. access an API that requires authentication) without exposing it to the user, you can use it as an environment variable via `process.env`. 

```typescript
import process from "node:process";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const exampleSecret = process.env.HF_EXAMPLE_SECRET;

  // Your logic to access an API that requires authentication

  return response.status(200).json("We have access to an external API");
}
```

A simple example can be found at [nextjs-hf-spaces/api/env](https://huggingface.co/spaces/failfast/nextjs-hf-spaces/api/env). This will return the secret to see that it's working, but you wouldn't do this in your space, as you don't want to expose the secret to an end user. 

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

## Sync your GitHub repository with your 🤗 Space

If you want to use all the features for collaborative development on GitHub, but keep your demo on 🤗 Spaces, then you can set up a GitHub action that will automatically push changes from GitHub into Spaces.

> ℹ️ Git-LFS is required for files bigger than 10MB

1. Create your repo on GitHub
2. Create a [Github secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) named `HF_TOKEN` and use an [access token from Hugging Face](https://huggingface.co/settings/tokens) as its value (you must be logged in to do this)
3. Update the workflow [sync_to_hf_spaces.yml](.github/workflows/sync_to_hf_spaces.yml)
   - Configure `HF_USERNAME`: Replace `failfast` with the name of your 🤗 user account or your 🤗 organization
   - Configure `HF_SPACE_NAME`: Replace `nextjs-hf-spaces` with the name of your 🤗 space
4. Push the code into your repo on GitHub

This should force push changes in the **main** branch from GitHub into your 🤗 space.

For further information, you can check out the [guide on Hugging Face](https://huggingface.co/docs/hub/spaces-github-actions).


## Cleanup your 🤗 Space

You don't need all the demo content and examples? Then you can delete these resources to get a clean 🤗 Space:

* `src/pages/api/env.ts`
* `src/components/example-components.tsx`
* `src/components/getting-started.tsx`
* `src/components/under-construction.tsx`
* `src/components/title.tsx`
* `src/components/huggingface/huggingface.tsx`

Update the `src/components/index.tsx` and remove:

```jsx
<Title />

<GettingStarted />

<DividerBox />

<ExampleComponents />
```

> i Got an idea how this could be better? Please let us know!

## Development Roadmap

The next milestones in no particular order are:

* Components for all [`@huggingface/inference`](https://huggingface.co/docs/huggingface.js/inference/README) methods (WIP)
* Components to use [langchain.js](https://js.langchain.com/docs)
* Components to use [hyv](https://github.com/failfa-st/hyv)
* Publish components on npm to make them usable outside of [nextjs-hf-spaces](https://github.com/failfa-st/nextjs-hf-spaces)
* Provide templates for different use-cases, that are too complex for single components
* Docs on how to use the components with all available options

> i Anything missing? Please let us know!


