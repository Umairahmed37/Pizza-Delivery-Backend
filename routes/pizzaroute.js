
const express = require('express')
const Pizza = require('../Model/Pizzaschema')
const router = express.Router()


router.get('/getallpizzas', async (req, res) => {

  try {
    const pizzas = await Pizza.find({})
    res.send(pizzas)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}
)

router.post('/updatepizza', async (req, res) => {

  const { id } = req.body
   try {
     const pizza = await Pizza.findById(id)

    res.send(pizza)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}
)


router.post('/AddPizza', async (req, res) => {

  const { pizza } = req.body
  const { name, image, description, category, price } = pizza
 
  try {
    const addpizza = new Pizza({
      name,
      prices: price,
      category,
      varients: ['small', 'medium', 'large'],
      description,
      image
    })
    await addpizza.save()
     res.status(200).json("Added Successfully")
  } catch (error) {
    res.status(404).json({ message: error })
  }
})

router.post('/updatefinal', async (req, res) => {

  const { pizza } = req.body
    try {
     const updated = await Pizza.findByIdAndUpdate(pizza._id,pizza)

    res.send(updated)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}
)

router.post('/deletepizza', async (req, res) => {
 
  try {
    const pizza = await Pizza.findByIdAndDelete(req.body.id)
    res.status(200).json({pizza})
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}
)

module.exports = router