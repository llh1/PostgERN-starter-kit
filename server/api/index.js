const express = require('express')
const router = express.Router()
const passport = require('passport')

const usersDb = require('../services/database/users')

router.get('/status', (req, res) => {
  res.send('All good')
})

/**
 * This route is protected. If you GET /api/protected-status without a valid token
 * then it will 403 (forbidden). Check the README for information on how to authenticate and get a token
 */
router.get('/protected-status',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('All good');
  })

router.get('/users', (req, res) => {
  usersDb.getAllUsers().then(data => {
    res.send(data)
  }).catch(err => {
    console.error(err);
    res.send(500)
  })
})

module.exports = router
