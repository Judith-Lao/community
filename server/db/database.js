const Sequelize = require('sequelize')
const chalk = require('chalk')

console.log(chalk.yellow('Opening database connection'))

 const db = new Sequelize(`postgres://localhost:5432/community`, {
  logging: false
})

 module.exports = db
