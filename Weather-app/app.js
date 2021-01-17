//Asynchronous behaviour

console.log('Starting')

setTimeout(() => {
    console.log('This is being printed in the console after 3 second') // This will print after 3 second when starting and stopping will already be printed

},3000)

setTimeout(()=> {
    console.log('0 sec timer')
},0)

console.log('stopping')