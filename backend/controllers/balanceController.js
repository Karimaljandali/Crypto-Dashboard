const asyncHandler = require('express-async-handler')

// @desc    Get Balance
// @route   GET /api/balance
// @access  Private
const getBalance = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Get Balance' })
})

// @desc    Set Balance
// @route   POST /api/balance
// @access  Private
const setBalance = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Set Balance' })
})

// @desc    Update Balance
// @route   PUT /api/balance/:id
// @access  Private
const updateBalance = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Updated balance ${req.params.id}` })
})

// @desc    Delete Balance
// @route   Delete /api/balance/:id
// @access  Private
const deleteBalance = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Deleted Balance ${req.params.id}` })
})

module.exports = {
    getBalance,
    setBalance,
    updateBalance,
    deleteBalance
}