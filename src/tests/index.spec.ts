import { response } from 'express'
import supertest from 'supertest'
import app from '../index'
import checker from '../utilities/checker'
import imageproc from '../utilities/imageproc'

// create a request object

const request = supertest(app)
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})

describe('check if the image is sent', () => {
  it('checking if the image is sent', async () => {
    const imagesent = await response.get
    expect(imagesent).toBeTruthy()
  })
})
describe('check if the number in the url is integer', () => {
  it('checking if sending 300 as width in the url it will be recoginzed as a valid input  ', async () => {
    expect(checker.numberchecker(300)).toBeTruthy()
  })
})
describe('check if the number in the url is integer', () => {
  it('checking if sending 500 as height in the url it will be recoginzed as a valid input  ', async () => {
    expect(checker.numberchecker(500)).toBeTruthy()
  })
})
describe('check if the number in the url is integer', () => {
  it('checking if sending seif as height in the url it will be recoginzed as a valid input  ', async () => {
    expect(checker.numberchecker(`seif` as unknown as number)).not.toBeTruthy()
  })
})
describe('check if the new proccessed image is being sent the thumbnail dirictory', () => {
  it('check if the new proccessed image is being sent the thumbnail dirictory', async () => {
    expect(imageproc.imageproctest(300, 400, `seif`)).toBe(`./Images/thumbnails/seif_300_400.jpg`)
  })
})
