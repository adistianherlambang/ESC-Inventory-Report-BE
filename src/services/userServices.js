const User = require("../models/user")

async function createUser(userData) {
  const {name, unique, role} = userData

  const createUser = new User({
    name,
    unique,
    role
  })
  const saveUser = await createUser.save()
  return saveUser
}

async function getUserByUnique(unique) {
  return await User.findOne({unique})
}

async function getUser() {
  try {
    return await User.find()
  } catch(err) {
    throw new Error("Gagal mengambil data" + err.message)
  }
}

module.exports = { createUser, getUserByUnique, getUser }