this a readme explaining the proccess in which the input width ,height and file name go into my project. 
first the width,height,and filename are extracted from the url using the query method,at first the attributes go through two diffrent phases of checking if the height and width are numbers and the filename is a string , if the attributes are not valid a res.send is excuted with the massage 'parameters are not correct' in which this is an error massage dispalyed for the user,if the parameters are valid the code procceds to check if the image is in the images folder this is done by using 
"    await fs.readFile(path1, (err: unknown) => {
      if (err) {
        res.send('This file is not available')
      } else {
        fs.readFile(path2, async (err: unknown) => {
          if (err) {
            await imageproc(width1,height1,filename)
            await res.sendFile(`/${filename}_${width1}_${height1}.jpg`, { root: `Images/thumbnails/` })
          } else {
            res.sendFile(`/${filename}_${width1}_${height1}.jpg`, { root: `Images/thumbnails/` })
          }
"
as seen in this part of the code it first checks if the file with the accept valid parameters is in the images folder ,if not it acts upon the error and send a "This file is not available",else the file is present in the images folder so,the next phase is verifying if the file with the inputed paramaters is present also in the proccessd folder aswell which is called thumbnails this is done here "fs.readFile(path2, async (err: unknown)" thus being veridied for exsisting. if it is present then 
" res.sendFile(`/${filename}_${width1}_${height1}.jpg`, { root: `Images/thumbnails/` })" is done and displaying the image
dirictly from the thumbnails folder without proccessing since it has aleardy been resized.other than the previous steps
the remaing condition is if the image have not been resized and it present in the images folder.so,
" await imageproc(width1,height1,filename)
            await res.sendFile(`/${filename}_${width1}_${height1}.jpg`, { root: `Images/thumbnails/` })"
is done in which it resizes the image ,displays it and sends the resized version to the thumbnail folder.
some notes:
1-hope this clarfies the intended changes as for the error handling massages as i beleive they are handeled in a simple effiecent way




urls to use to check 

"http://localhost:3000/?width=600&height=1&filename=seif" this will return This file is not available in the images folder please insert a filename for an exsisting one
"http://localhost:3000/?width=600&height=500&filename=image2" will resize and create a new file to put in thumbnails. one firing the url again it will not process and fetch the exsisting file from thumbnails.
