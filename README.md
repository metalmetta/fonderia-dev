# Fonderia - Milan's Forge for Builders

A Next.js application for Fonderia, featuring authentication with Supabase OAuth.

## Setup

### Prerequisites

- Node.js 18+ installed
- A Supabase project with OAuth providers configured

### Environment Variables

Create a `.env.local` file in the root directory with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**How to get these values:**

1. Go to your Supabase project dashboard
2. Navigate to **Project Settings** → **API**
3. Copy **Project URL** → use for `NEXT_PUBLIC_SUPABASE_URL`
4. Copy **anon public** key → use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### OAuth Configuration

Make sure your Supabase project has the following OAuth providers configured:

1. **GitHub OAuth**: Configure in Supabase Dashboard → Authentication → Providers
2. **Google OAuth**: Configure in Supabase Dashboard → Authentication → Providers

For each provider, set the callback URL to:
- Development: `http://localhost:3000/auth/callback`
- Production: `https://your-domain.com/auth/callback`

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment to Vercel

This project is ready for deployment to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add the environment variables in Vercel:
   - Go to **Settings** → **Environment Variables**
   - Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Set them for Production, Preview, and Development environments
4. Deploy!

Vercel will automatically detect this as a Next.js project and configure the build settings.

## Features

- 🔥 Modern Next.js 15 with App Router
- 🎨 Tailwind CSS with custom design system
- 🔐 Supabase Authentication (Email, GitHub, Google)
- 📱 Fully responsive design
- ♿ Accessibility-first approach
- 🎭 Custom forge-themed UI

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── auth/              # Authentication routes
├── components/            # React components
│   ├── ui/               # UI components
│   ├── AuthModal.tsx     # Authentication modal
│   ├── Hero.tsx          # Hero section
│   ├── Manifesto.tsx     # Manifesto section
│   └── Footer.tsx        # Footer component
├── lib/                   # Utility functions
│   └── supabase/         # Supabase client setup
├── public/               # Static assets
└── middleware.ts         # Next.js middleware for auth
```

## License

© 2025 Fonderia. Milan, Italy.
