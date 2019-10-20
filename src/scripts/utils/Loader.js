export default class Loader {
  constructor() {
    this.images = {};
  }

  createOffscreenCanvas(image, scale) {
    const canvas = document.createElement('canvas');
    const { tileset } = image;
    let {
      imagewidth,
      imageheight,
      tilewidth,
      tileheight,
      tiles,
      tileproperties,
      tilecount,
    } = tileset;

    canvas.scale = scale;
    canvas.height = imageheight * scale;
    canvas.width = imagewidth * scale;
    canvas.tiles = tiles;
    canvas.tileset = {
      ...tileset,
      imageheight: imageheight * scale,
      imagewidth: imagewidth * scale,
      tileheight: tileheight * scale,
      tilewidth: tilewidth * scale,
    };
    if (tileproperties) {
      canvas.tilenames = {};
      [...Array(tilecount)].forEach((_, count) => {
        if (tileproperties[count] && tileproperties[count].name) {
          const { name } = tileproperties[count];
          canvas.tilenames[name] = count;
        }
      });
    }

    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    return canvas;
  }

  setImage(key, src, tileset) {
    const img = new Image();
    img.src = src;
    img.tileset = tileset;
    img.tiles = tileset.tiles;
    img.scaled = [];
    if (tileset.tileproperties) {
      img.tilenames = {};
      [...Array(tileset.tilecount)].forEach((_, count) => {
        if (tileset.tileproperties[count] && tileset.tileproperties[count].name) {
          const { name } = tileset.tileproperties[count];
          img.tilenames[name] = count;
        }
      });
    }

    return new Promise((resolve, reject) => {
      img.onload = () => {
        this.images[key] = img;
        img.scaled[1] = this.createOffscreenCanvas(img, 1);
        resolve(img);
      };
      img.onerror = () => {
        reject(Error(`Could not load image: ${src}`));
      };
    });
  }

  getImage(key, scale) {  
    const image = (key in this.images) ? this.images[key] : null;
    if (image && (scale === undefined || scale === null || scale % 1 !== 0)) {
      return image;
    } else if (!image.scaled[scale]) {
      image.scaled[scale] = this.createOffscreenCanvas(image, scale);
    }
    return image.scaled[scale];
  }
}
