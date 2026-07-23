# Chapter 02 – Igniting Our App (NPM & Parcel)

---

## 1. Setting Up the Project

**`index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="style.css"
    />
  </head>
  <body>
    <div id="root"></div>
    <script
      type="module"
      src="index.js"
    ></script>
  </body>
</html>
```

**`index.js`**

```js
// import react and react-dom to use it in this file
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Create Root
// Creating a root and rendering something inside it is the job of
// ReactDOM, via .createRoot(). It takes the DOM node (our root div)
// where we want to mount our React app.
const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

// 2. Create an h1 Element
// Creating an element is the job of React, via .createElement().
// Signature: React.createElement(tagName, attributesObject, content)
const heading = React.createElement(
  'h1', // tag name
  { id: 'heading' }, // attributes of the tag - here we give it an id
  'Hello from Parcel !!', // content of the tag (children)
);

// React.createElement() returns a plain JS object (not real HTML yet).
// Logging it shows the underlying React element structure.
console.log(heading);

// 3. Render the heading inside the root div using .render()
// This converts the React element object into real HTML and mounts it
// inside the root div.
root.render(heading);
```

**`package.json`**

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "Igniting our App",
  "license": "ISC",
  "author": "Onkar",
  "type": "module",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "devDependencies": {
    "parcel": "^2.16.4"
  },
  "dependencies": {
    "react": "^19.2.8",
    "react-dom": "^19.2.8"
  },
  "browserslist": ["last 2 versions"]
}
```

**`.gitignore`**

```
/node_modules
/dist
.parcel-cache
```

---

## 2. Can React Itself Make a Fast, Production-Ready App?

**Ans:** No. React is making our app fast along with a lot of libraries, code, packages, and JS that make the app fast, scalable, and production-ready — not just React.

---

## 3. What Is NPM?

**NPM does NOT stand for "Node Package Manager."** This is a common misconception — npm doesn't actually have an official full form. It manages packages behind the scenes, but the name itself does not stand for "Node Package Manager."

NPM is a standard repository for all packages — all packages are hosted there.

When we create a basic React app say via `create-react-app`, it already has npm set up in it.

### Injecting NPM Into an Existing Project

Before even using something like `npx create-react-app`, we may want to inject npm into an existing project ourselves. How we do it:

1. Run the `npm init` command
2. Answer the questions to configure npm

After that, we'll see a `package.json` in our project, containing all the config of npm that we entered.

> **`package.json` === configuration of npm in our project.**

npm takes care of the packages and their versions that we're using in the project — all of this is written in `package.json`.
We can say package.json takes care of the packages and their versions in it.

---

## 4. What Are Dependencies?

Packages on which the project depends are called **dependencies**, and npm manages them.

### Types of Dependencies

1. **Dev Dependency** — used only during the development phase.
2. **Normal Dependency** — used in both production and development.

### Installing Dependencies

To install a dependency, we use:

```bash
npm install dependencyName
```

---

## 5. Bundlers

The most important package in a project.

**What is a bundler?**

All these HTML, JS, CSS, etc. files, before being sent to production, need to be optimized, compressed, cleaned, minified, and cached.
A bundler helps us do all of this — it packages our app so it can be shipped to production efficiently.

**Examples:** Vite, Parcel, Webpack, etc. are bundlers.

The `create-react-app` command used to create a React app uses **Webpack** as its bundler, behind the scenes.

We'll be using **Parcel** here — it's easy to configure. Parcel (the bundler) will **ignite our app**.

## **NOTE:** Parcel is a beast we will see why !!

## 6. Installing Parcel

Parcel comes as a package itself — since we now have Node, we can get Parcel into the app.

```bash
npm install -D parcel
```

**What does `-D` mean when we install?**

**Ans:** It means it's just a **dev dependency** — used only during the dev phase, and won't be used in production.

On installing Parcel, this gets added to `package.json`:

```json
"devDependencies": {
  "parcel": "^2.16.4"
}
```

This gets added to `package.json`,`pacakge-lock.json` and along with it, also a `node_modules` folder.

### What Do the Symbols Before the Version Number Mean? (`^2.16.4` / `~2.xx.x`)

Version names look like `2.16.4`:
- **`^` (caret)** → if tomorrow a new **minor** version is out, the package will update automatically to it.
- **`~` (tilde)** → if tomorrow a new **major** version is out, the package will update automatically to it.

- **Minor upgrade**: the middle number, e.g. `2.16.4` → `2.17.0`
- **Major upgrade**: the first number, e.g. `2.16.4` → `3.0.0`

It's always good to have `^` (caret) — auto-updating to minor versions — but **not** major, since major upgrades can break a lot of things.

---

## 7. What Is `package-lock.json`?

**Ans:** `package.json` keeps track of the packages and (approximate) versions installed for the project.
`package-lock.json`, on the other hand, keeps track of the **exact** versions of packages used.

- `package.json` might show a version like `"^2.16.4"` — an _approximate_ version.
- `package-lock.json` will always have the **exact** version, like `"2.16.4"`.

Example entry:

```json
"node_modules/@parcel/transformer-posthtml": {
  "version": "2.16.4",
  "resolved": "https://registry.npmjs.org/@parcel/transformer-posthtml/-/transformer-posthtml-2.16.4.tgz",
  "integrity": "sha512-+GXsmGx1L25KQGQnwclgEuQe1t4QU+IoDkgN+Ikj+EnQCOWG4/ts2VpMBeqP5F18ZT4cCSRafj6317o/2lSGJg=="
}
```

### What Is the `integrity` (sha512) Hash, and Why Is It There?

Sometimes we hear "it's working in local but not in production" — the `integrity` hash exists exactly to prevent this. It's the hash that `package-lock.json` uses to **verify** that whatever package code is on your machine is _exactly_ the same as what gets installed anywhere else (production, a teammate's machine, CI, etc.).

So `package-lock.json` is a very important file — it keeps track of the exact version of every package/dependency we have.

### Why Should I Not Modify `package-lock.json`?

**Ans:** `package-lock.json` is auto-generated and maintained by npm itself — it's not meant to be hand-edited. If we modify it manually:

- It can go **out of sync** with `package.json` and with what's actually installed in `node_modules`, since npm is the one that's supposed to keep all three in agreement.
- The whole point of this file is to guarantee that **everyone** (your machine, a teammate's machine, CI, production) installs the **exact same** dependency tree. A manual edit breaks that guarantee — the hashes/versions may no longer match what npm actually resolves, which brings back the exact "works on my machine but not elsewhere" problem this file exists to prevent.
- If you need to change a dependency or its version, the correct way is to let npm do it for you — e.g. `npm install packageName@version` or `npm update` — so that `package-lock.json` gets regenerated correctly and consistently.

---

## 8. The `node_modules` Folder

**It's huge.** There are so many folders in there.

- It contains the **actual code** of the dependencies that our packages need to function.
- `node_modules` contains all the code fetched from npm for Parcel. The time it took to install Parcel was really the time it took to fetch all of Parcel's code and put it into `node_modules`.
- We installed just Parcel, but we end up with a lot of other folders too — because Parcel itself has its own dependencies, and those dependencies can have their own dependencies, and so on. This is why there's such a large list of folders just after installing Parcel — these are called **Transitive Dependencies**.

**Transitive Dependencies**, simply put: dependencies _of_ your dependencies (and their dependencies, and so on) — brought in automatically, not requested by you directly.

These folders are all dependencies in npm that Parcel needed to perform its actions — hence we get them too when we install Parcel. Nothing in there is garbage; all of it is important.

Our project has just **one** `package.json`, but every package folder inside `node_modules` has **its own** `package.json`, with its own dev and normal dependencies. So all the folders you see under `node_modules` exist because of these transitive dependencies.

> `node_modules` is basically a **local database** of all dependencies, containing the actual code of every dependency/package.

### Should We Push `node_modules` to Git?

**Ans:** No. Never push `node_modules` to production, Git, GitHub, or anywhere. Put it inside `.gitignore` so these files never get pushed.

```
/node_modules
```

### Should We Push `package.json` and `package-lock.json` to Git?

**Yes** — because they have all the data about the dependencies we need for the project: entries, versions, whether they're dev/normal dependencies, etc.

### But Why Don't We Push `node_modules`?

**Ans:** Because if we have `package.json` and `package-lock.json`, we can always **recreate** `node_modules` — after cloning the repo, running `npm i` will re-download everything from npm and recreate the `node_modules` folder. So it's not required to push it.

**Simple rule:** whatever can be regenerated, don't push to GitHub.

---

## 9. NPM vs NPX

- **npm** → means **installing** a package.
- **npx** → means **executing** a package.

```bash
npm install a-package-name   # installing
npx parcel index.html        # executing
```

---

## 10. Running the Project Using Parcel

### Starting the Dev Server

```bash
npx parcel index.html
```

> **Note:** `npm parcel index.html` is **incorrect** — `parcel` is not an npm command. Use `npx` to execute the locally installed Parcel CLI.

### Removing the `main` Field From `package.json`

If your `package.json` contains:

```json
{
  "main": "index.js"
}
```

...newer versions of Parcel (v2+) will treat your project as a **library**, instead of a **web application**.

When you run `npx parcel index.html`, you may see an error like:

```
Library targets are not supported in serve mode.
```

**Why?**

The `"main"` field is meant for **libraries/packages** — it tells tools what the library's output entry file should be. But when building a React application, our entry point is **`index.html`**, not `"main"`.

Since both are present, Parcel gets conflicting targets:

- `main` → treated as a library target
- `index.html` → treated as an application target

Modern Parcel versions are stricter about this, and throw an error instead of silently guessing.

**Solution:** simply remove the `"main"` field from `package.json`.

```json
// ❌ Before
{
  "name": "namaste-react",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js"
}

// ✅ After
{
  "name": "namaste-react",
  "version": "1.0.0",
  "type": "module"
}
```

Now `npx parcel index.html` will correctly use `index.html` as the application's entry point.

---

## 11. What Happens When We Run Parcel?

1. A dev build gets generated by Parcel, inside a `.dist` (dist) folder.
2. Our project gets hosted on a local server — `localhost:1234` (note: it's `http`, not `https`) — so we don't need to open the HTML file separately in the browser anymore.
3. Parcel automatically refreshes the app whenever changes are made and saved in code — this is called **HMR (Hot Module Replacement)**, i.e. automatic browser reload on changes.
4. A `.parcel-cache` folder is also created — Parcel uses this to cache the results of previous builds, so that later builds (after the first one) are much faster, since Parcel doesn't have to redo work it's already done before.

So, whenever we change something in the code and save it, the browser automatically reloads and shows the latest changes — done by Parcel.

Parcel uses a **File-Watching Algorithm (written in C++)** — it keeps an eye on all the files, and as soon as we change something, **HMR** kicks in and the page updates with the latest changes.

As soon as we save, it builds a new build, and we can see this happening live in the terminal where Parcel is running (`npx parcel index.html`).

**Build time is also very fast**, because:

- Parcel **caches** things in a `.parcel-cache` folder.
- If we delete the cache folder and build again with `npx parcel index.html`, it takes longer (e.g. ~490ms). But after that, if we change something and save again, the build takes much less time (e.g. ~19ms, then ~6ms, and so on) — because of caching after every build.

### Everything Parcel Does For Us

- **`dist` folder creation.**
- **HMR (Hot Module Replacement).**
- **Hosting the project over a server.**
- **Caching** — via the `.parcel-cache` folder, so builds after the first one are much faster.
- **Image optimization** — the most expensive thing in a web browser is image loading, and Parcel optimizes this.
- **Minification** of files for the production build.
- **Bundling** of files.
- **Compression** of files, so we can ship a smaller version of the code.
- **Consistent hashing.**
- **Code splitting.**
- **Differential bundling** — to support the app running smoothly in older browsers too, by generating different bundles for different browsers.
- **Diagnostics** of the app.
- **Error handling.**
- **HTTPS hosting** — gives us a way to host the app on HTTPS too, in case we want to test something that only works over SSL.
- **Tree shaking** — suppose we have 100 functions but only use 4–5 of them; Parcel removes the unused code for us. This algorithm is called **tree shaking**.
- **Creates different dev and prod bundles.**

Hence, we can now see why Parcel is called a **beast**.

**NOTE:** Both `.parcel-cache` and `dist` can be regenerated, so we don't push them to GitHub either — add them to `.gitignore` as well:

```js
/node_modules
/dist
.parcel-cache
```

---

## 12. Creating a Production Build With Parcel

```bash
npx parcel build index.html
```

Adding `build` gives us a build meant for production.

> Note: if `package.json` still has `"main": "index.js"` (auto-generated by `npm init`), this will cause an error here too — the `main` field is of no significance when we're using Parcel, since we're manually giving Parcel our own entry point (`index.html`). So it should be removed from `package.json`, exactly as covered above, to avoid any conflict.

All of these production files get generated inside the same `dist` folder. You can verify this by deleting the `dist` folder and running the prod build command again.

- The **prod build command takes noticeably longer** than the dev build.
- These files contain the **production-ready code** to deploy.
- The prod build is a **highly optimized** build — remember that.

> 📖 Read [parceljs.org](https://parceljs.org) — their official documentation is very well written, and a great place to learn more.

---

## 13. Getting React & React-DOM via NPM (Not CDN)

**We always install React using npm** — not via CDN.

### Why CDN Links for React Aren't a Good Way

- We don't want a network call just to get React — we want it already available locally in our `node_modules`.
- If there's a new version of React, we'd have to keep manually changing URLs to update and get the latest React. Whereas if we have it in `package.json`, it's easy to track and update packages — including React — to newer versions.

### Installing React and React-DOM as Packages

```bash
npm install react
npm install react-dom
```

We install these as a **normal dependency** — not `-D` (dev dependency) — since we also need React in production, not just during development.

> `npm install` and `npm i` are one and the same thing.

After installing, this gets added to `package.json`:

```json
"dependencies": {
  "react": "^19.2.8",
  "react-dom": "^19.2.8"
}
```

React and React-DOM will now also show up in `package-lock.json` and `node_modules`.

We no longer need CDN links in `index.html` — we'll use React directly from the project.

### Why We Need `type="module"` on the Script Tag

Simply installing React and importing it will throw errors like "React/ReactDOM not defined" if we don't set things up right. So, in the JS file, we import React and ReactDOM:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
```

But this alone will throw an error: **"browser scripts cannot have imports or exports."**

**The issue:** when we inject `index.js` inside the `<body>` of our HTML normally, the browser treats it as a plain, ordinary .js file — and normal browser scripts don't support `import`/`export`. So we need to tell the browser that this is _not_ a normal script file, but a **module**:

```html
<script
  type="module"
  src="index.js"
></script>
```

Now everything works fine — we've imported React and ReactDOM, and told the browser that the code in `index.js` is not plain JS, but module code. We're no longer using React from a CDN — we're using it as a dependency from `node_modules`, after installing the package.

---

## 14. `browserslist`

An npm package/config. Now we have to tell our project which browsers we want our app to support.

```json
"browserslist": [
  "last 2 Chrome versions"
]
```

This makes the app compatible with the last 2 versions of Chrome.

**How do you know what to write for which browser?** Go to [browserslist.dev](https://browserslist.dev) and read the syntax for each browser.

```json
"browserslist": [
  "last 2 versions"
]
```

This makes the app compatible with the last 2 versions of **all** browsers. It adds extra code to support older browsers this way — just go and read at browserslist.dev.


