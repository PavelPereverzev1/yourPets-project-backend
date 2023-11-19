const Jimp = require('jimp');

const resizeImage = async path => {
  const image = await Jimp.read(path);
  image.resize(250, 250);
  await image.writeAsync(path);
};

module.exports = resizeImage;