## Zuri Chat Company Files Plugin
---

### **Overview**
Company Files Management Plugin for Zuri Chat.

<br>

### **Local Setup Instruction**
1. Ensure nodejs and git are installed in machine
2. Clone this repo using `git clone https://github.com/zurichat/zc_plugin_company_files.git`
3. Change directory into the new clone `cd zc_plugin_company_files`
4. Run setup script to install all packages using `npm run install-setup`
5. Now run server in development mode with `npm run dev`

<br>

### **Linting**
Linting is the automated checking of a source code for programmatic and stylistic errors. This is done by using a lint tool (otherwise known as linter). A lint tool is a basic static code analyzer. Linting is important to reduce errors and improve the overall quality of our code.

For the backend part of this project, the Google code style is used with some minor modifications. A code style is set of conventions (sometimes arbitrary) about how to write code for that project. It is much easier to understand a large codebase when all the code in it is in a consistent style.

<br>

### **Commit Guide**
This plugin uses Commitlint to ensure commits messages follow a particular convention using the conventional config. If you're totally new to this convention, that's totally fine.

<br>

> *Commit CheatSheet*


| Type     |                          | Description                                                                                                 |
|----------|--------------------------|-------------------------------------------------------------------------------------------------------------|
|   feat   | Features                 | A new feature                                                                                               |
|    fix   | Bug Fixes                | A bug fix                                                                                                   |
|   docs   | Documentation            | Documentation only changes                                                                                  |
|   style  | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
|   perf   | Performance Improvements | A code change that improves performance                                                                     |
|   test   | Tests                    | Adding missing tests or correcting existing tests                                                           |
|   build  | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
|    ci    | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
|   chore  | Chores                   | Other changes that don't modify backend, frontend or test files                                                           |
|  revert  | Reverts                  | Reverts a previous commit                                                                                   |


> *Sample Commit Messages*
- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the backend, frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

<br>

### Dev Contribution Guide
1. Fork the repository
2. Clone and then open it up on your prefered code editor
3. Open your terminal & set the upstream branch: `git remote add upstream https://github.com/zurichat/zc_plugin_company_files.git`
4. Pull upstream `git pull upstream main`
5. Create a new branch for the user story you're working on eg : `git checkout -b feat-import-file-from-url`
6. After making changes, do `git add .`
7. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
8. To make sure there are no conflicts : `git pull upstream main`
9. Push changes to your new branch : `git push origin feat-import-file-from-url`
10. Create a pull request to the `dev` branch.