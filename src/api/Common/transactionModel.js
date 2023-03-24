import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    fromActNumber: {
        type: String
    },
    customerName: {
        type: String
    },
    toActNumber: {
        type: String
    },
    holdername: {
        type: String
    },
    amount: {
        type: String
    },    
    date: {
        type: String
    }
},
    {
        timestamps: true
    });

const transactionModel = mongoose.model('transactions', transactionSchema)

export default transactionModel