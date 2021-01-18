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


const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/los%20Angeles.json?access_token=pk.eyJ1IjoibWFoYnViaG9zc2FpbiIsImEiOiJja2syaHFuZGgwYjdwMndudTI4ZHlwanp3In0.BeiFxca5C3lHuJjHnxsnfg&limit=1'

request({url:geocodeURL,json: true},(error,response) => {

    if(error) {
        console.log('Unable to connect to the map service!!!')
    } else if(response.body.message || response.body.features.length===0) {
        console.log('Unable to find location! Try again ')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log('Latitude: '+latitude+', Longitude: '+longitude)
    }
    
}) 
