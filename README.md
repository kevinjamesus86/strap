# strap
git clone https://github.com/kevinjamesus86/strap.git <new name>.. for crafting


**do this**

```sh
# clone under new name
git clone https://github.com/kevinjamesus86/strap.git <such great project>

# install dependencies
npm i

# and serve
npm run dev
```

**love for bower**

Feel free to `bower i -S <dependency>` and require it into a module. Por ejemplo:

```sh
# install and save jquery as a dependency
bower i -D jquery
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
