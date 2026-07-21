- what is emmet
- - how to enable in when we code -> using ! + Tab button

--- using Simple HTML

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


--- Using Vanilla js

. create root div element
. create element h1
. write text of h1 using js
. append h1 inside the root div

--- React

it is a js libraray with varialbes functions etc and react makes our life easier written by facebook developers
Browser dose not understand react code

library vs framework

libraray takes minimum effort to put it into the code

--- To use react we need to get react into ourt project first

-- Ways to get react into project :

1. CDN (Content Delivery Network)
   --- what is CDN?
   Ans : A place / website where react files are hosted and we jsut get them from there and using in our project using cdn links. Both react and react-dom are there over the cdn
   --- CDN react gives u the links to where those react files are hosted which u can import and use for yourself

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

-- What is crossorigin attribute ?

cross origin server resource is an http header based mechanism that allows a server to indicate anty cross origins (domain, scheem or pot) othe that irs own from which a browser should permit loading resources.

cross origin attribute provide support for COR. if we write crossorigin in script means that the script should be loaded from a different origin

-- Why there are 2 files first of all ?

1. First File (react) is : CORE File of React framework algorithm

2. Second File (ract-dom) is : File useful for DOM Operations, which we need to modify the DOM(Document object model)

this is why we have 2 different files

--- Why 2 files not one ?
we can not put all of them in just 1 file

react dose not onyl work on browsers ... in mobile we use react native, react 3d is also there etc ...

so there are different fucntions etc used in different places

so the firs tfiel is the core react

2nd is the bridge betwen browsers and ract called react-dom in web dev case in react native might be different\

-- What is ther inside these links ?

--- open first link

```js
https://unpkg.com/react@18/umd/react.development.js
```

-- random big code of react written in javascript as we know ract is a js library written by some facebook developers
-- when we import links we import these js code into our project

now our project has react inside it and we can use react, now whatever code we write we cna write using react and browser and project will understand it

--- what happens when we import them into our project ?
its blank we ahvent written anything but when we open index.html in browser and open console and type `React` we can see react being there means import success and we can use react

```js
{Children: {…}, Fragment: Symbol(react.fragment), Profiler: Symbol(react.profiler), Component: ƒ, PureComponent: ƒ, …}
```

u can open it and see it has a lot of components and functions which we cna use provided by react => some js code written by facebook developers which we imported using cdn this is teh react we injected from the scripts

--- open second link

```js
https://unpkg.com/react-dom@18/umd/react-dom.development.js
```

its blank we ahvent written anything but when we open index.html in browser and open console and type `ReactDOM` we can see react-dom being there means import success and we can use react-dom

```js
{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {…}, createPortal: ƒ, createRoot: ƒ, findDOMNode: ƒ, flushSync: ƒ, …}
```

u can open it and see it has a lot of things given by react-dom we can use provided by react-dom

SO when we injected the 2 files we injected the superpowers of react and react-dom into the project to use it in out project and build alrge scale apps

--- Creating via React CDN

. create root
. create element
. append element in root

- what does {} do while we create element iva react


we did all in the script tag via react <scrip></script>


--- Creating same but in a separate file

its not good to write all length code inside the script tag hence we write it in aother file say App.js
then we inject the file in html

```js
<script src = "App.js"></script>
```

we jsut moved the script code in a separte file thats it

now to add css styles create a new css file say index.css and import in head of index.html and style your text etc via selecting them ... as shown


-- But what is React.createElement() ?? what do we get if i console the output of what we stored in hading when we created h1 element

ans : we get an Object stored in teh variablle heading and not jsut some HTML in it say in this case an h1 tag. React.createElement() returns an object which is stored in heading variable.
So heading is basically a React h1 element. React elemen is nothing but a normal js object

this object has props in it which has the children & attributes we pass while making a react element using React.createElement
 props{
   children: ' Hello from React!!'
   id: heading
 }

-- waht does react.render(heading) does as heading is an object here??

ans : It basically converts the object process and makes that html tah h1 heading and renders in the browser.

--- Creating NESTED ELEMENTS IN REACT

explain nicely 1 nested element
<div id="child">
//     <h1>Nested Heading</h1>
//   </div>

2 nested elemnts sibling case
// <div id="parent">
//   <div id="child">
//     <h1>Nested Heading</h1>
//     <h2>Nested Heading 2</h2>
//   </div>
// </div>


also we get an error whiel creating siblings need unique key leave it for now we will study why and how to fix this later

now 3rd

// <div id="parent">
//   <div id="child">
//     <h1>Nested Heading</h1>
//     <h2>Nested Heading 2</h2>
//   </div>

<div id="child">
//     <h1>Nested Heading</h1>
//     <h2>Nested Heading 2</h2>
//   </div>
// </div>

now we can create it but code will get messy and start getting  complicated !! messy and untidy

this is where JSX comes into play
reat is known as react bcoz it as designed tohelp the developers react to cahngs inm the state of the applicatyin by efficiently rendering and updating the ui in respose to the changes

React cna not only be written in JSX JSX just makes our life easy !!
this was core of react how we can create elements usig core react !!

--- Most costly thing / operation is DOM manipualtion


-- Order of Filsin index.html ?? important why

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      http-equiv="X-UA-Compatible"
      content="ie=edge"
    />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="style.css"
    />
  </head>
  <body>
    <!-- Root Div -->
    <div id="root"></div>

    <!-- React CDN  -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <!-- Script -->
    <script src="index.js"></script>
  </body>
</html>

```

we need to keep ract cdn files before index.js import !! bcoz the .js file is using react in it

can we write `crossorigin` in <script src = 'index.js'></script> ?
 ---


 --- is we already have a heading inside root and tehn we write this ract code and render another h1 in root div it overwrites that prev one

 1. first the browser prints the initial html we wrote
 2. 2. then it goers to the react code file we write and implements that and overrides it

but anything thats outisde the root div say top adn bottom of root are not affecerd by react as react only has the control over the root div here

