const Sequelize = require('sequelize')
const db = require('./database')

const Comment = db.define('comment', {
 content: {
   type: Sequelize.TEXT,
   allowNull: false,
   validate: {
     notEmpty: true
   }
 }
})

module.exports = Comment
