ndarray-from-canvas
===================
### Extracts a canvas RGBA pixels as a ndarray

Extracts a canvas RGBA pixels as a ndarray with shape `[width, height, 4]`. If a [dtype](https://github.com/shama/dtype) is provided as a second parameter, allocates a new typed array of the given type for use as the ndarray underlying data.

Install
-------

```bash
$ npm install ndarray-from-canvas
```

Usage
-----

```javascript
var ndarrayFromCanvas = require('ndarray-from-canvas');

var canvas = document.getElementById('canvas');
var arr = ndarrayFromCanvas(canvas/*, 'float32' */); // takes an optional dtype as a second parameter

/*
  arr now contains the canvas RGBA pixels as a ndarray 
  of shape [canvas.width, canvas.height, 4]
*/

var value = arr.get(0, 0, 0); // will return the red value for the pixel of coordinates [0, 0].
```