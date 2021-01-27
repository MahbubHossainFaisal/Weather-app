console.log('Client side javascript is loaded')

fetch('http://localhost:3000/weather?address=Dhaka').then((response) =>{

    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        } else{
            console.log(data.forecast)
            console.log(data.location)
        }
    })
})