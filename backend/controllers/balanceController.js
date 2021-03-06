const asyncHandler = require('express-async-handler')

const Balance = require('../models/balanceModel')
const User = require('../models/userModel')

// @desc    Get Balance
// @route   GET /api/balance
// @access  Private
const getBalance = asyncHandler(async (req, res) => {
    const balance = await Balance.find({ user: req.user.id })

    res.status(200).json(balance)
})

// @desc    Set Balance
// @route   POST /api/balance
// @access  Private
const setBalance = asyncHandler(async (req, res) => {
    if(!req.body.quantity || !req.body.priceUSD || !req.body.coinId) {
        res.status(400)
        throw new Error('Please check for missing required values.')
    }

    const balance = await Balance.create({
        quantity: req.body.quantity,
        priceUSD: req.body.priceUSD,
        coinId: req.body.coinId,
        user: req.user.id
    })
    res.status(200).json(balance)
})

// @desc    Update Balance
// @route   PUT /api/balance/:id
// @access  Private
const updateBalance = asyncHandler(async (req, res) => {
    const balance = await Balance.findById(req.params.id)

    if(!balance) {
        res.status(400)
        throw new Error('Balance not found')
    }

    const user = await User.findById(req.user.id)

    // Check for User
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure logged in user matches the balance user
    if(balance.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedBalance = await Balance.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedBalance)
})

// @desc    Delete Balance
// @route   Delete /api/balance/:id
// @access  Private
const deleteBalance = asyncHandler(async (req, res) => {
    const balance = await Balance.findById(req.params.id)

    if(!balance) {
        res.status(400)
        throw new Error('Balance not found')
    }

    const user = await User.findById(req.user.id)

    // Check for User
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure logged in user matches the balance user
    if(balance.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await balance.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getBalance,
    setBalance,
    updateBalance,
    deleteBalance
}