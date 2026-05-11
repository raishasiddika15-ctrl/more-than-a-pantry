# MORE THAN A PANTRY Website Starter Repository

Starter code for the Sisters Road To Freedom, Inc. / MORE THAN A PANTRY website redesign.

## Project Goal

Design and develop a modern, mobile-friendly website to help:
- Individuals and families quickly find pantry resources
- Donors make secure one-time or recurring donations
- Volunteers find opportunities and sign up easily
- The organization communicate its mission, impact, events, and services clearly

## Current Site Notes

The current site has many navigation items and older content organization. This starter simplifies the experience around the highest-priority user actions:
1. Find help / pantry location
2. Donate money or goods
3. Volunteer
4. Learn about impact and programs
5. Contact the organization

## Tech Stack

This starter uses:
- Vite
- React
- TypeScript
- CSS variables
- Component-based structure

This is intentionally lightweight so the team can adapt it to Webflow, WordPress, Wix, Squarespace, or a custom React build later.

## Getting Started

```bash
npm install
npm run dev
```

## Suggested Team Workflow

### Designers
Work inside:
- `src/styles/tokens.css`
- `src/data/siteContent.ts`
- `src/components/`

Focus on:
- Colors
- Typography
- Layout
- Accessibility
- Mobile-first design
- Wireframes and UI mockups

### Engineers
Work inside:
- `src/components/`
- `src/pages/`
- `src/data/siteContent.ts`

Focus on:
- Routing
- Forms
- Donation integration
- Volunteer sign-up
- Map/location embed
- Accessibility
- Testing

### Technical Manager
Track:
- Client feedback
- Feature status
- Blockers
- Open questions
- Approval notes

Use:
- `docs/client-questions.md`
- `docs/project-requirements.md`
- `docs/team-workflow.md`

## Recommended Branch Strategy

- `main` = stable approved version
- `design/*` = UI/design experiments
- `feature/*` = new features
- `content/*` = copy/content updates
- `fix/*` = bug fixes

Example:

```bash
git checkout -b feature/volunteer-signup
```

## Priority Pages

- Home
- Find Help
- Donate
- Volunteer
- About
- Contact

## Priority Features

1. Pantry/resource locator
2. Donation call-to-action and donation item list
3. Volunteer sign-up/contact flow
4. Mobile-friendly layout
5. Clear impact storytelling
