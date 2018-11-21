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
        reject('Could not load image: ' + src);
      };
    });

    img.src = src;
    img.tileset = tileset;
    img.tiles = tileset.tiles;
    img.tilenames = tileset.tileproperties && this.makeNameLookup(tileset);

    return d;
  }

  getImage(key) {
    return (key in this.images) ? this.images[key] : null;
  }

  makeNameLookup(tileset) {
    const tileNames = {};
    for (let count = 0; count < tileset.tilecount; count++) {
      if (tileset.tileproperties[count] && tileset.tileproperties[count].name) {
        const { name } = tileset.tileproperties[count];
        tileNames[name] = count;
      }
    }
    return tileNames;
  }
}
