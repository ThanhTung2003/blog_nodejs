const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require ('express-handlebars');


//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/Home', (req, res) => {
  
  res.send('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})