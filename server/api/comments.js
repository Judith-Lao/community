const router = require('express').Router()
const {Comment} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      attributes: ['id', 'content']
    })
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

module.exports = router
