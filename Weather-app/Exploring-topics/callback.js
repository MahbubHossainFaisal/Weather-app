//Asynchronous call back function

const geocode = (address,callback) => {
    setTimeout(()=>{
      const  data = {
            latitude: 0,
            longitude: 0,
        }
         callback(data)
    },2000)
   
}

geocode('Dhaka',(data) => {
    console.log(data)
})


//Another example of asynchronous call back function


const sum = (a,b,callback) => {
    setTimeout(()=> {
       const ans = a+b

        callback(ans)
    },2000)
}

sum(3,5,(ans)=>{

    console.log(ans)
})