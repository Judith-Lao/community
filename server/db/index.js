const db = require('./database')
const Account = require('./account')
const Post = require('./post')
const Comment = require('./comment')

Account.hasMany(Post)
Post.belongsTo(Account)

Comment.belongsTo(Account)
Account.hasMany(Comment)

Comment.belongsTo(Post)
Post.hasMany(Comment)

Comment.belongsTo(Comment)

module.exports = {
  db,
  Account,
  Post,
  Comment
}
