const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Dipen1234:jVP8pyAv3s3NzEM3@cluster0.dkmbl.mongodb.net/Dipen8432", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


const AssignementMW = function (req, res, next){
    let currentDate = new Date()
    let Datetime = currentDate.getDate() + "-"
                   + (currentDate.getMonth()+1) + "-"
                   + currentDate.getFullYear() + " "
                   + currentDate.getHours() + ":"
                   + currentDate.getMinutes() + ":"
                   + currentDate.getSeconds();
    let Ip = req.ip
    let url = req.originalUrl
    console.log(`${Datetime} ${Ip} ${url}`)
    next();
}

app.use(AssignementMW)

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
