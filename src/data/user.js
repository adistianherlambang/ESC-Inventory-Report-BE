const express = require('express')
const router = express.Router()
const { getUser } = require('../services/userServices')

router.get("/", async(req, res) => {
  try {
    const data = await getUser()
    res.json(data)
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

module.exports = router