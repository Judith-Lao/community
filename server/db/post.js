const Sequelize = require('sequelize')
const db = require('./database')

const Post = db.define('post', {
 content: {
   type: Sequelize.TEXT,
   allowNull: false,
   validate: {
     notEmpty: true
   }
 },
 allowComments: {
   type: Sequelize.BOOLEAN,
   allowNull: false,
   validate: {
     notEmpty: true
   }
 },
 type: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
     notEmpty: true
   }
 }
})

module.exports = Post
