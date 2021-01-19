const request = require('request')

const forecast = (latichude,longitude,callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latichude + '&lon=' + longitude + '&appid=a2e219452bdf467ba708d8cd19f5c4d1&units=metric'

    request({url:url, json: true},(error,response)=>{

        if(error){
            callback('Unable to connect to the weather service',undefined)
        } else if(response.body.cod && response.body.message){
            callback('Unable to find location!!! Try again ',undefined)
        } else {

            callback(undefined,{
                tempurature: response.body.current.temp,
                weatherStatus: response.body.current.weather[0].main
            })
        }
    })
}


module.exports = forecast