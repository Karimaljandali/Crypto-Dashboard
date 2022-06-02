const express = require('express')
const router = express.Router()
const { 
    getBalance,
    setBalance,
    updateBalance,
    deleteBalance
} = require('../controllers/balanceController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getBalance).post(protect, setBalance)

router.route('/:id').delete(protect, deleteBalance).put(protect, updateBalance)

module.exports = router