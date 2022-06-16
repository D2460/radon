const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
    try {
        let data = req.body;
        let savedData = await userModel.create(data);
        res.status(201).send({ msg: savedData });
    } catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }

};

const loginUser = async function (req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;
        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(404).send({
                status: false,
                msg: "username or the password is not corerct",
            });

        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "Radon",
                organisation: "FunctionUp",
            },
            "functionup-radon"
        );
        res.setHeader("x-auth-token", token);
        res.status(201).send({ status: true, token: token });

    } catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }

}
const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails) {
            return res.status(404).send({ status: false, msg: "No such user exists." });
        }
        res.status(201).send({ status: true, data: userDetails });
    } catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
};

const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails) {
            return res.status(404).send({ status: false, msg: "No such user exists." });
        }
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
        res.status(201).send({ status: "updatedUser", data: updatedUser });
    } catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }

};

const postMessage = async function (req, res) {
    try {
        let message = req.body.message
        let user = await userModel.findById(req.params.userId)
        if (!user) return res.status(404).send({ status: false, msg: 'No such user exists' })
        let updatedPosts = user.posts
        updatedPosts.push(message)
        let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, {$set:{posts: updatedPosts }}, { new: true })
        return res.status(201).send({ status: true, data: updatedUser })
    } catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }

}

const deleteUserDetails = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails) {
            return res.status(404).send({ status: false, msg: "No such user exists." });
        }
        let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true })
        console.log({ "DeletedData": deleteUser })
        res.status(201).send({ status: true, msg: "Data has been deleted Successfully." })
    } catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUserDetails = deleteUserDetails
module.exports.postMessage = postMessage