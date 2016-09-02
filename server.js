const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

/* server configuration */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

/* static route */
app.use(express.static(__dirname + '/public'))

/* config for browser history in react */
app.get('*', (req, res) =>
 res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
)

app.listen(process.env.PORT || 8080, () =>
 console.log('app listening')
)
