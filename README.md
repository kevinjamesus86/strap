# strap
`git clone -b angular --single-branch https://github.com/kevinjamesus86/strap.git <new-name>` for crafting


**do this**

```sh
# clone angular branch
git clone -b angular --single-branch https://github.com/kevinjamesus86/strap.git <new-name>

# install dependencies
npm i && bower i

# and serve
npm run dev
```

**love for bower**

Feel free to `bower i -S <dependency>` and require it into a module. Por ejemplo:

```sh
# install and save jquery as a dependency
bower i -S jquery
```

and then

```js

// app/require/paths.js
define({
  // snip ...
  jquery: 'components/jquery/dist/jquery'
});

// later, in your awesome module
define(['jquery'], function($) {
  // $ stuff
});
```

Add or change files, watch the browser reload, woohoo :+1:
