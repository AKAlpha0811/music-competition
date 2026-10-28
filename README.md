# Echo Music Competition

Academic Committee · Raha International School · Ignite Your Spark

**Live prototype:** https://akalpha0811.github.io/music-competition/

**Source:** https://github.com/AKAlpha0811/music-competition

## Deployment status · 2026-10-28

The first GitHub Pages deployment succeeded (workflow run #1, source commit `0aaadbf`). All six pages loaded on the public address. Required-field validation, group fields, sample programme reordering and reset were checked on the live site.

No domain was purchased or configured. The site currently uses the GitHub Pages address above. A separately owned domain can be connected later through Pages settings and the domain provider’s DNS.

The site remains a prototype. The registration form does not submit or persist entries, and Organiser Preview is a public demo with no authentication or live data.

## Project

Application source and local commands are in `music-competition/`. Competition content and cash award allocations are in `music-competition/src/data.ts`.

```sh
cd music-competition
npm ci
npm run dev
npm run build
```

The workflow `.github/workflows/deploy-music.yml` builds and deploys relevant changes pushed to `main`. GitHub Pages is configured to use GitHub Actions. A manual run is also available in Actions.

`DEPLOYMENT.md` and the project verification log include the earlier preparation history. This README records the current published state.


## Echo design update

Echo Music Competition is the confirmed event name. The redesigned site includes a black-and-gold default theme and a white-and-gold light theme. Use the Light/Dark button in the header; the choice lasts for the current tab session. All six pages and existing public links are retained. Performance Order is the clearer menu label for the Programme page.
