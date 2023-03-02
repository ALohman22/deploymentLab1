const express = require('express')
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e9eb93f322174f30814c7a1cfd702437',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/warning', (req,res) => {
try{
    rollbar.log('They Pressed it!!!')
    res.status(200).send('I told you not to press that!')
} catch(err) {
    console.log(err)
}
})



app.use(express.static(`${__dirname}../../public`))



app.listen(4000, console.log(`App running on port 4000!`))