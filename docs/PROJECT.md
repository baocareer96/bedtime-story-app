# Project Overview

## Goal

This app is a simple public bedtime story reader built for children and parents to use on iPad Safari, including Add to Home Screen support. The design prioritizes large text, calm colors, simple controls, and one-scene-at-a-time reading.

## Architecture

- `app/`: Next.js App Router pages and global layout.
- `components/`: Reusable UI for story cards, progress, narration, and reading.
- `data/stories/`: One JSON file per story for story metadata and page content.
- `public/images`: Story illustrations.
- `public/audio`: Optional narration files.
- `public/manifest.json`: PWA metadata for home screen install behavior.
- `docs/`: Operational and content-management documentation.

## Rendering Model

- Home page loads story JSON files from `data/stories/` at build time.
- Story pages use dynamic routes from each story `slug`.
- `generateStaticParams()` makes story pages static-friendly for Vercel deployment.

## Audio Behavior

- If an MP3 path exists and plays successfully, the app uses it.
- If the file is missing or playback fails, the app falls back to browser `SpeechSynthesis`.
- This keeps the first version usable even before final narration assets exist.

## UX Notes

- Portrait-first layout suitable for iPad.
- Swipe, keyboard, and tap controls for page navigation.
- Large touch targets and no harsh white backgrounds.
- Motion is limited to soft page transitions.
