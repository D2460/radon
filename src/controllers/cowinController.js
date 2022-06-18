let axios = require("axios")

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/states`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        let options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getVaccination = async function (req, res) {
    try {
        let d_id = req.query.district_id
        let date = req.query.date
        console.log(`Query params are: ${d_id},${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${d_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(201).send({ status: true, msg: result.data })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

const getWeatherReport = async function (req, res) {
    try {
        let qu = req.query.q
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${qu}&appid=6b0e2a07b3ecf8a540d89e9e621fa4da`
        }
        let result = await axios(options)
        res.status(201).send({ status: true, msg: result.data })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}


const citiesWeatherReportSort = async function (req, res) {
    try {

        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let citiesTemp = []
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }  // city:"Delhi"
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=6b0e2a07b3ecf8a540d89e9e621fa4da`
            }
            let result = await axios(options)
            console.log(result.data.main.temp)
            obj.temp = result.data.main.temp
            citiesTemp.push(obj)
        }
        let sorted = citiesTemp.sort((a, b) => { return a.temp - b.temp })
        res.status(201).send({ status: true, msg: sorted })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

const getMeme = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(201).send({ status: true, msg: result.data })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}

const memeHandler = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=Dip1231&password=dipen1996@`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(201).send({ status: true, msg: result.data })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getVaccination = getVaccination
module.exports.getWeatherReport = getWeatherReport
module.exports.citiesWeatherReportSort = citiesWeatherReportSort
module.exports.getMeme = getMeme
module.exports.memeHandler = memeHandler



