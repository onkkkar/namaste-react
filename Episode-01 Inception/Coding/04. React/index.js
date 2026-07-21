// Using React in separate file
// 1. Create Root
// Creating  a Root and rendering something inside is job of ReactDOM using .createRoot()
// () of .createRoot() contains the root div where we want to render our React code
const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

// 2. Creating h1 Element
// Creating an elemnet is job of React using .createElement()
// () : contains 3 things : tag name, attributes of the tag, content of the tag as string ('tag-name', {attributes}, 'content')
const heading = React.createElement(
  'h1', // tag name
  {id: 'heading'}, // contains attributes of the tag in this case id = 'heading'
  'Hello from React !!', // content of the tag : Children of the tag, can be string or another element
);

console.log(heading); // React.createElement() returns an object which is stored in heading variable

// 3. Rendering the heading inside the root div using .render()
// This converts the React element object into HTML and renders it inside the root div

root.render(heading);
