# Sushant Sharma — Light 3D Portfolio v2

A recruiter-first, light-theme portfolio inspired by the supplied reference design while keeping the site original and focused on Sushant's AI/ML/software profile.

## Stack

- React
- TypeScript
- Vite
- Tailwind is not required for this version; styling is centralized in `src/styles.css`
- Three.js / React Three Fiber for the lightweight neural background
- Framer Motion
- Lucide React

## Run

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:5173/`.

## Production build

```powershell
npm.cmd run build
```

## Important

The portrait is already included at:

`public/images/sushant-portrait.png`

The background was removed from the uploaded portrait so it can sit naturally over the light 3D hero.

Replace:

`public/resume/Sushant_Sharma_Resume.pdf`

with the real PDF resume before deployment.

## Deploy

The target URL from the portfolio brief is:

`https://infosushant1.github.io/`

Deploy the built project to the `infosushant1.github.io` GitHub Pages repository, then use that single homepage URL for the QR code on the physical resume.

## Update content

Edit:

`src/data/portfolioData.ts`

You can update projects, links, skills, achievements, certifications and contact information without changing the UI.
