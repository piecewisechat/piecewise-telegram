# Sample Webpack Addon

This directory includes a sample addon that can be compiled with Webpack. You may find this useful if you depend on, for example, third-party client-side libraries for your addon.

## The gist of this

Your Webpack addon must export, a default singular class library that binds to `plugin` and extends `LazuritePlugin`. This is easier said than done, thus this example.

## Get it running

`cp sample-webpack-addon /my/sample/addon/dir && cd /my/sample/addon/dir && npm i && webpack --watch --mode development`

Linking the resulting `dist/main.js` to your addons folder will make it show up in Piecewise. Remember, you'll have to refresh the editor whenever you make a change.

## Distribute your addon

Once your addon is finished, build it:

`webpack build --mode production`

Then, the resulting `main.js` in `dist` should be all you need. To follow convention, name it using reverse-DNS notation, i.e. `im.piecewise.addon.js`.