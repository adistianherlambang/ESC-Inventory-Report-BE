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

module.exports = { createUser, getUserByUnique }