const router = require('express').Router()
const {Post, Account} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      attributes: ['id', 'content', 'allowComments', 'type', 'accountId'],
      include: [{
        model: Account
      }]
    })
    res.json(posts)
  } catch (err) {
    next(err)
  }
})

module.exports = router
