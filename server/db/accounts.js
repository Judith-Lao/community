const Sequelize = require('sequelize');
const db = require('./database');

const Account = db.define('account', {
 name: {
   type: Sequelize.INTEGER
 },
 type: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
     notEmpty: true
   }
 }
});

module.exports = Account;
