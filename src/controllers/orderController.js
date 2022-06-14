const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UserModel = require("../models/userModel")

const createOrder= async function (req, res) {
    let data= req.body
    let userId = data.user_id
    let productId = data.product_id
    let header = req.headers["isfreeappuser"]
    let headerValue = false
    let Price = await ProductModel.find({productId})
    let userValidation  = await UserModel.exists({userId})
    let productValidation = await ProductModel.exists({productId})
    if(userValidation){
        if(productValidation){
            let purchase = await OrderModel.create(data)
            if(header == "false"){
                let balanceUpdate = await UserModel.findOneAndUpdate({_id : userId},{$set:{balance:`${balance}-${Price}`}},{new:true}).select({balance:1,_id:0})
                let AmountUpdate = await OrderModel.findOneAndUpdate({_id:"62a77c4ceff3db5e786a6320"},{$set:{amount:balanceUpdate,isFreeAppUser:false}},{new:true}).select({amount:1,isFreeAppUser:1,_id:0})
                if(AmountUpdate.amount>=0){
                    res.send({success : purchase,"isFreeAppUser":AmountUpdate.isFreeAppUser,"Amount":AmountUpdate.amount})
                }
                else{
                    res.send("Balance is not Sufficient for this using the App.")
                }
               
            }
            else if(header == "true"){
                headerValue = true
                let AmountUpdate = await OrderModel.findOneAndUpdate({_id:"62a77d0c5b8e16bc5f35dd69"},{$set:{amount:0, isFreeAppUser:true}},{new:true}).select({amount:1,_id:0})
                res.send({success:purchase,"Amount":AmountUpdate.amount})
            }
            res.send({success : purchase})
            let order = {
                isFreeAppUser:headerValue,
                productId:productId,
                userId:userId
            }
            if(headerValue){
                order.amount = 0
                let OrderCreated = await OrderModel.create(order)
            }else{
                if(user.balance >= productId.Price){
                    user.balance = user.balance - productId.balance
                    let updateUser = await user.save()
                    order.amount = product.Price
                    let OrderCreated = await OrderModel.create(order)
                    res.send({msg:"Order Created"})
                } else{
                    res.send({msg:"User has insufficient balance."})
                }
            }
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}

module.exports.createOrder = createOrder
