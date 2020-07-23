const express = require('express');
const router = express.Router();
const db = require('../models')




/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await db.User.findAll();
  res.json({
    users: users

  });
});

module.exports = router;
