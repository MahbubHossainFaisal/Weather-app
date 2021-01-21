const exrpess = require('express')


const app = exrpess()


app.get('', (req,res)=> {

    res.send('Hello,This is express')
})

app.get('/help', (req,res)=> {
    res.send('This is help page')
})

app.get('/about', (req,res)=> {
    res.send('This is about page')
})

app.get('/weather', (req,res) => {
    res.send('This is weather page')
})


app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})