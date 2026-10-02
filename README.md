# Personal Blog

A full-stack blog application for publishing and browsing articles. Visitors can explore posts, while members can sign in and interact with content. The project also includes admin pages for managing posts, categories, profiles, and notifications.

## Features

- Browse blog posts and categories
- Create an account, sign in, and manage a member profile
- Like and comment on posts
- Admin tools for post and category management
- Image uploads with Supabase Storage support
- Responsive React interface with Markdown rendering and toast notifications

## Account Access

To test the admin area, sign in with the demo admin account:

| Email | Password |
| --- | --- |
| `adminnick@gmail.com` | `n12345` |

These are public demo credentials. Do not use them for a production deployment; replace or disable the account before making the site public.

To use member features such as liking or commenting on posts, or changing a profile picture or password, register for an account and then sign in.

## Tech Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS, and Radix UI
- Backend: Node.js, Express 5, and PostgreSQL
- Optional services: Supabase Storage for uploaded post images
- Tests: Vitest and Supertest for the backend

## Project Structure

```text
personal_blog/  React and Vite frontend
server/         Express API and backend tests
```

The `server` folder is a sibling of `personal_blog` in this repository.

## Requirements

- Node.js (a current LTS release is recommended) and npm
- A PostgreSQL database configured with the schema expected by the API
- Supabase credentials if you want uploaded post images stored in Supabase

## Run Locally

Install dependencies in each project folder:

```bash
cd personal_blog
npm install

cd ../server
npm install
```

Create `server/.env` and set the backend configuration:

```env
PORT=4000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE
JWT_SECRET=replace-with-a-long-random-secret

# Optional: enables Supabase Storage for post images
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key

# Optional when the frontend is hosted on a different origin
FRONTEND_URL=http://localhost:5173
```

The database setting can also be named `CONNECTION_STRING`. The JWT setting can also be named `SECRET_KEY`. Keep real credentials out of source control. The database must already have the tables expected by the API; database migrations are not included here.

Start the backend and frontend in separate terminals:

```bash
# Terminal 1, from server/
npm start
```

```bash
# Terminal 2, from personal_blog/
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`. During development, Vite proxies `/api` requests to `http://localhost:4000` by default. Set `VITE_API_BASE_URL` in the frontend environment when the API runs at a different URL; the same setting is used for the deployed API base URL.

## Available Scripts

Run these commands from `personal_blog/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

Run these commands from `server/`:

| Command | Description |
| --- | --- |
| `npm start` | Start the API with nodemon |
| `npm test -- --run` | Run the backend test suite once |

## Health Checks

With the backend running, these endpoints can help confirm connectivity:

- `GET http://localhost:4000/health` checks that the API is responding.
- `GET http://localhost:4000/health/db` checks the PostgreSQL connection.
