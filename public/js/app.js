//console.log('Client side java script is loaded here')



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
    //const url_local = 'http://localhost:3000/weather?address='+location
    const url = '/weather?address='+location
   // console.log(url)
    messageOne.textContent = 'Loading.....'
    messageTwo.textContent = ''
    //messageThree.textContent = ''

    fetch(url).then((response)=>{
    response.json().then((data)=>{
        //console.log('full data is' +data)
        if(data.error){
            messageOne.textContent = data.error
            //console.log(data.error)
        }
        else{
           
           messageOne.textContent = ('Location is : ' + data.location),
           messageTwo.textContent = ('Temperature is : ' + data.forecast)
           //messageThree.textContent = ('Weather description : '+ data.humidity)
           //messageFour.textContent = ('humidity : '+data.humidity)
            //console.log(data.humidity)
            //console.log(data.forecast)

        }
        
    })

})


   
})

