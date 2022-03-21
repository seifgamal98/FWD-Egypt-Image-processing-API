import express, { Application, Request, Response } from 'express'
import checker from './utilities/checker'
import imageproc from './utilities/imageproc'
// const sharp = require('sharp')
import morgan from 'morgan'
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000
const app: Application = express()
const fs = require('fs')
app.use(morgan('short'))

app.get('/', async (req: Request, res: Response):Promise<void> => {
  const height1 = (await req.query.height) as unknown as number
  const width1 = (await req.query.width) as unknown as number
  const filename = (await req.query.filename) as unknown as string
  const widthchecker = (await checker.numberchecker(width1)) as unknown as number
  const heightchecker = (await checker.numberchecker(height1)) as unknown as number
  // const filenamechecker=await checker.stringchecker(filename) as unknown as string
  const path1 = `./Images/${filename}.jpg`
  const path2 = `./Images/thumbnails/${filename}_${width1}_${height1}.jpg`
  if (widthchecker === 0 || heightchecker === 0) {
    res.send(
      `parameters are not correct either the the values are below zero or equal to zero or the string is invalid`
    )
  } else {
    await fs.readFile(path1, (err: unknown) => {
      if (err) {
        res.send(
          'This file is not available in the images folder please insert a filename for an exsisting one'
        )
      } else {
        fs.readFile(path2, async (err: unknown) => {
          if (err) {
            await imageproc.imageproc(width1, height1, filename)
            await res.sendFile(`/${filename}_${width1}_${height1}.jpg`, {
              root: `Images/thumbnails/`
            })
          } else {
            res.sendFile(`/${filename}_${width1}_${height1}.jpg`, { root: `Images/thumbnails/` })
          }
        })
      }
    })
  }
})
// start express server Images\image1.jpg
app.listen(PORT, ()=> {
  // console.log(`Server is starting at prot:${PORT}`)
})

export default app
