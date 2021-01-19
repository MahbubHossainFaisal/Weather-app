const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')




forecast('23.8103','90.4125',(error,data)=>{
    console.log(error)
    console.log(data)
})




geocode('Rajshahi',(error,data) => {
    console.log(error)
    console.log(data)
})
