# AICryptopia Project Management Guide

## Project Views

We organize our work using three strategic views aligned with our pillars:

### 🔧 BUILD (Technical)

- Focus: Technical development and implementation
- Includes: Core features, bug fixes, technical improvements
- View Type: Board with status columns

### 💪 MOTIVATE (Community)

- Focus: Community engagement and interaction
- Includes: Community features, user feedback, engagement initiatives
- View Type: Board with status columns

### 🎯 PROMOTE (Marketing)

- Focus: Marketing and outreach
- Includes: Marketing campaigns, content creation, promotional activities
- View Type: Board with status columns

## Status Columns

Each view uses consistent status columns:

- 📋 **Backlog**: Tasks that are defined but not yet started
- 🚧 **In Progress**: Tasks actively being worked on
- 👀 **In Review**: Tasks undergoing review or testing
- ✅ **Done**: Completed tasks

## Label System

### Strategic Pillars

- `BUILD`: Technical development tasks and features
- `MOTIVATE`: Community engagement and interaction tasks
- `PROMOTE`: Marketing and outreach initiatives

### Priority Labels

- `🔥 Priority: High`: Urgent tasks requiring immediate attention
- `⏰ Priority: Medium`: Important tasks to be addressed soon
- `📅 Priority: Low`: Tasks that can be addressed when resources are available

### Type Labels

- `🐛 Type: Bug`: Something isn't working as expected
- `✨ Type: Feature`: New feature or enhancement request
- `📚 Type: Documentation`: Documentation additions or improvements
- `🔧 Type: Maintenance`: Repository maintenance, code refactoring, or optimization
- `🌱 Type: Good First Issue`: Good for newcomers and first-time contributors
- `🤝 Type: Help Wanted`: Extra attention is needed, community help welcome
- `❓ Type: Question`: Further information or clarification is requested

### Status Labels

- `⏸️ Status: Blocked`: Task is blocked by dependencies or issues
- `⌛ Status: Waiting`: Waiting for review or external input
- `🔄 Status: In Progress`: Task is actively being worked on
- `👀 Status: Review Needed`: Ready for review and feedback

## Best Practices

### Using Labels

1. Every issue should have at least:

   - One strategic pillar label (BUILD/MOTIVATE/PROMOTE)
   - One priority label
   - One type label

2. Status labels should be updated as the task progresses

### Using Project Views

1. Use the appropriate strategic view based on the task's primary focus
2. Keep status columns up to date
3. Review and update task status regularly

### Creating Issues

1. Use the provided issue templates
2. Apply appropriate labels immediately
3. Add to the relevant project view
4. Provide clear descriptions and acceptance criteria

### Pull Requests

1. Link to related issues
2. Use the same labels as the related issue
3. Request review when ready
4. Update status labels appropriately

### Command Line Operations
- Avoid using chained commands (&&) in workflows and scripts for better cross-platform compatibility
- Use separate steps for sequential operations
- Ensure commands are platform-agnostic when possible

## Project Management

### Completed Tasks ✅
1. **Link Checking for Documentation**
   - Implemented monthly automated checks
   - Focused on documentation files only
   - Configured to minimize noise and false positives
   - Creates issues only for scheduled checks

2. **Header/Footer Component Migration**
   - Successfully migrated to React-like structure
   - Implemented in `/components/layout/`
   - Validated functionality across all pages
   - Improved component organization and documentation
   - Maintained zero downtime during migration

3. **Project Automation**
   - Implemented automated project board management
   - Set up status transitions based on PR/Issue actions
   - Configured automatic label assignment
   - Integrated with GitHub Actions workflow

### Current Focus 🎯
1. **Phase 1: Static Site Optimization**
   - Component Structure Refinements
   - Asset Management
   - Documentation Improvements
   - Performance Enhancements

2. **Safe Migration Strategy**
   - Following step-by-step migration approach
   - Maintaining functionality during transitions
   - Comprehensive testing at each stage
   - Documentation updates in parallel

### Next Steps 🔄
1. Complete remaining component directories
2. Implement asset management improvements
3. Enhance documentation coverage
4. Prepare for Phase 2 (Jekyll Integration)

### Active Development Principles 🎯
1. Keep processes simple and functional
2. Avoid unnecessary complexity
3. Add automation only when it provides clear value
4. Focus on user and contributor experience
5. Maintain zero downtime during changes
6. Document changes as they happen

### Workflow Integration
1. **Automated Status Updates**
   - New issues → Backlog
   - PR opened → In Progress
   - PR ready for review → In Review
   - PR merged → Done

2. **Issue Management**
   - Link related issues and PRs
   - Update status through actions
   - Track progress in project board
   - Regular status reviews

### Project Automation
1. **Project URL Verification**
   - Before updating project automation workflows, verify project URL:
   ```bash
   # Get necessary permissions
   gh auth refresh -s read:project
   
   # List all organization projects
   gh project list --owner AICryptopia
   ```
   - Current project URL: https://github.com/orgs/AICryptopia/projects/1

2. **Workflow Configuration**
   - Use exact project URL in workflows
   - Required permissions:
     - `contents: read`
     - `issues: write`
     - `pull-requests: write`
     - `repository-projects: write`

### Notes
- This is a living document, updated as processes evolve
- Focus on maintaining clear communication
- Regular review of project management effectiveness
- Adjust processes based on team feedback

## Contributing
