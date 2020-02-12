const router = require('express').Router()
const {Post, Account, Comment} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      attributes: ['id', 'title', 'content', 'allowComments', 'type', 'accountId'],
      include: [{
        model: Account
      }]
    })
    res.json(posts)
  } catch (error) {
    next(error)
  }
})

router.get('/:postId', async (req, res, next) => {
  try {
    //use raw SQL query
    const post = await Post.findByPk(req.params.postId, {
      include: [
        {model: Comment, include: Account},
        {model: Account}
      ]
    })
    res.json(post)
  } catch (error) {
    next(error)
  }
})

module.exports = router
