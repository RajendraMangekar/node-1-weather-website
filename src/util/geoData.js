const request = require('postman-request')
//const { argv } = require('process')
const fs = require('fs')


const geoData =(m_place,callback)=>{
   // const murl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(place) + '.json?access_token=pk.eyJ1IjoicmFqZW5kcmFtYW5nZWthciIsImEiOiJja2Z3amptN2sxYmVuMnF0OHZ3d25uajRpIn0.GLxjGWqQyQovoCnr7cNU5A'
    const murl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + m_place + '.json?access_token=pk.eyJ1IjoicmFqZW5kcmFtYW5nZWthciIsImEiOiJja2Z3amptN2sxYmVuMnF0OHZ3d25uajRpIn0.GLxjGWqQyQovoCnr7cNU5A'
    //console.log(murl)

    request({url :murl,json:true},(error,{body})=>{
        if(error){
            callback('Please check Network error',undefined)
            

        }else if(body.features.length===0){
            callback('Please check configurations setting',undefined)
            

        }else{
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude:body.features[0].center[1],
                location:body.features[0].place_name
            })
            
            

        }
    })

} 

    module.exports = geoData

