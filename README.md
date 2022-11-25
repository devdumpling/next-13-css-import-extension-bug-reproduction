# CSS Import Extension Bug Reproduction

Issue link: https://github.com/vercel/next.js/issues/43397

I've kept this as minimal as possible to reproduce.

## Reproduction Steps

```bash
pnpm i
pnpm dev # starts two nearly identical Next.js apps in parallel on 3001 and 3001
```

This starts two nearly identical (see diff below) Next.js apps on 3000 and 3001. Both import a `style.css` file from a separate package, `ui`, in the monorepo.

1. Navigate to http://localhost:3000, which uses `app` and observe there's no css style applied (`background-color: salmon`). This uses `import ui/styles`.
1. Navigate to http://localhost:3000/works, which uses `pages` and observe that it works. 
1. Navigate to http://localhost:3001, which is exactly the same as above except the import includes the extension in the import and observe it works.
1. Navigate to http://localhost:3001/works, which is also exactly the same. It should also work. 

## Repo Structure

Super basic pnpm monorepo, cut down version of the example one in TurboRepo. The `packages` folder contains a single, minimal package that only exports a single css file in a dist. This is a simplified version of where I encountered the original problem, in a component library that is built and bundled (link to that repo below).

The `apps` folder contains two nearly identical Next.js apps:

`web` is a Next.js app with a `pages` folder with an `_app.tsx` that imports the css file directly, e.g. `import ui/styles`. This works as expected. There is also an `app` folder with a `layout.tsx` that imports the css file the same. It does not work here. 

## Repo where I encountered the problem

This repo has a similar setup, though it actually bundles a tiny component library using Vite and `vanilla-extract`. 

https://github.com/devdumpling/ls-news
