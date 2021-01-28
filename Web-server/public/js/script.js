console.log('Client side javascript is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading......'
    messageTwo.textContent = ''
    

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{

    response.json().then((data)=>{
        if(data.error){
            const error=data.error
            messageOne.textContent = ''
            messageTwo.textContent = error
            
        } else{

            const tempurature = data.forecast.tempurature
            const status = data.forecast.weatherStatus

            messageOne.textContent = ('Tempurature: ')+ tempurature + ('°C, Weather status: '+ status)
            messageTwo.textContent = 'Location: '+ data.location
           
        }
        
    })
})

})