const mongoose = require('mongoose')

const balanceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Balance'
    },
    quantity: {
        type: Number,
        required: [true, 'Please add a quantity']
    },
    priceUSD: {
        type: Number,
        required: [true, 'Please add a USD price']
    },
    coinId: {
        type: Number,
        required: [true, 'Please a Coin ID']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Balance', balanceSchema)