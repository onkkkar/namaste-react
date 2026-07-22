// index.js
// ---------
// Using React in a separate file instead of an inline <script> tag.
// Cleaner and easier to maintain as the app grows.

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
  'Hello from React !!', // content of the tag (children)
);

// React.createElement() returns a plain JS object (not real HTML yet).
// Logging it shows the underlying React element structure.
console.log(heading);

// 3. Render the heading inside the root div using .render()
// This converts the React element object into real HTML and mounts it
// inside the root div.
root.render(heading);
