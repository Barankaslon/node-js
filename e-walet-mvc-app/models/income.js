const {Schema, model} = require('mongoose')

const opts = {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
};

const income = new Schema({
    employer: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    wage: {
        type: Number,
        required: true
    }
}, opts)


module.exports = model('Income', income)

/* const uuid = require('uuid').v4
const fs = require('fs')
const path = require('path')

class Income {
    constructor(employer, position, wage) {
        this.employer = employer
        this.position = position
        this.wage = wage
        this.id = uuid()
    }

    toJSON() {
        return {
            employer: this.employer,
            position: this.position,
            wage: this.wage,
            id: this.id
        }
    }

    static async update(wage) {
        const incomes = await Income.getAll()

        const idx = incomes.findIndex(i => i.id === wage.id)
        incomes[idx] = wage
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'incomes.json'),
                JSON.stringify(incomes),
                (err) => {
                    if (err) {
                        reject(err)
                    }else{
                        resolve()
                    }
                }
            )
        })
    }

    async save() {
        const incomes = await Income.getAll()
        incomes.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'incomes.json'),
                JSON.stringify(incomes),
                (err) => {
                    if (err) {
                        reject(err)
                    }else{
                        resolve()
                    }
                }
            )
        })


        console.log('Incomes', incomes)
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'incomes.json'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }   
    
                }
            )
        })
    }

    static async getById(id) {
        const income = await Income.getAll()
        return income.find(i => i.id === id)
    }
}

module.exports = Income */