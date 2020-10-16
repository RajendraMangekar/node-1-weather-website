
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoData = require('./util/geoData')
const weatherData = require('./util/weatherData')

//const address = process.argv[2]

//console.log(__dirname)
//console.log(path.join(__dirname,'../public'))
const app = express()
//define express paths for express engine
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
//set handlers engine and view locations
app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//set up static directory to serve
app.use(express.static(publicDirectoryPath))

//app.set('view engine','hbs')
app.get('',(req,res)=>{
    
res.render('index',{
    title : 'Weather App',
    Name : 'Rajendra Mangekar'
})
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About Us',
        Name : 'Rajendra Mangekar'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        source :'http://api.weatherstack.com/current?access_key=ea6392114e82bba12c41f000f2084991&query=19.15,73.262',
        title:'Difficult to get Data?',
        Name : 'Rajendra'
    })

})
 
app.get('/products',(req,res)=>{

    if(!req.query.search){
        return res.send({
            error:'No search was provided'
        })
    }
    
    //console.log(req.query.search)
    res.send({products:[]})

})

//Weather Data
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({error :'Kindly provide address'})

    }
    else{
        geoData(req.query.address,(error,{latitude,longitude,location} = {})=>{
            if(error){
                return res.send({error})
            }
            //console.log(data)
            weatherData(latitude,longitude,(error,forecastdata)=>{
    
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast : forecastdata,
                    location,
                    address : req.query.address


                })

            })

        })
    }

})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        title : '404',
        error : 'Article not found',
        Name : 'Rajendra'
    })

    
   // res.send('Help article not found')

})

app.get('*',(req,res)=>{
    res.render('404',{
        title : '404',
        error : 'Page not found',
        Name : 'Rajendra'
    })
    //res.send('My 404 Page')

})



app.listen(3000,()=>{
    console.log('server is up at port 3000')
})