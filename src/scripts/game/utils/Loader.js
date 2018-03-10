export default class Loader {
  constructor () {
    this.images = {};
  }

  setImage (key, src) {
    let img = new Image();
    let d = new Promise( (resolve, reject) => {
      img.onload = () => {
        this.images[key] = img;
        resolve(img);
      };

      img.onerror = () => {
        reject('Could not load image: ' + src);
      };
    });

    img.src = src;
    return d;
  }

  getImage(key) {
    return (key in this.images) ? this.images[key] : null;
  }
}
