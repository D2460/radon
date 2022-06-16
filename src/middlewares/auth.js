const jwt = require("jsonwebtoken");

const Authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) {
            return res.status(400).send({ status: false, msg: "token must be require." })
        }
        console.log(token);

        let decodedToken = jwt.verify(token, "functionup-radon");

        if (!decodedToken) return res.status(404).send({ status: false, msg: "token is invalid" });
        next()
    }

    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }

}


const Authorization = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) {
            return res.status(400).send({ status: false, msg: "token must be require." })
        }

        console.log(token);

        let decodedToken = jwt.verify(token, "functionup-radon");

        if (!decodedToken) return res.status(404).send({ status: false, msg: "token is invalid" });

        let userToBeModified = req.params.userId

        let userLoggedIn = decodedToken.userId

        if (userToBeModified != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

        next()
    }
    catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }


}

module.exports.Authenticate = Authenticate
module.exports.Authorization = Authorization
