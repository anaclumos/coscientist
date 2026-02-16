
## Task 8 - Proxy Route Protection Edge Cases (2026-02-17)

- `getSessionCookie` is an existence check only; protected pages must still validate session server-side.
- Local dev QA currently returns `404` for `/en/profile` and `/en/:orgSlug/settings` instead of middleware redirects, indicating a separate routing/proxy registration issue outside this rewrite.
- Org slug collision guard is implemented for locale-aware settings routes: `/:locale/:orgSlug/settings` redirects to `/:locale` when `orgSlug` matches a known locale.
