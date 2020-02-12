const Sequelize = require('sequelize')
const db = require('./database')

const Post = db.define('post', {
 title: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
     notEmpty: true
   }
 },
 content: {
   type: Sequelize.TEXT
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
