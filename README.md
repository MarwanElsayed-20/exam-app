# Exam App

An online exam app: sign in, pick a subject, take a timed quiz question by question and see the
result. Built with Next.js (App Router), TypeScript and Tailwind CSS against a REST exam API.

**Live demo:** [exam-app-mu.vercel.app](https://exam-app-mu.vercel.app) (signing in needs an account
on the exam API).

## Features

- **Authentication** with NextAuth (credentials provider, JWT sessions) and identity-provider
  buttons on the sign-in screen.
- **Route protection** in middleware: signed-in users go straight to the dashboard, everyone else
  stays on the public auth pages.
- **Dashboard** with a sidebar layout, the list of subjects and each subject's quizzes.
- **Timed exams** in a modal: a countdown, one question at a time, previous/next navigation, and a
  score built from the right and wrong answers.
- **Reusable UI kit**: button, input, form, modal, divider and empty-state components.
- Toast feedback for actions and errors.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · NextAuth · React Toastify · React Icons

## Run it locally

```bash
npm install
npm run dev
```

Create `.env.local` with:

```
BASE_URL=        # the exam API base URL
AUTH_SECRET=     # any long random string, used to sign the session
NEXTAUTH_URL=http://localhost:3000
```

## Structure

```
app/            routes: auth pages, dashboard, quizzes/[id]/exams, NextAuth route
components/     Authentication, Dashboard (sidebar, navbar, quizzes, exams) and ui/
lib/            data fetching and time formatting
middleware.ts   route protection
```
