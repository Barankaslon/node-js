const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: String,
    password: {
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

userSchema.methods.addToTotalIncome = function(income) {
    const clonedTotalIncome = [...this.sum.total]
    const index = clonedTotalIncome.findIndex(i => {
        return i.incomeId.toString() === income._id.toString()
    })
    clonedTotalIncome.push({
        incomeId: income._id,
        incomes: income
    })
/* 
    const newTotalIncome = {total: clonedTotalIncome}
    this.total = newTotal */

    this.income = {total: clonedTotalIncome}

    return this.save()
}

module.exports = model('User', userSchema)