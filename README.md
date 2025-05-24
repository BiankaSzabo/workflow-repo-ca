# Workflow repo for the CA

## Description

This repository contains the frontend for the Holidaze venue booking application. It includes:

- UI built with vanilla JavaScript, Tailwind CSS, and static HTML pages.
- Unit tests with Vitest.
- End-to-end tests with Playwright.

## Prerequisites

- Node.js v14 or later installed on your machine.

## Installation

```bash
npm install
npx playwright install
```

## Scripts

- `npm run dev` — build and watch Tailwind CSS for development.
- `npm test` — run unit tests using Vitest.
- `npm run e2e` — run end-to-end tests using Playwright.

## Environment Variables

Create a `.env` file in the project root (it is listed in `.gitignore`) and provide the following variables:

```
LOGIN_EMAIL=your-login-email@example.com
LOGIN_PASSWORD=your-login-password
# Optional: override the default base URL for E2E tests
BASE_URL=http://localhost:3000
```
