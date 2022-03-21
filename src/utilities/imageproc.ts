const sharp = require('sharp')

const imageproc = async (width: number, height: number, filename: string): Promise<void> => {
  await sharp(`./Images/${filename}.jpg`)
    .resize({
      width: Number(width),
      height: Number(height)
    })
    .toFile(`./Images/thumbnails/${filename}_${width}_${height}.jpg`)
}
const imageproctest = (width: number, height: number, filename: string): unknown => {
  sharp(`./Images/${filename}.jpg`)
    .resize({
      width: Number(width),
      height: Number(height)
    })
    .toFile(`./Images/thumbnails/${filename}_${width}_${height}.jpg`)
  const newfilepath = `./Images/thumbnails/${filename}_${width}_${height}.jpg`
  return newfilepath
}
export default { imageproc, imageproctest }
