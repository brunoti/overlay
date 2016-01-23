# Overlay.Js

Overlay.js is a plugin to facilitate the creation of loading layers above the page and elements.

## Install

With npm:
```
npm install overlay-js
```
With bower:
```
npm install overlay-js
```
Or you can just [download a ZIP](https://github.com/brunoti/overlay/archive/master.zip).

## Setup

###### Add some css (you can require the Less or Sass or Stylus files too):
``` html
<link rel="stylesheet" href="overlay.css">
```

###### With Browserify
``` js
var overlay = require('overlay-js');
```

###### Browser
``` html
<script src="overlay.js"></script>
```

## Usage
``` js
var loading = overlay(document.body);

// Defines a function to be executed before this overlay
loading.before(function(element) {});

// Shows the Overlay above the passed element and 
// executes the function passed as argument
loading.show(function(element) {});

// Hides the Overlay above the passed element and 
// executes the function passed as argument
loading.hide(function(element) {});
```

