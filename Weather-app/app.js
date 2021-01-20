const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')



geocode('Narayanganj',(error,locationData) => {
    if(error){
        return console.log(error)
    }

    forecast(locationData.latitude,locationData.longitude,(error,forecastData)=>{
        if(error){
            return console.log(error)
        }
        console.log(locationData.location)
        //console.log(forecastData)
        console.log('Current tempurature is ' + forecastData.tempurature + ' degress')
        console.log('Weather status: '+forecastData.weatherStatus)
    })
})
