# Subhan Bhatti — Developer Portfolio

A personal developer portfolio built with **Vite + React** and plain CSS, deployed at
https://subhanbhatti.live.

## What it is

A single-page portfolio for Muhammad Subhan, a Computer Science student at UMT Lahore and
C++ / Python / web developer. It presents his background, skills, project work, and contact
information in a dark-themed, responsive layout with smooth navigation.

## Who it's for

- Recruiters and collaborators who want an overview of Subhan's skills and projects
- Anyone browsing his GitHub who wants to see his work in one place

## Main features

- **Sections**: Home, Profile, Expertise, Projects, Toolkit, Contact
- **Project gallery**: live cards for the projects in this account
  (app-sweeper, Dice-Rolling Game, Gold/Silver POS, MyPortfolio, Number-Guessing Game,
  Nyvexa, Rupee Pulse, SNJ Gold Lab, To-Do List, StreamCam)
- **Assets**: profile photo (`public/assets/subhan.jpg`) and ATS CV
  (`public/assets/Subhan_Bhatti_CV.pdf`)
- **Responsive design**: works on desktop and mobile viewports
- **Fast build**: Vite dev server and production build into `dist/`

## Install and run

Prerequisites: Node.js (LTS) and npm.

```bash
# clone
git clone https://github.com/subhanbhatti50134-jpg/MyPortfolio.git
cd MyPortfolio

# install dependencies
npm install

# run the dev server (http://localhost:5173)
npm run dev

# production build into dist/
npm run build

# preview the production build locally
npm run preview
```

## Assets

Add or replace these files under `public/assets/` as needed:

| File | Purpose |
|------|---------|
| `subhan.jpg` | Hero / profile image |
| `Subhan_Bhatti_CV.pdf` | ATS-formatted résumé |
| `public/assets/projects/*.png` | Project screenshots shown in the gallery |

The build uses a relative base (`base: './'`) so it works both at a domain root and
under a GitHub Pages subpath.

## Deploy

The site is deployed to GitHub Pages via `.github/workflows/deploy.yml` (build → upload
`dist/` → `actions/deploy-pages@v4`) and is live at https://subhanbhatti.live.

Pushing to `main` triggers a rebuild and redeploy automatically.

## License

This repository does not yet carry an open-source license. See `LICENSE_DECISION.md`
for recommended options.
