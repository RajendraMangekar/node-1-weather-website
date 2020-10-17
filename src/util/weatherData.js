//const maps = require('./geoData.js')
const request = require('postman-request')
//const { argv } = require('process')

const weatherData = (latitude, longitude, callback)=>{
    

    //const weatherURL = 'http://api.weatherstack.com/current?access_key=ea6392114e82bba12c41f000f2084991&query='+ encodeURIComponent(latcordinates)+ ','+encodeURIComponent(longcordinates)
    const weatherURL = 'http://api.weatherstack.com/current?access_key=ea6392114e82bba12c41f000f2084991&query='+ longitude+ ','+ latitude 
    //console.log('weather url' + weatherURL)



    request({url:weatherURL,json:true},(error,{body})=>{
        if(error){
            callback('please check network system',undefined)

        }else if(body.current=== 0){
            callback('please check configuration setting ',undefined)

        }else{
            
            
            callback(undefined, body.current.temperature+'°C' +' & humidity is ' + body.current.humidity +'%'
                
                //humidity :body.current.humidity
            )
            //callback(undefined,body.current.weather_descriptions)
            //callback(undefined,body.current.humidity)
            //console.log('humidity is '+body.current.humidity)
            //console.log(undefined,body.current.temperature)
            //console.log('humidity is ' + body.current.humidity)

        }
        
    })
    
    }

    
    module.exports = weatherData
