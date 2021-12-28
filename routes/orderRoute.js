
const express = require('express')
const router = express.Router()

const Order = require('../Model/OrderModel')

router.post('/myOrder', (req, res) => {
  const { id, name, email, cartitems, isDelivered, subtotal } = req.body
  const Orders = new Order({
    name,
    email,
    userId: id,
    orderItems: cartitems,
    orderAmount: subtotal,
    isDelivered,
  })
  try {
    Orders.save()
    res.send("saved successfully")
  } catch (error) {
    res.send({ message: error })
  }
})

router.get('/getallorders', async (req, res) => {

  try {
    const gotorders = await Order.find({})
     res.send(gotorders)

  } catch (error) {
    return res.status(400).json({ message: error })
  }
})

router.patch('/deliverorder', async (req, res) => {

  const {orderid}= req.body
   try {
    const gotorders = await Order.findByIdAndUpdate({_id:orderid},{isDelivered:true})
     res.send(gotorders.data)

  } catch (error) {
    return res.status(400).json({ message: error })
  }
})




module.exports = router