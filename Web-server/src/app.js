const path = require('path') // Built in node module.So no need to install
const exrpess = require('express')
const hbs = require('hbs')

const app = exrpess()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsDirectoryPath = path.join(__dirname,'../templates/views')
const partialsDirectoryPath = path.join(__dirname,'../templates/partials')



//setup handlebar engine and views location and partials location
app.set('view engine','hbs')
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

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
        title:'About',
        name: 'Mahbub Hossain Faisal'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        email: 'mahbubhossain249@gmail.com',
        title: 'Help',
        name: 'Mahbub Hossain Faisal'
    })
})


app.get('/help/*',(req,res) =>{
    res.render('404',{
        title:'404',
        errorMessage: 'Help article not found!',
        name:'Mahbub Hossain Faisal'
    } )
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error:'You must provide an address!'
        })
    }

    res.send({
        forecast:'It is foggy',
        location: 'Dhaka',
        adddress: req.query.address
    })
})

app.get('*', (req,res) => {
    res.render('404',{
        title: '404',
        errorMessage:'Page not found!',
        name:'Mahbub Hossain Faisal'
        
    })
})


app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})