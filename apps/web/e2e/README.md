# E2E Tests

End-to-end tests for Coscientist using Playwright.

## Setup

Playwright is installed and configured. Tests are located in `apps/web/e2e/`.

## Running Tests

```bash
bun run test:e2e        # Run all tests
bun run test:e2e:ui     # Run with Playwright UI
```

## Current Status

### Working

- ✅ Playwright installed and configured
- ✅ Basic smoke test verifies Playwright setup
- ✅ Test infrastructure ready

### Known Issues

- ⚠️ Application tests are skipped due to runtime configuration issues
- ⚠️ JSON parsing error in dev server (needs investigation)
- ⚠️ Convex backend configuration required for full E2E tests

## Test Structure

### `core-journey.spec.ts`

- **E2E Setup Verification**: Confirms Playwright works correctly
- **Application Routes** (skipped): Tests for actual app routes
  - Home page
  - Manifesto page
  - Workspace page
  - Verify page
  - Search page
  - Navigation between pages

## Next Steps

To enable full E2E testing:

1. **Fix Runtime Configuration**
   - Investigate JSON parsing error in dev server logs
   - Ensure Convex is properly configured for test environment

2. **Authentication Setup**
   - Configure Clerk test mode or mock authentication
   - See: https://clerk.com/docs/testing/playwright

3. **Unskip Tests**
   - Remove `.skip` from application route tests
   - Add more comprehensive user journey tests

4. **CI Integration**
   - Add E2E tests to CI pipeline
   - Configure test environment variables

## Configuration

See `playwright.config.ts` for:

- Browser configuration (Chromium only for speed)
- Screenshot on failure
- Trace on retry
- Dev server auto-start (can be disabled with `SKIP_SERVER=1`)
