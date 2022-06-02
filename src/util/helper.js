const Date1 = function () {
    let currentDate = new Date()
    console.log(currentDate)
}
const Month2 = function () {
    let currentDate2 = new Date()
    let currentMonth = currentDate2.getMonth() + 1
    console.log(currentMonth)
}

const BatchInfo = function () {
    console.log("Roadon, W3D3, the topic for today is Nodejs module system")
}

module.exports.Date1 = Date1
module.exports.Month2 = Month2
module.exports.BatchInfo = BatchInfo