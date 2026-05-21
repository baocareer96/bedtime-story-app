# Runbook

## Install

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

The dev server is configured to listen on `0.0.0.0`, so devices on the same local network can connect.

## Open on iPad Over Local Network

1. Start the dev server on your computer.
2. Find your computer's local IP address.
3. Open Safari on the iPad.
4. Visit `http://YOUR_LOCAL_IP:3000`.

Windows command to find local IP:

```powershell
ipconfig
```

Look for the IPv4 address on your active Wi-Fi adapter, then replace `YOUR_LOCAL_IP`.

## Production Build Check

```bash
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Vercel will detect Next.js automatically.
4. Deploy with the default settings.

Optional Vercel CLI flow:

```bash
npm i -g vercel
vercel
```

## Add to Home Screen on iPad

1. Open the deployed app in Safari.
2. Tap the Share button.
3. Choose `Add to Home Screen`.
4. Launch it from the iPad home screen.
