// Problem - 5

// Module - 1

const h = function (req, res) {
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(movies)
    res.send({data:movies})
}

// Module - 2

const k = function (req, res) {
    let movies_new = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    if( req.params.indexNumber === "1" ){
        console.log("This is Valid Index and first movie is: " + movies_new[0])
        res.send("First movie is: " + movies_new[0])  
    }
    else if(req.params.indexNumber === "2"){
        console.log("This is Valid Index and second movie is: " + movies_new[1])
        res.send("Second movie is: " + movies_new[1]) 
    }
    else if(req.params.indexNumber === "3"){
        console.log("This is Valid Index and third movie is: " + movies_new[2])
        res.send("Third movie is: " + movies_new[2]) 
    }
    else if (req.params.indexNumber === "4"){
        console.log("This is Valid Index and fourth movie is: " + movies_new[3])
        res.send("Fourth movie is: " + movies_new[3]) 
    }
     
    // Module - 3

    else if ( req.params.indexNumber > 4){
        console.log("Error: Index out of range!")
        res.send("Error: Index out of range!")
    }
    else{
        console.log("Error: Index is below 0. It starts from index 1")
        res.send("Error: Index is below 0. It starts from index 1") 
    }
}

// Module - 4

const m = function (req, res) {
    let new_arr = [{"id":1,"name":"The Shining"},
    {"id":2,"name":"Incendies"},
    {"id":3,"name": "Rang de Basanti"},
    {"id":4,"name":"Finding Nemo"}]
    console.log(new_arr)
    res.send({data : new_arr})
}

// Module - 5

const w = function (req, res) {
    let arr = [{"id":1,"name":"The Shining"},
    {"id":2,"name":"Incendies"},
    {"id":3,"name": "Rang de Basanti"},
    {"id":4,"name":"Finding Nemo"}]

    if(req.params.filmId === "1"){
        console.log(arr[0])
        res.send(arr[0])
    }
    else if(req.params.filmId === "2"){
        console.log(arr[1])
        res.send(arr[1])
    }
    else if(req.params.filmId === "3"){
        console.log(arr[2])
        res.send(arr[2])
    }
    else if(req.params.filmId === "4"){
        console.log(arr[3])
        res.send(arr[3])
    }
    else{
        console.log("No movie exists with this id")
        res.send("No movie exists with this id")
    }
}

module.exports.h = h
module.exports.k = k
module.exports.m = m
module.exports.w = w