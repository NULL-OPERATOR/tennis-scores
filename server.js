const express = require('express')
const path = require('path')
const http = require('http')

// const hostname = '127.0.0.1';
const app = express()
const server = http.createServer(app)
const port = 3000

server.listen(port, () => {
  console.log('Server listening at port %d', port)
})

app.use(express.static(path.join(__dirname, 'public')))
