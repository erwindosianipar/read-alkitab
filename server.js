const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
require('dotenv').config()

const app = express()

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))

app.use(staticFileMiddleware)

app.use(history({
  disableDotRule: true,
  verbose: true
}))

app.use(staticFileMiddleware)

app.get('/service-worker.js', function(req, res) {
  res.setHeader('Content-Type', 'text/javascript')
  res.setDefaultEncoding('utf-8')
  res.sendFile(path.resolve(__dirname, '/public/service-worker.js'))
})

app.get('/', function(req, res) {
  res.render(path.join(__dirname + '/dist/index.html'))
})

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port
  console.log('Starting application at port:', port)
})
