# AGENTS.md

# Amistaa Website Development Guide

> This document defines the vision, architecture, coding standards, UI principles, and implementation rules for the Amistaa Landing Page.

---

# Project

**Name:** Amistaa

**Type:** Premium Marketing Website

**Framework:** Next.js 15

**Language:** TypeScript

**Styling:** Tailwind CSS v4

**Animations:** Framer Motion

**Icons:** Lucide React

**UI Library:** shadcn/ui

---

# Mission

Build India's most premium creator communication platform website.

The website must immediately communicate:

- Trust
- Premium Quality
- Safety
- Modern Technology
- Creator Economy
- Meaningful Conversations

The experience should feel comparable to Apple, OpenAI, Stripe, Linear, Airbnb, Arc Browser, and Notion.

This is **not** a dating platform.

Never present Amistaa as a dating application.

Always position it as a secure creator communication ecosystem.

---

# About Amistaa

Amistaa is a Creator Communication Platform where verified creators connect with users through premium one-to-one audio and video conversations.

Users:

- Discover creators
- Recharge wallet
- Connect instantly
- Enjoy meaningful conversations

Creators:

- Complete verification
- Receive calls
- Earn money
- Withdraw earnings securely

Amistaa manages:

- Wallet
- Payments
- Verification
- Creator onboarding
- Moderation
- Security
- Payouts

---

# Brand Personality

Premium

Modern

Luxury

Minimal

Trustworthy

Professional

Friendly

Human

Elegant

Never flashy.

Never cluttered.

Never look like a cheap startup template.

---

# Design Inspiration

Primary Inspiration

- Apple
- OpenAI
- Linear
- Stripe
- Arc Browser

Secondary Inspiration

- Airbnb
- Notion
- Framer
- Raycast

Never imitate any website.

Take inspiration only.

---

# Color Palette

Primary Gradient

```
#3B2EFF
↓
#7D3CFF
↓
#FF2E92
↓
#FF8A3D
```

Background

```
#FFFFFF
```

Secondary Background

```
#F8FAFC
```

Primary Text

```
#101114
```

Secondary Text

```
#52525B
```

Border

```
#E5E7EB
```

---

# Typography

Heading

Manrope

Body

Inter

Numbers

Space Grotesk

---

# UI Principles

Always prefer

- whitespace
- clean grids
- subtle shadows
- elegant gradients
- premium spacing
- rounded corners (12–20px)

Avoid

- noisy backgrounds
- too many colors
- cartoon icons
- thick borders
- skeuomorphic UI
- outdated layouts

---

# Motion Guidelines

Use Framer Motion.

Animations should be subtle.

Preferred animations

- Fade Up
- Blur Reveal
- Scale
- Floating
- Counter
- Mouse Parallax
- Gradient Shift

Avoid excessive motion.

Performance is more important than fancy animation.

---

# Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui
- Lucide React
- Lenis
- React Three Fiber (only if beneficial)

---

# Folder Structure

```
src/

app/

components/

ui/

layout/

common/

sections/

hero/

stats/

how-it-works/

creator/

features/

security/

testimonials/

faq/

cta/

footer/

hooks/

lib/

styles/

types/

constants/

public/
```

Never place section code inside app/.

---

# Component Rules

Every UI element must be reusable.

Avoid duplicate code.

Each component must have

- proper props
- TypeScript types
- accessibility
- responsive behavior

---

# Responsive Rules

Support

320px

375px

768px

1024px

1280px

1536px

Never allow horizontal scrolling.

---

# Landing Page Structure

1 Navbar

2 Hero

3 Statistics

4 How It Works

5 Features

6 Creator Economy

7 App Screens

8 Security

9 Testimonials

10 FAQ

11 Download CTA

12 Footer

Each section should be independent.

---

# Hero Rules

The Hero must answer three questions within five seconds.

What is Amistaa?

Who is it for?

Why should I use it?

Primary CTA

Download App

Secondary CTA

Become a Creator

---

# Copywriting Tone

Simple.

Human.

Confident.

Premium.

Avoid hype.

Avoid buzzwords.

Avoid generic startup language.

---

# SEO

Every page must include

- metadata
- Open Graph
- Twitter Card
- JSON-LD
- canonical URL
- robots
- sitemap

---

# Accessibility

Use semantic HTML.

Provide

- alt text
- aria labels
- keyboard navigation
- focus states

---

# Performance

Target Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

Optimize

- images
- fonts
- animations
- JavaScript

---

# Coding Standards

Always use

TypeScript

Strict typing

No any.

No inline styles.

Prefer Tailwind utilities.

Avoid magic numbers.

Use constants.

---

# Naming

Components

PascalCase

Hooks

useSomething

Utilities

camelCase

Folders

kebab-case

---

# Git Commits

Use Conventional Commits

Examples

feat: add hero section

fix: improve navbar responsiveness

refactor: extract reusable button

style: update gradient colors

---

# Things Never To Do

Never use lorem ipsum.

Never use placeholder images.

Never create fake testimonials.

Never copy another website.

Never use heavy animations everywhere.

Never sacrifice accessibility.

Never hardcode repeated values.

Never write duplicate components.

---

# Every Generated Feature Must

Be production-ready.

Be reusable.

Be responsive.

Be accessible.

Be optimized.

Be maintainable.

Be modular.

Be beautiful.

---

# Workflow

When implementing new features:

1. Understand the requirement.
2. Reuse existing components whenever possible.
3. Keep code modular.
4. Preserve visual consistency.
5. Test responsiveness.
6. Optimize performance.
7. Ensure accessibility.
8. Commit with a conventional commit message.

Do not generate unrelated features or modify existing behavior unless explicitly requested.
