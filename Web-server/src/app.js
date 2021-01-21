const path = require('path') // Built in node module.So no need to install
const exrpess = require('express')


const app = exrpess()


const publicDirectoryPath = path.join(__dirname,'../public')
//const publicDirectoryAboutPath =path.join(__dirname,'../public/about.html')
//const publicDirectoryHelpPath = path.join(__dirname,'../public/help.html')

app.use(exrpess.static(publicDirectoryPath))

//app.use(exrpess.static(publicDirectoryAboutPath))

//app.use(exrpess.static(publicDirectoryHelpPath))

app.get('/weather', (req,res) => {
    res.send('This is weather page')
})


app.listen(3000, ()=>{
    console.log('App is running on port 3000')
})