# Planet Static Site Boilerplate: Static/ES6/SASS

A boilerplate for building a static app/website with ES6 and SASS.

This project was created to enable the easy, setup-free use of ES6 and SASS while creating a static website/app.

# Installation

The only development dependency of this project is [Node.js](https://nodejs.org). Once Node is installed:

```
git clone git@code.earth.planet.com:marketing/insights-boilerplate.git
cd insights-boilerplate
npm install
```

# Usage

## Development

Sample files are included in `source`. These files are meant to be replaced. The only constraint is that there must be a `source/index.js` file. Place all other files  inside `source` (nested sub-directories allowed).

`npm run start` to start the dev-server and view site at: `http://localhost:1337`. As files are edited in `source` the browser will update.

## Build

`npm run build` to create a production build of the site in `build` directory at project root. This is a static build so it can be opened directly in a browser.

Copy the files from the generated build directory into the Google Cloud bucket.

# Notes

## JavaScript, SASS, CSS files

This project uses Webpack which relies on a dependency graph. What this means as far as this project is concerned is that all JavaScript, SASS, and CSS files must be imported in `index.js` (or in files that can be accessed via `index.js`).

## HTML and images

Nothing special needs to be done to HTML and image files apart from placing them somewhere in `source`.

## Fonts
To use a font from a CDN (like Google Fonts), place the `<link>` in the `<header>` of each HTML page that requires the font. Local fonts that are included in `source` but are not referenced by a SCSS/CSS/JavaScript file will not be included in the build.

## jQuery
To use jQuery, just include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
