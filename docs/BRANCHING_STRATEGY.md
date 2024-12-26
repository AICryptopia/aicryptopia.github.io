# AICryptopia Branching Strategy

This document outlines the Git branching strategy used in the AICryptopia project.

## Main Branches

### `main`
- Production-ready code
- Protected branch
- Requires pull request approval
- Only accepts merges from `develop` and `hotfix/*`

### `develop`
- Main development branch
- Protected branch
- Requires pull request approval
- All feature development integrates here
- Must pass tests before merging to `main`

## Supporting Branches

### `feature/*`
- Purpose: Development of new features
- Branch from: `develop`
- Merge to: `develop`
- Naming convention: `feature/descriptive-feature-name`
- Example: `feature/wallet-integration`

### `hotfix/*`
- Purpose: Emergency fixes for production
- Branch from: `main`
- Merge to: Both `main` and `develop`
- Naming convention: `hotfix/descriptive-fix-name`
- Example: `hotfix/fix-login-bug`

### `docs/*`
- Purpose: Documentation updates
- Branch from: `develop`
- Merge to: `develop`
- Naming convention: `docs/descriptive-doc-name`
- Example: `docs/api-documentation`

## Workflow Guidelines

1. **Feature Development**
   ```
   develop �� feature/new-feature → develop
   ```
   - Create feature branch from `develop`
   - Develop and test feature
   - Create PR to merge back into `develop`
   - Delete feature branch after merge

2. **Production Release**
   ```
   develop → main
   ```
   - Ensure all tests pass on `develop`
   - Create PR from `develop` to `main`
   - Merge after approval

3. **Hotfix Process**
   ```
   main → hotfix/bug-fix → main
                        → develop
   ```
   - Create hotfix branch from `main`
   - Fix the bug
   - Create PR to merge into both `main` and `develop`
   - Delete hotfix branch after merge

## Branch Protection Rules

1. `main` branch protection:
   - Require pull request reviews
   - Require status checks to pass
   - No direct pushes
   - No force pushes

2. `develop` branch protection:
   - Require pull request reviews
   - Require status checks to pass
   - No direct pushes
   - No force pushes

## Best Practices

1. Keep branches up to date with their parent branch
2. Write clear commit messages
3. Reference issue numbers in commits when applicable
4. Delete branches after merging
5. Keep PRs focused and reasonably sized
6. Ensure tests pass before requesting review 