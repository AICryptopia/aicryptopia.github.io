# Getting Started with AICryptopia

This guide will help you set up and start working with the AICryptopia website project.

## Prerequisites

- Git installed on your machine
- Node.js (v20 or later) and npm
- Basic knowledge of HTML, CSS, and JavaScript
- A GitHub account
- Python (for local development server)

## Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AICryptopia/aicryptopia.github.io.git
   cd aicryptopia.github.io
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Local Development**
   ```bash
   python -m http.server
   ```
   Visit `http://localhost:8000` in your browser

## Project Structure

```
.
├── .github/           # GitHub specific files
│   ├── workflows/     # GitHub Actions
│   └── ISSUE_TEMPLATE/# Issue templates
├── docs/             # Documentation
├── node_modules/     # Dependencies
└── index.html        # Main website
```

## Development Process

1. **Create Feature Branch**
   ```bash
   git checkout develop
   git checkout -b feature/your-feature
   ```

2. **Make Changes**
   - Edit files in your preferred editor
   - Test changes locally
   - Follow our [coding standards](CONTRIBUTING.md#code-standards)

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: Add new feature"
   ```

4. **Create Pull Request**
   - Push to your fork
   - Create PR against `develop`
   - Wait for review

## Available Scripts

- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Common Tasks

### Adding a New Feature
1. Create feature branch
2. Implement changes
3. Test locally
4. Submit PR

### Fixing a Bug
1. Create bug fix branch
2. Fix issue
3. Test thoroughly
4. Submit PR

### Updating Documentation
1. Find relevant files in `docs/`
2. Make changes
3. Preview locally
4. Submit PR

## Best Practices

1. **Code Quality**
   - Write clean, readable code
   - Add comments where needed
   - Follow existing patterns

2. **Git Workflow**
   - Keep commits focused
   - Write clear commit messages
   - Reference issues

3. **Testing**
   - Test all changes locally
   - Check different browsers
   - Verify mobile view

## Getting Help

- Check [documentation](README.md)
- Review [contributing guidelines](CONTRIBUTING.md)
- Search existing issues
- Ask in discussions

## Next Steps

- Review [project management](.github/PROJECT_MANAGEMENT.md)
- Check open issues
- Join discussions
- Make your first contribution

Welcome to AICryptopia! 🚀 