// ============================================================
// React.createElement() - Nested Elements
// ============================================================

// Create the following HTML structure:
//
// <div id="parent">
//   <div id="child">
//     <h1>Nested Heading</h1>
//     <h2>Nested Heading 2</h2>
//   </div>
// </div>

// ============================================================
// 1. Create the React Root
// ============================================================

// Select the root div from index.html and create a React Root.
const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

// ============================================================
// CASE 1 : Single Nested Element
// ============================================================

// HTML Structure:
//
// <div id="parent">
//   <div id="child">
//     <h1>Nested Heading</h1>
//   </div>
// </div>

// ----------------------------
// Step 1 : Create the leaf node
// ----------------------------

const heading = React.createElement(
  'h1',
  null,
  'Nested Heading',
);

// ----------------------------
// Step 2 : Create the child
// ----------------------------

// child depends on heading,
// therefore heading must already exist.

const child = React.createElement(
  'div',
  { id: 'child' },
  heading,
);

// ----------------------------
// Step 3 : Create the parent
// ----------------------------

// parent depends on child,
// therefore child must already exist.

const parent = React.createElement(
  'div',
  { id: 'parent' },
  child,
);

// ----------------------------
// Step 4 : Render
// ----------------------------

root.render(parent);

/*

============================================================
CASE 1 - FLOW OF CREATION
============================================================

HTML Tree

        <div id="parent">
                │
                ▼
         <div id="child">
                │
                ▼
              <h1>

------------------------------------------------------------

Creation Order

① heading
      │
      ▼
② child
      │
      ▼
③ parent
      │
      ▼
④ root.render(parent)

============================================================

*/

// ============================================================
// CASE 2 : Multiple Nested Elements
// ============================================================

// HTML Structure:
//
// <div id="parent">
//   <div id="child">
//     <h1>Nested Heading</h1>
//     <h2>Nested Heading 2</h2>
//   </div>
// </div>

// ----------------------------
// Step 1 : Create the leaf nodes
// ----------------------------

const heading1 = React.createElement(
  'h1',
  null,
  'Nested Heading',
);

const heading2 = React.createElement(
  'h2',
  null,
  'Nested Heading 2',
);

// ----------------------------
// Step 2 : Create the child
// ----------------------------

// Since child contains TWO children,
// pass them either:
//
// 1. As separate arguments
//      heading1,
//      heading2
//
// OR
//
// 2. As an array
//      [heading1, heading2]

const childMultiple =
  React.createElement(
    'div',
    { id: 'child' },
    [heading1, heading2],

    // OR

    // heading1,
    // heading2
  );

// ----------------------------
// Step 3 : Create the parent
// ----------------------------

const parentMultiple =
  React.createElement(
    'div',
    { id: 'parent' },
    childMultiple,
  );

// ----------------------------
// Step 4 : Render
// ----------------------------

// Uncomment this line to render Case 2.
// (Only one root.render() should be active at a time.)

// root.render(parentMultiple);

/*

============================================================
CASE 2 - FLOW OF CREATION
============================================================

HTML Tree

            <div id="parent">
                    │
                    ▼
             <div id="child">
               ┌──────────┐
               ▼          ▼
             <h1>      <h2>

------------------------------------------------------------

Creation Order

① heading1

② heading2
      │
      ▼
③ childMultiple
      │
      ▼
④ parentMultiple
      │
      ▼
⑤ root.render(parentMultiple)

============================================================


RULE TO REMEMBER

Leaf Elements
(h1, h2, p, img, button...)
        │
        ▼
Immediate Parent
        │
        ▼
Higher Parent(s)
        │
        ▼
root.render(topLevelParent)

Always create React elements from the
INSIDE → OUTSIDE (Bottom → Up)

Then render the TOP-LEVEL parent.

============================================================

*/
