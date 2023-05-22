const express = require("express")
const app = express()
const axios = require("axios")
const { response } = require("express")
const fs = require('fs')

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

const port = process.argv[2] || 4044 


fs.writeFile("D:\\vadymkon\\knu\\weblabs\\4\\labfile\\backend\\public\\config.js", `const PORTik = ${process.argv[2] || 4044};`, (error) => {
    if (error) console.log(error);
})
/*
fs.writeFile(__dirname + '/public/port.txt', `${process.argv[2] || 4044}`, (error) => {
    if (error) console.log(error);
})
*/

app.post(`/api`, async (req, res) => {
    const { startTime, endTime } = req.body

    /*  `https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${stime.value}&endtime=${etime.value}` */
    try {
        const response = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${startTime}&endtime=${endTime}`)
        res.status(200).json(response.data)
    } catch (error) {
        res.status(response.status).json({ error: error.message });
    }
})

app.use(express.static('public'))

app.use('/', async (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(__dirname + '/index.html')
})

app.use('/index.js', async (req, res) => {
    res.setHeader('Content-Type', 'text/js')
    res.sendFile(__dirname + '/index.js')
})

app.use('/index.css', async (req, res) => {
    res.setHeader('Content-Type', 'text/css')
    res.sendFile(__dirname + '/index.css')
})




console.log(process.argv[2])

//

app.listen(port, () => {
    
    console.log(`started at ${port}`)
});
