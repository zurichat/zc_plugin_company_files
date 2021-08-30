## Zuri Chat Company Files Plugin

### Overview
Company Files Management Plugin for Zuri Chat.


### Local Setup Instruction
1. Ensure nodejs and git are installed in machine
2. Clone this repo using `git clone https://github.com/zurichat/zc_plugin_company_files.git`
3. Change directory into the new clone `cd zc_plugin_company_files`
4. Run setup script to install all packages using `npm run install-setup`
5. Now run server in development mode with `npm run dev`


### Linting


### Commit Guide
This repo uses Commitlint & the conventional config to ensure commits messages follow a particular pattern

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