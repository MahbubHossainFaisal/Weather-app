const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b4e4685dd80a84e9cb33014900f411aa'

request({ url: url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})