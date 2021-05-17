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

userSchema.methods.addToWage = function(income) {
    const clonedTotal = [...this.sum.total]
    const index = clonedTotal.findIndex(c => {
        return c.incomeId.toString() === income._id.toString()
    })
    clonedTotal.push({
        incomeId: income._id
    })

/*     const newWage = {total: clonedTotal}
    this.wage = newWage */

    this.wage = {total: clonedTotal}

    return this.save()
}

module.exports = model('User', userSchema)