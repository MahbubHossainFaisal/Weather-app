const path = require('path') // Built in node module.So no need to install
const exrpess = require('express')


const app = exrpess()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsDirectoryPath = path.join(__dirname,'../templates')


//setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views', viewsDirectoryPath)

//setup static directory to serve
app.use(exrpess.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Mahbub Hossain Faisal'
    })
})

app.get('/about', (req,res) =>{
    res.render('about',{
        title:'Weather App',
        name: 'Mahbub Hossain Faisal'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        email: 'mahbubhossain249@gmail.com'
    })
})

app.get('/weather', (req,res) => {
    res.send('This is weather page')
})


app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})