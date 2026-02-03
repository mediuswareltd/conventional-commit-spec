# Mediusware Conventional Commit Standards

Last Updated: January 2026  
Status: Mandatory for All Contributors

## **Table of Contents**

1. [Overview](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#overview)  
2. [Branching Strategy](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#branching-strategy)  
3. [Branch Naming Conventions](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#branch-naming-conventions)  
4. [Identity & Authentication](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#identity-authentication)  
5. [Commit Standards](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#commit-standards)  
6. [Pull Request Guidelines](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#pull-request-guidelines)  
7. [Merge Conflict Resolution](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#merge-conflict-resolution)  
8. [Rebase & Force Push Policy](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#rebase-force-push-policy)  
9. [Branch Sync & CI Requirements](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#branch-sync-ci-requirements)  
10. [Release Management](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#release-management)  
11. [Dependency Management](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#dependency-management)  
12. [Prohibited Practices](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#prohibited-practices)  
13. [Enforcement](https://docs.google.com/document/d/17KE9KSB7VgfJ9CBPwXa5YarqekPIqFvIiQKbGTm4Vso/edit?tab=t.0#enforcement)

## **Overview**

This document establishes mandatory Git practices for all project contributors. These standards ensure clean history, safe releases, clear ownership, and predictable delivery. Following these practices helps maintain a consistent workflow across teams, reduces the risk of errors during integration, and improves collaboration between developers. It also ensures that code is traceable, auditable, and easier to maintain over time. Adhering to these standards supports faster code reviews, smoother deployments, and a more reliable production environment.

**Applicability: All team members including leads.**

## 


## **Branching Strategy**

Branching strategy organizes development by isolating work in feature branches and merging through dev, staging, then main to keep production stable.

### **Permanent Branches**

| Branch | Purpose | Stability | Source |
| ----- | ----- | ----- | ----- |
| main | Production code | Must always be stable | staging only |
| staging | Pre-production, QA, UAT | Should be stable | dev only |
| dev | Active development | May be unstable | Feature branches |

### **Workflow**

feature/xyz → dev → staging → main  
bugfix/abc → dev → staging → main  
chore/def → dev → staging → main

### **Rules**

* No direct commits to main or staging  
* All work starts in a feature branch  
* Never rebase dev, staging, or main

## **Branch Naming Conventions**

Branch naming conventions make branch purpose and type clear and consistent.

### **Format**

\<type\>/\<brief-description\>

### **Allowed Types**

* feature or feat/ \- New functionality  
* bugfix or fix/ \- Bug corrections  
* hotfix/ \- Critical production fixes  
* chore/ \- Maintenance tasks

### **Examples**

feature/analytics-localization  
bugfix/login-token-expiry  
hotfix/payment-gateway-timeout  
chore/update-eslint-config

Rules:

* Use lowercase with hyphens  
* Be descriptive but concise  
* Maximum 50 characters

## **Identity & Authentication**

Ensure commits use personal GitHub accounts with correct name/email for identity verification.

### **GitHub Account Requirements**

1. Use your personal GitHub account  
2. Register with company email  
3. No shared or generic accounts

### **Commit Identity Configuration**

git config \--global user.name "Rashed"  
git config \--global user.email "rashed@mediusware.com"

### **Verification**

git config \--global user.name  
git config \--global user.email

### **Expected Output**

Author: Rashed \<rashed@mediusware.com\>  
Date:   Mon Jan 15 14:30:00 2026 \+0600

### **SSH Authentication**

* Shared SSH keys are allowed for authentication only  
* SSH access does not define commit identity  
* Commit identity is set via git config

### **Enforcement**

Commits with incorrect or missing identity will be rejected during code review.

## **Commit Standards**

Commit standards ensure clear, consistent messages showing the type and purpose of each change.

### **Message Format**

\<type\>: \<concise description\>

### **Commit Types**

| Type | Purpose | Example |
| ----- | ----- | ----- |
| feat: | New feature | feat: add tenant-based filtering to reports |
| fix: | Bug correction | fix: resolve token refresh infinite loop |
| chore: | Maintenance | chore: remove deprecated API endpoints |
| refactor: | Code restructuring | refactor: simplify authentication middleware |
| docs: | Documentation | docs: update API integration guide |
| test: | Tests | test: add unit tests for payment service |
| perf: | Performance | perf: optimize database query indexes |
| style: | Formatting | style: apply consistent code formatting |
| build: | Build system | build: update webpack configuration |
| ci: | CI/CD | ci: add automated security scanning |

### **Examples**

feat: implement OAuth 2.0 social login  
fix: prevent race condition in order processing  
chore: update Node.js to v20 LTS

### **Rules**

* One logical change per commit  
* Use present tense  
* Reference issues when applicable  
* No WIP commits

## **Pull Request Guidelines**

Required PR contents, size limits, and pre-merge checklist for quality control.

### **Required Contents**

Every PR must include:

1. Description \- Clear explanation of changes  
2. Testing Notes \- How changes were verified  
3. Screenshots \- For UI modifications  
4. Migration Notes \- Database or config changes  
5. Related Issues \- Link to tickets

### **PR Size Guidelines**

| Lines Changed | Status | Action Required |
| ----- | ----- | ----- |
| Less than 400 | Ideal | Proceed normally |
| 400 to 500 | Large | Justify or split |
| More than 500 | Too large | Must split |

### 

### 

### **Draft Pull Requests**

* Use for work in progress  
* Cannot be merged  
* Mark "Ready for Review" only after conflicts resolved and tests passed

### **Pre-Merge Checklist**

Before requesting review:

* Branch synced with target  
* No merge conflicts  
* All tests passing locally  
* No debug logs or commented code  
* Commit messages follow standards  
* No unrelated changes

PRs failing this checklist will be rejected.

## **Merge Conflict Resolution**

Merge conflict resolution ensures the PR author carefully resolves conflicts, preserves functionality, tests locally, and never force-pushes or drops code silently.

### **Responsibility**

The PR author is fully responsible for resolving all merge conflicts.

### **Resolution Process**

#### **Step 1: Sync with Target**

git fetch origin  
git rebase origin/dev

or

git merge origin/dev

#### **Step 2: Resolve Manually**

Do:

* Understand both versions  
* Preserve existing functionality  
* Maintain security checks  
* Keep tenant isolation  
* Retain recent fixes

Do Not:

* Use "Accept all incoming" blindly  
* Use "Accept all current" blindly  
* Comment out code  
* Remove logic without understanding

#### **Step 3: Validate Locally**

npm start  
npm test

Verify affected functionality manually.

#### **Step 4: Commit Resolution**

git add .  
git commit \-m "fix: resolve merge conflicts with dev"

### **Strictly Forbidden**

* Force push to dev, staging, main  
* Pushing conflict markers  
* Resolving conflicts without testing  
* Silently dropping code

Violations are treated as critical incidents.

## **Rebase & Force Push Policy**

Rules limiting rebase to personal branches and force-push restrictions.

### **Rebase Usage**

Allowed:

* Personal feature branches only

Forbidden:

* dev, staging, main  
* Branches with multiple collaborators

### **Force Push Rules**

Allowed:

git push \--force-with-lease origin feature/my-work

Forbidden:

git push \--force origin dev  
git push \--force origin staging  
git push \--force origin main

## **Branch Sync & CI Requirements**

Branch sync ensures feature branches stay updated, CI must pass before merging, and all main merges are tagged for traceable releases.

### **Branch Sync Discipline**

* Feature branches must sync with dev every 2-3 days  
* Inactive branches (14+ days) may be closed

### **CI Requirements**

| Condition | Action |
| ----- | ----- |
| All checks pass | Merge allowed |
| Any check fails | Merge blocked |

### 

### **Rules**

* CI failures block merge  
* "Works locally" is not acceptable  
* CI bypass is not allowed

## **Release Management**

Tagging policy for every main merge and structured revert procedures.

### **Tagging Policy**

Every merge to main must be tagged:

git tag \-a v1.4.0 \-m "Release version 1.4.0"  
git push origin v1.4.0

### **Tag Format**

v\<major\>.\<minor\>.\<patch\>\[-suffix\]

Examples:

* v1.3.0 \- Standard release  
* v1.3.1 \- Patch release  
* v1.3.1-hotfix \- Emergency fix

### **Benefits**

* Rollback capability  
* Audit trail  
* Production debugging

### **Revert Policy**

* Prefer revert over panic fixes  
* Fix forward in a new PRI can help with text formatting by **generating or rewriting content** to meet a specific structure or style. For example, I can:  
* **Create lists and tables** based on your request.  
* **Format generated text** using bold, italics, or headings.  
* **Rewrite existing text** from your document into a different format (e.g., turning a paragraph into a bulleted list).

For instance, if you highlight a section and ask me to "turn this into a numbered list" or "summarize this using bold headings," I can generate that content for you.

However, I **cannot** directly apply formatting *changes* to the existing text in the document, such as:

* Changing the font, font size, or color.  
* Applying specific styles (like 'Heading 1' or 'Normal text').  
* Adding comments or tracked changes.

How would you like me to help format some text in your document, "Standard Git Practice Discipline"?

* Reverts must reference original PR

## **Dependency Management**

Manage dependencies in separate PRs with justification and security checks, and never commit logs, builds, or sensitive files.

### **Rules**

All dependency updates must:

1. Be isolated in separate PR  
2. Include justification  
3. Commit lock files  
4. Pass security audit

### **Prohibited**

* Silent version bumps  
* Updating dependencies in feature PRs  
* Ignoring security warnings

## **Prohibited Practices**

### **Never Commit**

* Log files  
* Build artifacts  
* Database dumps  
* Temporary files  
* IDE configurations  
* Environment files with secrets

### 

### 

### **Maintain .gitignore**

node\_modules/  
dist/  
build/  
\*.log  
logs/  
.env  
.env.local  
.vscode/  
.idea/  
.DS\_Store

### **Git Is Not Backup**

Do not use Git to store:

* Logs  
* Builds  
* Dumps  
* Temporary files

## **Enforcement**

Universal application, consequences for violations, and escalation procedures.

### **Universal Application**

These standards apply to all team members including leads.

### **Consequences**

| Violation | Action |
| ----- | ----- |
| Missing commit standards | PR rejected |
| Identity misconfiguration | PR blocked until corrected |
| Force push to shared branch | Critical incident |
| Bypassing CI | PR rejected immediately |
| Unresolved conflicts | PR returned to author |

### **Code Review Culture**

* git blame is for understanding history, not blaming people  
* Reviews focus on code, not individuals  
* Provide constructive feedback  
* Respect all contributors

### **Escalation Path**

1. First violation: Peer coaching  
2. Second violation: Lead developer review  
3. Third violation: Performance discussion  
4. Pattern of violations: Management escalation

