
const express = require('express')
const router = express.Router()
const User = require('../Model/userModel')

router.post('/register', (req, res) => {

  const { name, email, password } = req.body
  const newuser = new User({ name, email, password })

  try {
    newuser.save()
    res.send("registered successfully")
  } catch (error) {
    res.send(error)
  }
})

router.post('/login', async (req, res) => {

  const { name, email } = req.body

  try {
    let userexist = await User.findOne({ email })

    if (userexist) {
      res.send(userexist)
    }

  } catch (error) {
    res.send("User does not exist")

  }

}
)

router.get('/getallusers', async (req, res) => {

  try {
     const users=await User.find({})
     res.send(users)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router