const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2]

if(!address) {
    console.log('Please provide an address!')
} else {

    geocode(address,(error,{latitude,longitude,location}) => {
    if(error){
        return console.log(error)
    }

    forecast(latitude,longitude,(error,{tempurature,weatherStatus})=>{
        if(error){
            return console.log(error)
        }
        console.log(location)
        //console.log(forecastData)
        console.log('Current tempurature is ' + tempurature + ' degress')
        console.log('Weather status: '+weatherStatus)


    })
})


}


