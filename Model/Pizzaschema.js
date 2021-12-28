const mongoose = require('mongoose')

const pizzaschema = new mongoose.Schema(
  {
    name: {type: String,require},
    varients: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require }
  }, {
  timestamps: true,
}
)
module.exports = mongoose.model('Pizza', pizzaschema)