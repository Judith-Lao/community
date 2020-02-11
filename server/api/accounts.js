const router = require('express').Router()
const {Account} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.findAll({
      attributes: ['id', 'name']
    })
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

module.exports = router
