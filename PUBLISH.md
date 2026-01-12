# Publishing Polybase UI to NPM

Follow these steps to release your library to the world.

## 1. Prerequisites
- An account on [npmjs.com](https://www.npmjs.com/).
- Verified email address for your NPM account.

## 2. Authentication
Run the following command in your terminal and follow the browser prompts:
```bash
npm login
```

## 3. Preparation
Ensure the package is built and the version is correct:
1. **Build**: Run `npm run build` to generate the latest `dist/`.
2. **Version**: Update the version in `package.json` (e.g., `1.0.1`).
   - Use `npm version patch` to auto-increment.

## 4. Publication
Run the publication command:
```bash
npm publish --access public
```

### 💡 Pro Tips
- **Dry Run**: Use `npm publish --dry-run` to see what files will be included without actually publishing.
- **Beta Releases**: Use `npm publish --tag beta` for testing releases before a stable launch.
- **Clean Builds**: Always delete the `dist/` folder before running `npm run build` to ensure no stale files are included.

## Checklist before publishing:
- [ ] `npm run build` completed successfully.
- [ ] `package.json` has the correct `version`.
- [ ] `README.md` is updated.
- [ ] Documentation site is built and linked.
- [ ] All sensitive files (like `.env`) are excluded.
