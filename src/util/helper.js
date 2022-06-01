const Date = function printDate() {
    console.log("Todays Date is: 01.06.2022")
}

const Month = function printMonth() {
    console.log("Current Month is June-2022")
}

const BatchInfo = function getBatchInfo() {
    console.log("Roadon, W3D3, the topic for today is Nodejs module system")
}

module.exports.Date = Date
module.exports.Month = Month
module.exports.BatchInfo = BatchInfo