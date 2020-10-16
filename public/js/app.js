//console.log('Client side java script is loaded here')

// fetch('http://localhost:3000/weather?address=Badlpaur').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.forecast)

//         }
        
//     })

// })

const weatherForm = document.querySelector('form')
const pincodeForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    const url = 'http://localhost:3000/weather?address='+location
   // console.log(url)
    messageOne.textContent = 'Loading.....'
    messageTwo.textContent = ''

    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
            //console.log(data.error)
        }
        else{
           
           messageOne.textContent = ('Location is : ' + data.location),
           messageTwo.textContent = ('Temperature is : ' + data.forecast)
            //console.log(data.location)
            //console.log(data.forecast)

        }
        
    })

})


   
})

//adding code for pincode data

// weatherForm.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const pincode = search.value
//     //const pincodeUrl = 'https://api.postalpincode.in/pincode/110001'
//     const pincodeUrl = 'http://api.postalpincode.in/pincode/'+location
//    // console.log(url)
//     //messageOne.textContent = 'Loading.....'
//     //messageTwo.textContent = ''
//     messageThree.textContent = 'loading pincode data'
//     messageFour.textContent = ''

//     fetch(pincodeUrl).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             messageThree.textContent = data.error
//             //console.log(data.error)
//         }
//         else{
           
//             messageThree.textContent = ('pincode is : ' + data.pincode),
//            messageTwo.textContent = ('locations  are : ' + data.Message)
//             //console.log(data.location)
//             //console.log(data.forecast)

//         }
        
//     })

// })


   
// })

// fetch('https://api.postalpincode.in/pincode/421503').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.Message[0])
//         }

//     })

// })
