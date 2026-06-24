# Durable Publish Location

This folder is the durable publish location for the Mystery Compliance Theatre 2000 release portal.

When updating publishable materials:

- Treat `D:\repos\where-in-the-world-is-amy-bullyan\src` as the canonical source tree for the public release site.
- Copy only release-safe, redacted public assets into `public/` or another existing public asset path.
- Do not place source originals, unredacted records, working drafts, private exports, or transient no-ed workspace artifacts here.
- Keep site source changes in `app/`, `components/`, and `lib/` aligned with the prepared release portal before publishing.
- If a generated static export is needed, build it from this folder after the source and public assets have been updated.
