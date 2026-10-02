# Yuvraj Tak — Portfolio

Personal portfolio for Yuvraj Tak, a Computer Science and Artificial Intelligence student building machine learning, computer vision, LLM/RAG applications, and software projects.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Architecture

The site is a static React/Vite application with portfolio content separated into `src/data/`. Projects, experience, education, skills, and lab experiments can be updated without changing the presentation components.

There is no backend, database, authentication layer, or proprietary runtime dependency.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Type-check:

```bash
npm run typecheck
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Deployment

The project produces a standard Vite build and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or another static hosting platform.

## Project structure

```text
src/
├── components/   # Reusable UI and sections
├── data/         # Portfolio content
├── types/        # TypeScript data models
├── App.tsx
├── index.css
└── main.tsx
```

## Maintenance

Keep personal and project information in `src/data/`. Add or update a project there rather than duplicating content inside UI components.

