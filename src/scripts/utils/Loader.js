export default class Loader {
  constructor() {
    this.images = {};
  }

  setImage(key, src, tileset) {
    const img = new Image();
    const d = new Promise((resolve, reject) => {
      img.onload = () => {
        this.images[key] = img;
        resolve(img);
      };
      img.onerror = () => {
        reject(Error(`Could not load image: ${src}`));
      };
    });

    img.src = src;
    img.tileset = tileset;
    img.tiles = tileset.tiles;
    if (tileset.tileproperties) {
      img.tilenames = {};
      [...Array(tileset.tilecount)].forEach((_, count) => {
        if (tileset.tileproperties[count] && tileset.tileproperties[count].name) {
          const { name } = tileset.tileproperties[count];
          img.tilenames[name] = count;
        }
      });
    }

    return d;
  }

  getImage(key) {
    return (key in this.images) ? this.images[key] : null;
  }
}
