var getImagePixels = require('get-image-pixels');
var ndarray = require('ndarray');
var dtype = require('dtype');

function ndarrayFromImage(img, type) {
  var pixels = getImagePixels(img);
  var data = type 
    ? new (dtype(type))(pixels)
    : pixels;

  return ndarray(data, [img.width, img.height, 4]);
}

module.exports = ndarrayFromImage;