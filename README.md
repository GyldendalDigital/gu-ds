# GU designsystem

[Token generation](./src/tokens/TOKEN_README.md)

## 🚀 Astro project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn tokens`           | Generates tokens from Figma export          |

## 🙏 Credits

Big thanks to the [Aksel team](https://aksel.nav.no) at NAV for meeting and inspire us. 

Also thanks to [Vy](https://spor.vy.no) for unknowingly helping us by having an open source design system.
