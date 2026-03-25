# Tanzim Safin Portfolio

A clean, deployable Next.js portfolio built from local resume and image assets.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Deploy with the default Next.js settings.

## Customize content

Edit [`lib/portfolio.ts`](/Users/tanzim_safin/Desktop/portfolio website/lib/portfolio.ts) to update:

- headline and summary
- skills
- projects
- contact links
- education and thesis details
# Portfolio

## Deployment

Two ways to deploy:

- GitHub Actions (recommended): I added a workflow that deploys on push to `main` using the Vercel CLI. Add a repository secret named `VERCEL_TOKEN` (from your Vercel account) at GitHub -> Settings -> Secrets & variables -> Actions. Once that secret is set, pushing to `main` will trigger an automatic deploy.

- Manual CLI: Install the Vercel CLI and run:

```bash
npx vercel --prod
```

If you'd like, I can deploy directly now if you provide a Vercel token (not recommended to paste secrets here). Alternatively, add the `VERCEL_TOKEN` secret and I'll confirm the GitHub Action run.

