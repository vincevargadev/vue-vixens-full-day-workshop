## [Chapter 1: Introducing the My Pet Shop Web App](https://vuevixens.github.io/docs/workshop/full-day/ch1.html)

###  Use `vue-cli` to scaffold the app

> I didn't follow the instructions strictly, but I assume that their solution is based on Vue CLI, too...

First of all, make sure you have `node` and `npm` installed

```
$ node --version
v11.11.0
$ npm --version
6.7.0
```

Then, [install the Vue CLI](https://cli.vuejs.org/guide/installation.html)

```
$ npm install -g @vue/cli
$ vue --version
3.5.0
```

Then create the inital project structure using `vue` from the command line

```
$ vue create full-day-workshop
```

[This will create a bunch of files](https://github.com/vargavince91/vue-vixens-full-day-workshop/commit/4a269a991dff88d9342bb6f6274cbc35e9759ecc) for us and when you run `npm install`, it'll "download the internet" into `node_modules` [(it's usually not version-controlled)](https://github.com/vargavince91/vue-vixens-full-day-workshop/blob/master/.gitignore#L36).

You can run `npm run serve`, then go to [`localhost:8080`](http://localhost:8080/).

### What have we got there?

* [`main.js`](./src/main.js): This is the main starting point of a Vue.js app.
    * we import `Vue` from its `npm` package: `import Vue from 'vue'`
    * [more line-by-line info](https://github.com/vargavince91/vue-vixens-full-day-workshop/commit/3c2df1ff8246ffe493c451a99f6fbaa19a911cbb)
* [`package.json`](./package.json): the Vue CLI imports all the needed dependencies from `npm` to build the app; you can always check out the root `package.json` to find out which dependencies are needed

### Install Vuetify

```
$ npm install --save vuetify
```

This will [update your `.package.json` file](https://github.com/vargavince91/vue-vixens-full-day-workshop/commit/9d528851bf5b19a6ebd5dc127d72bb3e9ced01cb). After `vuetify` is installed, [import it and register it with Vue](https://github.com/vargavince91/vue-vixens-full-day-workshop/commit/1f07a4148d216315c998de8dec668636e974ae1c).

Then, we [add the some boilerplate template](https://github.com/vargavince91/vue-vixens-full-day-workshop/commit/df77e505e172613941a86d431520a6df2e235a44) in `App.vue` that will create a storefront.

As [inserted some SCSS](https://github.com/vargavince91/vue-vixens-full-day-workshop/commit/1f8c7079b16584a3d24f4fdbbf54e58b12358e56) into our `App.vue` file, we also added some CSS rules for `.orange-green` selector. Adding this to the `main` element would cause the app theme to change.

We can [add a button for switching the theme](https://github.com/vargavince91/vue-vixens-full-day-workshop/commit/5e0a2c3e83f8441f447330629d80c3266a75ce73) between the two themes.

You might have spotted, that we are not using the `HelloWorld` component anymore. [Let's remove the `HelloWorld` component.](a31e1bb97728863def1361d6bbf98d025f8d4336)
