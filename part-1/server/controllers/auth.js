const users = []
const bcrypt = require(`bcryptjs`)

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      // console.log(req)
      let { username, email, firstName, lastName, password} = req.body

      const salt = bcrypt.genSaltSync(10)
      // console.log(salt)

      const passwordHash = bcrypt.hashSync(password, salt)
      console.log(passwordHash)
  
      let newUser = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }
      
      console.log('Registering User')
      //   console.log(req.body)
      //   password = bcrypt.hash
        users.push(newUser)
        userToReturn = {
          ...newUser
        }
        delete userToReturn.passwordHash
        res.status(200).send(userToReturn)

    }
}