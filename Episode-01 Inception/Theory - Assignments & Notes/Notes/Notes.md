- what is emmet

--- React

it is a js libraray with varialbes functions etc and react makes our life easier written by facebook developers
Browser dose not understand react code

library vs framework

libraray takes minimum effort to put it into the code

To use react we need to get react into ourt project first

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

SO when we injected tehe 2 files we inhjected the superpowers of react and react-dom into the project to use it in out project and build alrge scale apps

