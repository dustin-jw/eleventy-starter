# Eleventy Starter

Use this starter template to create a new Eleventy project with the click of a button! For more information about this repo, you can read [this series](https://sparkbox.com/foundry/how_to_build_github_starter_templates_for_Eleventy_to_make_your_projects_easier) documenting its creation.

Out of the box, you should have:

- Eleventy configured with reasonable defaults to build your pages
- Sass support and some boilerplate SCSS
- JavaScript and TypeScript support, including legacy bundles for older browsers
- Minimal PWA requirements already met
- A service worker with precaching and a cache-falling-back-to-network strategy in place
- Linters for CSS, JS, and HTML
- Support for JS tests
- CI checks, PR templates, and dependabot configuration

## Making the Project Your Own

[Click this link to create a new repo](https://github.com/dustin-jw/eleventy-starter/generate). This will open a form for you to create a new repo with all of the files from this one.

Things to update:

- `package.json`
  - `name`: change to the name of your site
  - `author`: change to your name
  - `license`: change if you want to use a different license
- `README.md` (that's this file!): replace with info relevant to your site
- icons
  - `favicon.png`
  - `favicon.svg`
  - `maskable_icon.png`
  - `splash_icon.png`
- `manifest.json`
  - `name`: the full name of your site
  - `short_name`: an abbreviated/shortened version of your site's name
  - `description`: a description of your site
  - `icons`: update only if you changed the names or sizes of your icons
  - `theme_color`: change to a color that matches your site's color scheme
  - `background_color`: background color for the splash screen
- `robots.txt`: update if you want to block certain robots/crawlers
- Any placeholder pages, styles, scripts, or snippets that you won't need for your site

## Getting Started

You will need [Node.js](https://nodejs.org/en/) installed, along with `npm`, and they should match the version range given in the `engines` field in `package.json`.

```sh
# install dependencies
npm install

# run the app
npm start

# build the site for production
npm run build

# run linters all at once
npm run lint

# or run linters individually
npm run lint:css
npm run lint:js
npm run lint:html

# run tests once
npm run test

# run tests in "watch" mode
npm run test -- --watch

# run tests and generate a coverage report
npm run test -- --coverage

# update any outdated npm dependencies
npm run update-deps
```
