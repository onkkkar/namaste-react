# Chapter 01 – Inception (React)

## 1. What is Emmet? (H.W.)

- Designed to speed up the process of writing and editing code by providing a set of shortcuts that can be quickly expanded into full code blocks.
- How to enable it when we code → using `!` + `Tab` button in the `.html` file

---

## 2. Library vs Framework

- A library takes minimum effort to put into our code.

> 📝 **Added:** The core distinction most courses give is *who's in control*:
> - **Library** (like React) → you call the library's functions when you need them. You're in control of the flow.
> - **Framework** (like Angular) → the framework calls your code (inversion of control). It dictates the structure of your app.

---

## 3. Building the Same Output — Three Ways

Goal: show `Hello World` inside a `<div id="root">`.

### 3.1 Using Pure HTML

```html
<body>
  <!-- Pure HTML -->
  <h1>Hello Top of Root</h1>

  <div id="root">
    <h1>Hello World from HTML !!</h1>
  </div>

  <h1>Hello Top of Root</h1>
</body>
```

### 3.2 Using Vanilla JS

Steps:
1. Create root div element
2. Create element `h1`
3. Write text of `h1` using JS
4. Append `h1` inside the root div

```html
<body>
  <div id="root"></div>
</body>

<script>
  const heading = document.createElement("h1");
  heading.innerHTML = "Namaste Javascript";
  const root = document.getElementById("root");
  root.appendChild(heading);
</script>
```

### 3.3 Using React

React is a JS library with variables, functions, etc. It makes our life easier, and it was written by Facebook developers. The browser does not understand React code directly — the library and its helper functions takes care of turning it into something the browser can render.

---

## 4. Getting React Into Our Project

To use React, we need to get React into our project first.

### Ways to get React into a project:

**1. CDN (Content Delivery Network)**

**What is a CDN?**
> A place / website where React files are hosted, and we just get them from there and use them in our project via CDN links. Both React and React-DOM are available over a CDN.

CDN gives you the links to where those React files are hosted, which you can import and use for yourself.

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

---

## 5. What Is the `crossorigin` Attribute?

**CORS (Cross Origin Resource Sharing)** is an HTTP-header-based mechanism that allows a server to indicate any cross origins (domain, scheme, or port) other than its own, from which a browser should permit loading resources.

The `crossorigin` attribute provides support for CORS. If we write `crossorigin` in a script tag, it means that the script should be loaded from a different origin.

If we serve React from a CDN, keep the `crossorigin` attribute set:

```html
<script crossorigin src="..."></script>
```

---

## 6. Why Are There Two Files (react and react-dom)?

**1. First file (react)** — the **core** file of the React framework/algorithm.

**2. Second file (react-dom)** — the file useful for DOM operations, which we need to modify the DOM (Document Object Model) when we use ract in web.

This is why we have two different files.

### Why two files, not one?

We cannot put all of it in just one file. React doesn't only work on browsers — in mobile, we use React Native, there's also React 3D, etc. So there are different functions used in different places.

So the first file is the **core** React, and the second is the **bridge between the browser and React**, called `react-dom` (in the web dev case — in React Native it might be different).

---

## 7. What's Actually Inside These Files?

Open the first link:

```
https://unpkg.com/react@18/umd/react.development.js
```

It's a big blob of React code written in JavaScript, since React is a JS library written by Facebook developers. When we import the links, we import this JS code into our project.

Now our project has React inside it, and we can use React — whatever code we write, we can write it using React, and the browser/project will understand it.

**What happens when we import them into our project?**

The page is blank — we haven't written anything yet — but when we open `index.html` in the browser, open the console, and type `React`, we can see React is there, meaning the import succeeded and we can use React.

```js
{Children: {…}, Fragment: Symbol(react.fragment), Profiler: Symbol(react.profiler), Component: ƒ, PureComponent: ƒ, …}
```

You can open it and see it has a lot of components and functions we can use, provided by React — some JS code written by Facebook developers, which we imported using the CDN. This is the React we injected via the scripts.

Open the second link:

```
https://unpkg.com/react-dom@18/umd/react-dom.development.js
```

It's blank too — we haven't written anything — but when we open `index.html` in the browser, open the console, and type `ReactDOM`, we can see React-DOM being there, meaning the import succeeded and we can use React-DOM.

```js
{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {…}, createPortal: ƒ, createRoot: ƒ, findDOMNode: ƒ, flushSync: ƒ, …}
```

You can open it and see it has a lot of things given by React-DOM that we can use.

So, when we injected the two files, we injected the "superpowers" of React and React-DOM into the project, to use them and build large-scale apps.

---

## 8. Order of Files in `index.html` (Important!)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Root Div -->
    <div id="root"></div>

    <!-- React CDN -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Script -->
    <script src="index.js"></script>
  </body>
</html>
```

We need to keep the React CDN files **before** the `index.js` import, because the `.js` file is using React inside it.

**Important points:**

- If we write the React script *before* the two CDN links, we will get an error in the console — "React not defined" — and the React elements will not be rendered properly.
- Developers write `<div id="root">Not Rendered Yet</div>` — because if something goes wrong and React fails to render properly into the root element, this placeholder text makes that failure easy to detect.
- Can we write `crossorigin` on `<script src="index.js"></script>`? *(question left open to think about)*

---

## 9. Creating Elements via React CDN

Steps:
1. Create root
2. Create element
3. Append element in root

We did all of this inside the `<script></script>` tag first.

### `React.createElement(tag, [props], [children])`

- **Tag**: an HTML tag like `h1`, `div`, etc.
- **Props**: like `class`, `id` of that tag (can be an object or `null`, where `null` is the same as an empty object).
- **Children**: the content of the tag — like what we use in `.appendChild()`.

It is a top-level API of ReactJS which is used to create an element, similar to `document.createElement()` in the DOM.

### `ReactDOM.createRoot(document.getElementById("root"))`

Now, in React, we have to create a **root**, so that we can tell the JS engine that we want to run our React application in that place. To do this, ReactDOM contains APIs to render React components on the client (in the browser).

Basically, we select the `div` we want to use as our root (here, the one with `id="root"`), and React mounts our entire app inside it. React only takes control of that specific div — everything else on the page, outside the root, is untouched by React.

This API is a client-side API that lets you create a root to display React components inside a browser DOM node. It returns an object with two functions/methods: **`render`** and **`unmount`**.

### `root.render(reactNode)`

Helps to display a piece of JSX ("React node") or a React element (created by `React.createElement()`) into the React root's browser DOM node. It returns `undefined`.

```js
<script>
  const heading = React.createElement(
    "h1",
    {},
    "Namaste Everyone !!"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
</script>
```

---

## 10. What Does `React.createElement()` Actually Return?

If we `console.log(heading)`, we don't get plain HTML — we get an **object**.

```js
{
  $$typeof: Symbol(react.element),
  key: null,
  props: { children: 'Hello from React!!' },
  ref: null,
  type: 'h1',
  _owner: null,
  _store: { validated: false },
  ...
}
```

So `heading` is basically a React `h1` element — and a React element is nothing but a normal JS object.

This object has a `props` field, which holds the children and attributes we passed while creating the element via `React.createElement`:

```js
props: {
  children: 'Hello from React!!',
  id: 'heading'
}
```

**What does `root.render(heading)` do, since `heading` is just an object here?**

It basically takes that object, processes it, and converts it into the actual `<h1>` HTML tag, then renders it in the browser.

---

## 11. `{}` — What Does It Denote?

```js
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Namaste Everyone"
);
```

Whatever we pass inside `{}` goes in as the **tag attributes** of the `h1` (e.g. `id`, `className`, `style`, etc.).

React will overwrite everything inside `"root"` and replace it with whatever is given inside `render()`.

---

## 12. React Overwrites the Root — Examples

**Example 1 — inserting an element with an id:**

```js
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Namaste Everyone !!"
);
```

Result:
```html
<div id="root">
  <h1 id="title">Namaste Everyone !!</h1>
</div>
```

**Example 2 — if the root already has children, React overrides them:**

If there's already a heading inside root, and then we write React code that renders another `h1` into root, it **overwrites** the previous content.

1. First, the browser prints the initial HTML we wrote.
2. Then it goes to the React code we wrote and implements it, overriding whatever was there.

But anything *outside* the root div (say, above or below it) is **not** affected by React, since React only has control over the root div here.

**Example 3 — JSX naming differences:**

React tries to use HTML through JS with the help of JSX, and in JSX syntax, `class` is called `className`, and there are a few other changes:

```js
const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "container",
    style: {
      color: "blue",
      "background-color": "yellow",
    },
  },
  "Namaste Everyone !!"
);
```

**Example 4 — multiple children via an array:**

We can also insert multiple children elements inside the root element, by creating an element that contains all of those children in an array, and rendering that element inside the React root:

```js
const heading1 = React.createElement("h1", { id: "title" }, "Hello1 !!");
const heading2 = React.createElement("h1", { id: "title" }, "Hello2 !!");
const heading3 = React.createElement("h1", { id: "title" }, "Hello3 !!");

const container = React.createElement("div", {}, [heading1, heading2, heading3]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
```

`heading1`, `heading2`, and `heading3` are all React elements — remember, they're nothing but objects — and `render()` overwrites the contents of the root HTML element with those elements.

---

## 13. Creating the Same Code in a Separate File

It's not good practice to write all our lengthy code inside the `<script>` tag — so instead we write it in another file, say `App.js` (or `index.js`), and then inject that file in the HTML:

```html
<script src="App.js"></script>
```

We just moved the script code into a separate file — that's it.

To add CSS styles, create a new CSS file (e.g. `index.css`), import it in the `<head>` of `index.html`, and style the elements by selecting them (e.g. by `id`).

---

## 14. Creating Nested Elements in React

**One nested element:**

```html
<div id="parent">
  <div id="child">
    <h1>Nested Heading</h1>
  </div>
</div>
```

**Two nested elements — sibling case:**

```html
<div id="parent">
  <div id="child">
    <h1>Nested Heading</h1>
    <h2>Nested Heading 2</h2>
  </div>
</div>
```

Note: we also get a "needs unique key" error while creating siblings in some scenarios — leave that for now, we'll study why and how to fix it later.

**Three nested elements:**

```html
<div id="parent">
  <div id="child">
    <h1>Nested Heading</h1>
    <h2>Nested Heading 2</h2>
  </div>
  <div id="child">
    <h1>Nested Heading</h1>
    <h2>Nested Heading 2</h2>
  </div>
</div>
```

We *can* create this using plain `React.createElement()` calls, but the code gets messy and complicated fast.

**This is where JSX comes into play.** React can be written without JSX — JSX just makes our life easy!

This whole section was about the **core of React** — how we can create elements using core React (before JSX).

---

## 15. Why Is React Called "React"? (H.W.)

Because it was designed to help developers **"react"** to changes in the state of an application, by efficiently rendering and updating the UI in response to those changes.

---

## 16. Miscellaneous Important Points

- Most costly thing / operation in the browser is **DOM manipulation**.

> 📝 **Added:** This is exactly *why* React exists — it batches and minimizes direct DOM operations using a Virtual DOM diffing process, instead of touching the real DOM on every single change.

- We can inject React into any existing project too, without affecting the other areas. If we already have two `div`s above and below the root div, React will only affect the root div — the others will be displayed as usual.

