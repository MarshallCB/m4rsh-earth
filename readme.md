# Basic SSR Website (Server-side rendered)

- [Using this template](https://github.com/MarshallCB/howww/tree/master/basic-ssr#using-this-template)
- [How it works](https://github.com/MarshallCB/howww/tree/master/basic-ssr#how-it-works)
- [Next Steps](https://github.com/MarshallCB/howww/tree/master/basic-ssr#next-steps)

## Using this template

[What is npm?](https://www.npmjs.com/get-npm)

### 1. Install [degit](https://github.com/Rich-Harris/degit) 
```bash
  npm i -g degit
```

### 2. Copy project template
(This will copy the files to your current folder)
```bash
  degit MarshallCB/howww/basic-ssr
```

### 3. Install necessary dependencies from `package.json`
> Tip: `npm i` is short for `npm install`
```bash
  npm i
```

### 4. Run locally
```bash
  npm run dev
```

## How it works

[`routo`](https://github.com/MarshallCB/routo) will build all files from `/source` into `/public` (except for files that start with a `.` or `_`, these are intentionally ignored). Files with two extensions (e.g. `index.html.js`, `global.css.js`) will drop the `.js` during the build process (--> `index.html`, `global.css`). This allows you to write complex logic to build static files that can be interpretted by the browser!

[`serve`](https://github.com/vercel/serve) will create a development web server to display the files in `/public` to your web browser at `localhost:5000`. Every time you edit a file in `/source`, just hit refresh on the browser to see your new changes.

[`µcontent`](https://github.com/WebReflection/ucontent) is the HTML and CSS renderer. It does some nifty stuff to transform everything inside the backticks ( \` ) into proper, optimized HTML/CSS. In JavaScript, these are called template literals, and their power comes from their ability to interpolate variable values within `${}`. Check out this example:
```js
  let x = "coffee"
  let y = `My favorite thing is ${x}`
  console.log(y) // --> "My favorite thing is coffee"
```

## Next Steps
- [ ] Edit the `package.json` to describe your project
- [ ] Create your own pages by writing HTML (use `/source/index.html.js` as a starting point)
- [ ] Create custom CSS styles in `/source/styles/global.css.js`
- [ ] [Generate a custom favicon](https://realfavicongenerator.net). Replace the files in `/source/favicon` and the favicon code in `/source/_document.js`
- [ ] Deploy to a hosting service like [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for free!
- [ ] Check out my [other templates](https://github.com/MarshallCB/howww) for more in-depth sites!