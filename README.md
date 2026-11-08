# IS4301 assignment
React exercises 6 and 7 by Sanskar Mohapatra.

## Run locally
Use Node 20 and run `npm ci`. Copy `.env.example` to `.env.local` and provide your Firebase web app configuration. Enable Email/Password and Google in Firebase Authentication and authorise localhost.

Run `NODE_OPTIONS=--openssl-legacy-provider npm start`. Build with `NODE_OPTIONS=--openssl-legacy-provider npm run build`.

Home is public. Academics and Admission redirect signed-out users to Login, including on direct navigation. Firebase Authentication handles email/password and Google sign-in. Invalid credentials show a message. When Firebase email enumeration protection is enabled, wrong passwords and unknown users return the same error; the message explains both possibilities.

This is a course exercise, not an official NUS website. The academics and admission content is static and client-side route guards only hide those pages. Sensitive server data would also require backend authorisation.

NUS logo: extracted unchanged from the course-provided 2610 IS4301 Lecture 1 PDF.

## Git evidence
The first commit is a minimal React project. Q6 and Q7 have separate commits on develop, followed by a merge into main. GitHub Actions runs a production build on every push. Add the Firebase configuration as repository secrets for a usable hosted build; the workflow checks compilation independently of deployed authentication settings.
