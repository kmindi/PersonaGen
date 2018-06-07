# Persona Gen

> A web app to generate software developer personas. Built with Vue.js, TypeScript and WebPack.

## Build Setup

```bash
# install dependencies
npm install

# serve locally with hot reload (localhost:9000, adjustable in webpack.dev.config.js)
npm start

# build for production with minification
npm run build

# run TypeScript linter
npm run lint

# run tests and create coverage reports
npm test
```

## Useful VSCode Extensions

- Vetur (helps with Vue SFCs)
- TSLint (enforces coding rules in `tslint.json`)
- Prettier (formats Vue files)
- EditorConfig (enforces code formatting in `.editorconfig`)

## VSCode Settings

```json
{
    "editor.formatOnSave": true,
    "prettier.disableLanguages": [
        "markdown"
    ],
    "tslint.alwaysShowRuleFailuresAsWarnings": true,
    "tslint.autoFixOnSave": true,
    "vetur.format.defaultFormatter.html": "js-beautify-html"
}
```
