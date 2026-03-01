# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm start        # Start production server
```

No test suite is configured.

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
RESEND_API_KEY
SUPABASE_WEBHOOK_SECRET
```

## Architecture

**Single-page marketing/auth app** built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, and Supabase.

### Authentication Flow

Supabase handles auth with three client patterns — always use the right one:
- `lib/supabase/client.ts` — browser (`"use client"` components)
- `lib/supabase/server.ts` — Server Components and Route Handlers
- `lib/supabase/middleware.ts` — `middleware.ts` only

Auth routes: GitHub OAuth, Google OAuth, and email/password. All OAuth providers redirect to `/auth/callback` which exchanges the code for a session. The middleware (`middleware.ts`) only runs `updateSession` for `/auth/`, `/dashboard/`, `/profile/`, and `/api/` paths.

After signup, a canvas-confetti celebration fires. For OAuth, this is handled via a `sessionStorage` flag (`pendingSignupConfetti`) set before the redirect and read on return to the home page.

### Webhook → Email

`/api/webhooks/auth` receives Supabase `auth.users` INSERT webhooks. On new user creation it sends a welcome email via Resend using a template ID. Requests are verified against `SUPABASE_WEBHOOK_SECRET` via the `x-webhook-signature` header.

### Design System

Custom forge-themed Tailwind palette (defined as CSS variables):
- `charcoal` — deep background
- `iron` / `iron-light` — surface colors
- `ash` / `ash-dark` — muted text
- `ember-start` / `ember-end` — accent gradient (`bg-ember-gradient`)

Fonts: `font-sans` = Inter, `font-serif` = Cormorant Garamond.

UI primitives live in `components/ui/` and are Radix UI-based (shadcn/ui pattern).

### Component Structure

- `components/Hero.tsx` — CTA section with "Join the Forge" button
- `components/Manifesto.tsx` — Content section
- `components/Footer.tsx` — Footer
- `components/AuthModal.tsx` — Auth dialog (email + GitHub + Google)
- `components/SparkParticles.tsx` — Decorative particle effect
- `hooks/use-fire-confetti.ts` — Wraps canvas-confetti for the signup celebration
