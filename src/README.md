# Mystery Compliance Theatre 2000 Release Portal

Simple Next.js App Router portal for the redacted release set.

## Run

```powershell
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Optional Analytics

Set `NEXT_PUBLIC_GTM_ID` to enable Google Tag Manager:

```powershell
$env:NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"
npm run dev
```

When the variable is absent, no GTM scripts are rendered.

## Release Assets

Only redacted release-safe PDFs identified in the current work session were copied into `public/release`.
Do not replace them with source originals.

## Form Builder

The Form Builder posts to `/api/generate-request` and returns a generated PDF request for FERPA/MGDPA category mapping, access accounting, and disclosure/access records.
