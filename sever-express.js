const express = require('express')
const app = express()
const port = 3001

app.get('/home', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>Nội dung HTML5</h1>
      <img src="banner.jpg" width="100%">
      <p>Văn bản HTML 5</p>
  </body>
  </html>`)
})
    
app.listen(port, () => {
 console.log(`Đang chạy ở cổng ${port}`)
})