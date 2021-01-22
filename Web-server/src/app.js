const path = require('path') // Built in node module.So no need to install
const exrpess = require('express')


const app = exrpess()


const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine','hbs')

app.use(exrpess.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index')
})

app.get('/weather', (req,res) => {
    res.send('This is weather page')
})


app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})