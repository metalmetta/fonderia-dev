# Fonderia - Forging Digital Excellence

A modern landing page built with Next.js 15, TypeScript, Tailwind CSS, and Supabase authentication.

## Features

- 🎨 Retro-futuristic design with ASCII art branding
- 🔐 Supabase authentication (Email/Password, GitHub, Google OAuth)
- ⚡ Built with Next.js 15 App Router and React Server Components
- 🎭 Beautiful animations with Framer Motion
- 🎯 Type-safe with TypeScript
- 💅 Styled with Tailwind CSS and ShadCN UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

Add your Supabase project URL and anon key:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Supabase Setup

1. Go to your Supabase project dashboard
2. Enable Email authentication in Authentication > Providers
3. Enable OAuth providers (GitHub, Google) if desired
4. Add your site URL to Authentication > URL Configuration:
   - Site URL: `http://localhost:3000` (development)
   - Redirect URLs: `http://localhost:3000/auth/callback`

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
fonderia-dev/
├── app/
│   ├── auth/callback/   # Auth callback handler
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── ui/              # UI components (Button, Dialog, etc.)
│   ├── hero-section.tsx
│   ├── terminal-demo.tsx
│   ├── features-section.tsx
│   ├── cta-section.tsx
│   └── login-dialog.tsx
├── lib/
│   ├── supabase/        # Supabase client utilities
│   └── utils.ts         # Helper functions
└── middleware.ts        # Next.js middleware for auth
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
