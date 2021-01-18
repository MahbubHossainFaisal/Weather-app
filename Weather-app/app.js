const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&appid=a2e219452bdf467ba708d8cd19f5c4d1&units=metric'

request({ url: url, json: true }, (error,response) => {

    if(error) {
        console.log('Unable to connect to the weather service!!!')
    } else if(response.body.cod && response.body.message) {
        console.log('Unable to find location')
    } else  {
        console.log('It is currently '+response.body.current.temp+ ' degrees out')
        console.log('Current weather is : ' +response.body.current.weather[0].main)
    }
   
})

//Geocoding 

