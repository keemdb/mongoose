const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://keemdb2:test1234@boilerplate.v3hxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true, 
	useUnifiedTopology: true, 
	useCreateIndex: true, 
	useFindAndModify: false
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})