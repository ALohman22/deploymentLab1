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

app.get('/warnin2', (req,res) => {
try{
    rollbar.log('They Pressed it AGAIN!!!')
    res.status(200).send('Why do you insist on doing the exact opposite of what i say?!')
} catch(err) {
    console.log(err)
}
})

app.get('/warnin3', (req,res) => {
    try{
        rollbar.log('This is annoying...')
        res.status(200).send('Okay... not funny anymore...')
    } catch(err) {
        console.log(err)
    }
    })
app.get('/warnin4', (req,res) => {
    try{
        rollbar.log('Please send help:(')
        res.status(200).send("I dont know why I thought that would've Worked...")
    } catch(err) {
        console.log(err)
    }
    })
        
app.get('/warnin5', (req,res) => {
    try{
        rollbar.log('They wont stop...')
        res.status(200).send("OK pal... Here's a button for you! Press it! Go ahead! Do it!")
    } catch(err) {
        console.log(err)
    }
    }) 
        
app.get('/warnin6', (req,res) => {
    try{
        rollbar.log('I took care of it!')
        res.status(200).send('WHAT NOW PUNK')
    } catch(err) {
        console.log(err)
    }
    })

app.use(express.static(`${__dirname}../../public`))



app.listen(4000, console.log(`App running on port 4000!`))