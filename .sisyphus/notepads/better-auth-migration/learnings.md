
## Auth UI Components (Task 9)

**Finding**: Better Auth client hooks (`useListOrganizations`, `useActiveOrganization`) are not exported by default from `createAuthClient`.

**Solution**:
- Exported `authClient` from `apps/web/src/lib/auth-client.ts` to access organization hooks.
- Created custom UI components (`UserMenu`, `OrgSwitcher`) using COSS/UI primitives (`Popover`, `Button`, `Avatar`).
- Replaced Clerk's `SignedIn`/`SignedOut` with custom wrappers using `useSession`.

**Pattern**:
- `UserMenu`: Uses `Avatar` and `Popover` to show user info and sign out button.
- `OrgSwitcher`: Uses `Popover` to list organizations and switch active org.
- `SignedIn`/`SignedOut`: Conditional rendering based on session state.

**Status**: ✓ Components created and exported.
