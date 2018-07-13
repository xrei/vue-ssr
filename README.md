# Server Side Rendering template

> *Server Side Rendering / Progressive Web Application template based on Vue.js hackernews clone*

---

## Documentation

- If you have any questions how the SSR works in this template, please read [official Vue.js SSR Guide](https://ssr.vuejs.org/)
- Check out the [official Vue.js guide](http://vuejs.org/guide/) for general information about Vue that is not specific to this template.
- It's highly recommended to get know how webpack works, in case if you want to make changes to your build output.

## Features
- Scalable architecture from small to large projects
- Best `SEO` support with [vue-meta](https://github.com/declandewet/vue-meta)
- Auto-generated service worker for **PWA** support on production
- Linting with `ESlint`
- **Vue** - **Vue-router** - **Vuex** under the hood!
- Easy to use installer
- More soon!

## Usage

This is a project template for old version [vue-cli](https://github.com/vuejs/vue-cli).
Even if you have version 3 of vue-cli, you can install `@vue/cli-init`

And use it as you used before.

``` bash
$ npm i -g @vue/cli
$ npm i -g @vue/cli-init
$ vue init xrei/vue-ssr project-name
$ cd project-name
$ npm install
$ npm run dev
```

If port 7070 is already in use on your machine you must change the port number in `.env`. Otherwise `npm run dev` will fail.

### TODO

- [x] ~~Add CSS preprocessors~~
- [x] ~~Add ESLint plugin~~
- [x] ~~Add vue-meta plugin~~