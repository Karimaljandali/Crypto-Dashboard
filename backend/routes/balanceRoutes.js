const express = require('express')
const router = express.Router()
const { 
    getBalance,
    setBalance,
    updateBalance,
    deleteBalance
} = require('../controllers/balanceController')

router.route('/').get(getBalance).post(setBalance)

router.route('/:id').delete(deleteBalance).put(updateBalance)

module.exports = router