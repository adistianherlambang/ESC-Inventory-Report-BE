const express = require("express")
const router = express.Router()
const { getPmtData, createPmtReport, getPmtDataByName } = require("../services/pmtServices")

router.get("/get/:name", async (req, res) => {
  try {
    const data = await getPmtDataByName(req.params.name)
    if (!data) return res.status(404).json({message: "data tidak ditemukan"})
    console.log(req.params.name)
    res.json(data)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

module.exports = router