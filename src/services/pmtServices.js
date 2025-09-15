const pmtData = require("../models/pmtData");

async function createPmtReport(data) {
  try{
    const createReport = new pmtData(data)
    const saveReport = await createReport.save()
    return saveReport
  } catch (err) {
    console.error(`error ${err}`)
  }
}

async function getPmtData(data) {
  return await pmtData.findOne({data})
}

async function getPmtDataByName(name){
  try{
    const data = await pmtData.find({name: name})
    return data
  } catch (err) {
    throw new Error("gagal mengambil data" + err.message)
  }
}

module.exports = { getPmtData, createPmtReport, getPmtDataByName }