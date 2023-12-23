# New Project Boilerplate

Vite is easy, but my memory is terrible and I kept having to google setting up vite, tailwind and gh-pages deploy. Hence the exceptionally creative title: "new-project"

Skeleton boilerplate for a react project with Vite, Tailwind and gh-pages deploy.

Use below if you need animation package.

Run this in terminal: npm install -D tailwindcss-animated

Replace the plugins in tailwind.config.js with the following plugins: [require("tailwindcss-animated")],

There is a nice configurator for it here: https://www.tailwindcss-animated.com/configurator.html

To get started

Rename the new-project-main folder to your desired title.
In terminal, cd to its directory.
In terminal, run "npm install".
Next, run "npm run dev"

When ready to deploy:
Run git init if you haven't already.

Create your github repo.
Add the origin in terminal via the github instructions.

EX:
git remote add origin git@github.com:robotsWhoFeelLove/new-project.git
git branch -M main
git push -u origin main

In package.json update the homepage to: "homepage": ".<your-repo-name/>",
In terminal run "npm run deploy"
