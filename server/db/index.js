const db = require('./database')
const Account = require('./account')
const Post = require('./post')

Account.hasMany(Post)
Post.belongsTo(Account)

module.exports = {
  db,
  Account,
  Post
}
