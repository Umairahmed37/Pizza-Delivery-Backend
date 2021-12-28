
const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  name: { type: String, require },
  email: {type: String, require},
  userId:{type: String, require},
  orderItems:[],
  orderAmount: {type: String, require},
  isDelivered:{type:Boolean, require},
  
},{
  timestamps: true
})

module.exports= mongoose.model('Order',OrderSchema)
 