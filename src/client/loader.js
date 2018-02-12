//
// Asset loader
//

var images = {};

function loadImage (key, src) {
  let img = new Image();

  let d = new Promise( (resolve, reject) => {
    img.onload = () => {
      images[key] = img;
      resolve(img);
    };

    img.onerror = () => {
      reject('Could not load image: ' + src);
    };
  });

  img.src = src;
  return d;
};

function getImage (key) {
  return (key in images) ? images[key] : null;
};

module.exports = { loadImage, getImage };
