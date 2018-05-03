const dbActivities = require('../db/queries/activities')
const dbEntries = require('../db/queries/entries')
const dbMoods = require('../db/queries/moods')
const dbUsers = require('../db/queries/users')
const express = require('express')
const router = express.Router()
const { loginRequired } = require('../auth/helpers')
const passport = require('../auth/local')

router.get('/')
router.get('/:activityId')
router.post('/new')
router.patch('/:activityId')
router.delete('/:activityId')

module.exports = router;