const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2]

if(!address) {
    console.log('Please provide an address!')
} else {

    geocode(address,(error,locationData) => {
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


}


