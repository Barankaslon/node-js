const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sum: {
        total: [
            {
                incomes: {
                    type: Number,
                    required: true,
                    default: 0
                },
                incomeId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Income',
                    required: true
                }
            }
        ]
    }
})

module.exports = model('User', userSchema)